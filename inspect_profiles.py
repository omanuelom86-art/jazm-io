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
    
    print("--- Profiles Table Schema ---")
    cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'profiles' AND table_schema = 'public'")
    for row in cur.fetchall():
        print(f"{row[0]}: {row[1]}")
        
    print("\n--- All Users in Profiles ---")
    cur.execute("SELECT id, email, full_name, rol, is_active FROM public.profiles")
    for row in cur.fetchall():
        print(row)
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
