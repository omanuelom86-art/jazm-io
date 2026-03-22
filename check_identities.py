import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
DB_URI = os.getenv("DATABASE_CONNECTION_URI")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

try:
    conn = psycopg2.connect(DB_URI)
    cur = conn.cursor()
    
    cur.execute("SELECT conname, pg_get_constraintdef(c.oid) FROM pg_constraint c JOIN pg_namespace n ON n.oid = c.connamespace WHERE n.nspname = 'auth' AND conrelid = 'auth.identities'::regclass;")
    constraints = cur.fetchall()
    print("Constraints on auth.identities:")
    for c in constraints:
        print(f"- {c[0]}: {c[1]}")
        
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
