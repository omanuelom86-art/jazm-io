import socket
import requests
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_CONNECTION_URI")
if DATABASE_URL and "?" in DATABASE_URL:
    DATABASE_URL = DATABASE_URL.split("?")[0]

def test_tcp(host, port):
    try:
        with socket.create_connection((host, port), timeout=2):
            return True
    except:
        return False

def test_sql():
    if not DATABASE_URL: return False
    try:
        conn = psycopg2.connect(DATABASE_URL, connect_timeout=3)
        cur = conn.cursor()
        cur.execute("SELECT 1")
        cur.close()
        conn.close()
        return True
    except Exception as e:
        print(f"SQL Error: {e}")
        return False

def test_url(url):
    try:
        r = requests.get(url, timeout=3, allow_redirects=True)
        return r.status_code in [200, 401, 404]
    except Exception as e:
        print(f"URL Error ({url}): {e}")
        return False

print("--- System Health Check ---")
print(f"Redis (6379): {'OK' if test_tcp('127.0.0.1', 6379) else 'DOWN'}")
print(f"Supabase (SQL): {'OK' if test_sql() else 'DOWN'}")
print(f"Evolution API (8080): {'OK' if test_url('http://127.0.0.1:8080/health') else 'DOWN'}")
print(f"n8n (5678): {'OK' if test_url('http://127.0.0.1:5678/healthz') else 'DOWN'}")
print(f"Nginx (7860): {'OK' if test_tcp('127.0.0.1', 7860) else 'DOWN'}")
