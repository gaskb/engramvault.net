import asyncio
from datetime import datetime, timezone
import os
from pathlib import Path
import sqlite3
from typing import Any, Dict

from fastapi import FastAPI, Request, Response
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

def _resolve_data_dir() -> Path:
    env_dir = os.getenv("DATA_DIR")
    if env_dir:
        return Path(env_dir)
    default_system = Path("/data")
    if default_system.exists() and os.access(default_system, os.W_OK):
        return default_system
    return Path(__file__).resolve().parent / "data"

DATA_DIR = _resolve_data_dir()
DATA_DIR.mkdir(parents=True, exist_ok=True)
DB_PATH = DATA_DIR / "stats.db"

PUBLIC_DIR = Path(os.getenv("PUBLIC_DIR", str(Path(__file__).resolve().parent)))

# Database initialization
def init_db():
    with sqlite3.connect(DB_PATH) as con:
        con.execute(
            """
            CREATE TABLE IF NOT EXISTS visits (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp TEXT NOT NULL,
                ip TEXT,
                method TEXT,
                path TEXT,
                status INTEGER,
                referer TEXT,
                user_agent TEXT,
                is_page INTEGER DEFAULT 0
            )
            """
        )
        con.execute("CREATE INDEX IF NOT EXISTS idx_visits_ts ON visits(timestamp)")
        con.execute("CREATE INDEX IF NOT EXISTS idx_visits_page ON visits(is_page)")


init_db()

app = FastAPI(title="EngramVault Web", docs_url=None, redoc_url=None)

STATIC_EXTENSIONS = {
    ".css", ".js", ".jpg", ".jpeg", ".png", ".gif", ".ico", ".svg",
    ".woff", ".woff2", ".ttf", ".eot", ".map", ".webp",
}

