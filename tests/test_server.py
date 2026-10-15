import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

import pytest
from starlette.testclient import TestClient
import server as s


@pytest.fixture
def landing_client(tmp_path, monkeypatch):
    test_db = tmp_path / "stats.db"
    monkeypatch.setattr(s, "DB_PATH", test_db)
    s.init_db()
    return TestClient(s.app)


def test_landing_page_served_with_github(landing_client):
    res = landing_client.get("/")
    assert res.status_code == 200
    assert "https://github.com/gaskb/engramvault" in res.text
    assert "EngramVault" in res.text


def test_stats_page_unindexed_and_private(landing_client):
    res = landing_client.get("/stats")
    assert res.status_code == 200
    # Must contain noindex, nofollow to prevent search engine indexing
    assert 'content="noindex, nofollow"' in res.text
    assert "LANDING PAGE COUNTER" in res.text


def test_stats_data_and_tracking(landing_client):
    # Simulate a visitor on landing page
    landing_client.get("/", headers={"x-forwarded-for": "203.0.113.195", "referer": "https://github.com/gaskb"})
    
    # Simulate a visitor reading markdown documentation
    landing_client.get("/engramvault.md", headers={"x-forwarded-for": "203.0.113.196"})
    
    # Simulate bot scanner probe
    landing_client.get("/wp-admin/install.php", headers={"x-forwarded-for": "198.51.100.5"})

    data_res = landing_client.get("/stats-data.json")
    assert data_res.status_code == 200
    data = data_res.json()

    assert "landing_views" in data
    assert "landing_unique_ips" in data
    assert "bot_scans_filtered" in data
    assert "total_valid_views" in data
    assert "top_referrers" in data

    assert data["landing_views"] >= 1
    assert data["landing_unique_ips"] >= 1
    assert data["bot_scans_filtered"] >= 1
    assert data["docs_views"] >= 1


def test_stats_view_missing_template(landing_client, monkeypatch, tmp_path):
    empty_dir = tmp_path / "empty_public"
    empty_dir.mkdir()
    monkeypatch.setattr(s, "PUBLIC_DIR", empty_dir)
    res = landing_client.get("/stats")
    assert res.status_code == 404
    assert res.json() == {"error": "stats.html not found"}


def test_track_visits_edge_cases(landing_client):
    # Edge case: requests with multiple proxy hops, empty user agent, and long referer
    res = landing_client.get(
        "/",
        headers={
            "x-forwarded-for": "192.0.2.1, 198.51.100.1, 203.0.113.1",
            "referer": "https://example.com/" + "a" * 800,
            "user-agent": "CustomAgent/" + "x" * 600,
        },
    )
    assert res.status_code == 200

    # Edge case: non-existent favicon
    res_fav = landing_client.get("/favicon.ico")
    assert res_fav.status_code in (200, 404)
