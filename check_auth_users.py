import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DATABASE_CONNECTION_URI")
if db_url and "?" in db_url:
    db_url = db_url.split("?")[0]

try:
    # We need to connect to the 'auth' schema if possible, or use the search path
    conn = psycopg2.connect(db_url, options="-c search_path=auth,public")
    cur = conn.cursor()
    
    print("--- Auth Users ---")
    cur.execute("SELECT id, email, created_at FROM auth.users")
    for row in cur.fetchall():
        print(row)
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