def log_visit(ip: str, method: str, path: str, status: int, referer: str, user_agent: str, is_page: int):
    now = datetime.now(timezone.utc).isoformat()
    try:
        with sqlite3.connect(DB_PATH, timeout=5.0) as con:
            con.execute(
                """
                INSERT INTO visits (timestamp, ip, method, path, status, referer, user_agent, is_page)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (now, ip, method, path, status, referer[:500] if referer else "", user_agent[:500] if user_agent else "", is_page),
            )
    except Exception as e:
        print(f"[EngramVault Stats] Error logging visit: {e}")

@app.middleware("http")
async def track_visits(request: Request, call_next):
    # Extract real client IP (Cloudflare / Reverse Proxy priority)
    forwarded = (
        request.headers.get("cf-connecting-ip")
        or request.headers.get("x-forwarded-for")
        or (request.client.host if request.client else "unknown")
    )
    client_ip = forwarded.split(",")[0].strip()
    path = request.url.path
    method = request.method
    referer = request.headers.get("referer", "")
    ua = request.headers.get("user-agent", "")

    response: Response = await call_next(request)

    ext = Path(path).suffix.lower()
    is_page = 1 if ext not in STATIC_EXTENSIONS and not path.startswith(("/stats-data.json", "/health", "/stats")) else 0

    if ext in (".html", ".js", ".css", ".svg") or is_page:
        response.headers["Cache-Control"] = "no-cache, must-revalidate"

    # Async logging to avoid blocking request
    asyncio.create_task(
        asyncio.to_thread(log_visit, client_ip, method, path, response.status_code, referer, ua, is_page)
    )

    return response

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/favicon.ico")
def favicon():
    fav = PUBLIC_DIR / "favicon.svg"
    if fav.exists():
        return FileResponse(fav, media_type="image/svg+xml")
    return Response(status_code=404)

@app.api_route("/stats", methods=["GET", "HEAD"])
def stats_view():
    stats_file = PUBLIC_DIR / "stats.html"
    if stats_file.exists():
        return FileResponse(stats_file)
    return JSONResponse({"error": "stats.html not found"}, status_code=404)

@app.get("/stats-data.json")
def stats_data() -> Dict[str, Any]:
    with sqlite3.connect(DB_PATH) as con:
        con.row_factory = sqlite3.Row
        cur = con.cursor()

        # 1. Main Landing Page Counter ('/' and '/index.html' successful visits)
        cur.execute(
            """
            SELECT COUNT(*) as c
            FROM visits
            WHERE path IN ('/', '/index.html') AND status < 400
            """
        )
        landing_views = cur.fetchone()["c"]

        # Landing page unique IPs
        cur.execute(
            """
            SELECT COUNT(DISTINCT ip) as c
            FROM visits
            WHERE path IN ('/', '/index.html') AND status < 400
            """
        )
        landing_unique_ips = cur.fetchone()["c"]

        # Landing page today (UTC)
        cur.execute(
            """
            SELECT COUNT(*) as c
            FROM visits
            WHERE path IN ('/', '/index.html') AND status < 400 AND date(timestamp) = date('now')
            """
        )
        landing_today = cur.fetchone()["c"]

        # Landing page past 7 days
        cur.execute(
            """
            SELECT COUNT(*) as c
            FROM visits
            WHERE path IN ('/', '/index.html') AND status < 400 AND timestamp >= datetime('now', '-7 days')
            """
        )
        landing_week = cur.fetchone()["c"]

        # First visit timestamp for landing page
        cur.execute("SELECT MIN(timestamp) as m FROM visits WHERE path IN ('/', '/index.html') AND status < 400")
        row = cur.fetchone()
        landing_first_visit = row["m"] if row and row["m"] else None

        avg_landing_per_day = 0.0
        if landing_first_visit and landing_views > 0:
            try:
                first_dt = datetime.fromisoformat(landing_first_visit)
                now_dt = datetime.now(timezone.utc)
                days = max(1.0, (now_dt - first_dt).total_seconds() / 86400.0)
                avg_landing_per_day = round(landing_views / days, 1)
            except Exception:
                avg_landing_per_day = float(landing_views)
        else:
            avg_landing_per_day = float(landing_views)

        # 2. Documentation and Markdown Views (llms.txt, engramvault.md, etc.)
        cur.execute(
            """
            SELECT COUNT(*) as c
            FROM visits
            WHERE status < 400 AND (path LIKE '%.md' OR path LIKE '%.txt')
            """
        )
        docs_views = cur.fetchone()["c"]

        # 3. Bot / Scanner requests filtered out
        cur.execute(
            """
            SELECT COUNT(*) as c
            FROM visits
            WHERE status >= 400 OR path LIKE '%.php%' OR path LIKE '/wp%' OR path LIKE '/xmlrpc%'
            """
        )
        bot_scans_filtered = cur.fetchone()["c"]

        # Total valid human page views
        total_valid_views = landing_views + docs_views

        # 4. Top legitimate pages
        cur.execute(
            """
            SELECT path, COUNT(*) as count
            FROM visits
            WHERE status < 400 AND path NOT LIKE '%.php%' AND path NOT LIKE '/wp%' AND path != '/health'
            GROUP BY path
            ORDER BY count DESC
            LIMIT 15
            """
        )
        top_pages = [dict(r) for r in cur.fetchall()]

        # 5. Top referrers for landing page
        cur.execute(
            """
            SELECT referer as referrer, COUNT(*) as count
            FROM visits
            WHERE path IN ('/', '/index.html') AND referer IS NOT NULL AND referer != ''
            GROUP BY referer
            ORDER BY count DESC
            LIMIT 15
            """
        )
        top_referrers = [dict(r) for r in cur.fetchall()]

        # 6. Recent requests (last 25)
        cur.execute(
            """
            SELECT strftime('%Y-%m-%d %H:%M:%S', timestamp) as time, method, path, status, ip
            FROM visits
            ORDER BY id DESC
            LIMIT 25
            """
        )
        recent = [dict(r) for r in cur.fetchall()]

    return {
        "landing_views": landing_views,
        "landing_unique_ips": landing_unique_ips,
        "landing_today": landing_today,
        "landing_week": landing_week,
        "avg_landing_per_day": avg_landing_per_day,
        "landing_first_visit": landing_first_visit,
        "docs_views": docs_views,
        "total_valid_views": total_valid_views,
        "bot_scans_filtered": bot_scans_filtered,
        "top_pages": top_pages,
        "top_referrers": top_referrers,
        "recent": recent,
        "generated_at": datetime.now(timezone.utc).isoformat(),
    }

# Mount static files to serve index.html, site.css, app.js, etc.
if PUBLIC_DIR.exists():
    app.mount("/", StaticFiles(directory=PUBLIC_DIR, html=True), name="public")
