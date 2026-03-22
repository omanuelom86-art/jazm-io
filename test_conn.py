import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
DB_URI = os.getenv("DATABASE_CONNECTION_URI")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

print(f"Connecting to {DB_URI[:30]}...")
try:
    conn = psycopg2.connect(DB_URI)
    print("Connected!")
    cur = conn.cursor()
    cur.execute("SELECT version();")
    print(cur.fetchone())
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
