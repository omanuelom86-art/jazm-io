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
    
    print("--- RLS Status for profiles ---")
    cur.execute("SELECT relname, relrowsecurity FROM pg_class WHERE relname = 'profiles'")
    row = cur.fetchone()
    if row:
        print(f"Table: {row[0]}, RLS Enabled: {row[1]}")
        
    print("\n--- RLS Policies for profiles ---")
    cur.execute("SELECT policyname, roles, cmd, qual FROM pg_policies WHERE tablename = 'profiles'")
    for row in cur.fetchall():
        print(f"Policy: {row[0]}, Roles: {row[1]}, CMD: {row[2]}, Qual: {row[3]}")
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
