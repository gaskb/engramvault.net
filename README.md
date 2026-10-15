# engramvault.net

> Official landing website and private visitor analytics counter for **[EngramVault](https://github.com/gaskb/engramvault)** (`https://engramvault.net` · `https://engramvault.dev`).

## 🚀 Overview

- **Landing page**: Responsive, lightweight, bilingue (EN/IT), Material 3 dark/light design (`index.html`, `site.css`, `app.js`).
- **Private stats & counter**: Hidden, unindexed (`noindex, nofollow`), unlinked visitor counter available at `/stats` (`stats.html`, `server.py`).
- **Server**: FastAPI + Uvicorn with SQLite analytics store (`data/stats.db`).

## 🛠️ Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run server locally on http://localhost:8080
python3 -m uvicorn server:app --host 0.0.0.0 --port 8080 --reload
```

## 🧪 Testing

```bash
pytest tests/ -v
```

## 🐳 Docker Deployment

```bash
docker compose up -d
```
