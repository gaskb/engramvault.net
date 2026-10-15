FROM python:3.12-slim

WORKDIR /app

RUN pip install --no-cache-dir fastapi uvicorn

COPY server.py /app/server.py
COPY . /app/public

ENV DATA_DIR=/data
ENV PUBLIC_DIR=/app/public

EXPOSE 8080

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
