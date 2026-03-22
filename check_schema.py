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
    
    cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'profiles' AND table_schema = 'public';")
    cols = cur.fetchall()
    print("Columns in public.profiles:")
    for c in cols:
        print(f"- {c[0]} ({c[1]})")
        
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
