
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_CONNECTION_URI") or os.getenv("DATABASE_URL")
if DATABASE_URL and "?" in DATABASE_URL:
    DATABASE_URL = DATABASE_URL.split("?")[0]
if DATABASE_URL:
    DATABASE_URL = DATABASE_URL.strip('"').strip("'")

print(f"Testing with cleaned DATABASE_URL: {DATABASE_URL}")

try:
    conn = psycopg2.connect(DATABASE_URL, connect_timeout=3)
    cur = conn.cursor()
    cur.execute("SELECT 1")
    print("Success!")
    cur.close()
    conn.close()
except Exception as e:
    print(f"Failed with error: {e}")

# Try unquoting
import urllib.parse
DATABASE_URL_UNQUOTED = urllib.parse.unquote(DATABASE_URL)
print(f"Testing with unquoted DATABASE_URL: {DATABASE_URL_UNQUOTED}")

try:
    conn = psycopg2.connect(DATABASE_URL_UNQUOTED, connect_timeout=3)
    cur = conn.cursor()
    cur.execute("SELECT 1")
    print("Success after unquoting!")
    cur.close()
    conn.close()
except Exception as e:
    print(f"Failed after unquoting with error: {e}")
