import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DATABASE_CONNECTION_URI")
if db_url and "?" in db_url:
    db_url = db_url.split("?")[0]

try:
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    
    print("--- Finding all 'profiles' tables ---")
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_name = 'profiles'")
    for row in cur.fetchall():
        print(f"Schema: {row[0]}, Table: {row[1]}")
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
