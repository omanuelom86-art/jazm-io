import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DATABASE_CONNECTION_URI")
if db_url and "?" in db_url:
    db_url = db_url.split("?")[0]

try:
    conn = psycopg2.connect(db_url, options="-c search_path=auth,public")
    cur = conn.cursor()
    
    cur.execute("SELECT COUNT(*) FROM auth.users")
    auth_count = cur.fetchone()[0]
    print(f"Total Auth Users: {auth_count}")
    
    cur.execute("SELECT id, email FROM auth.users")
    for row in cur.fetchall():
        print(f"Auth ID: {row[0]}, Email: {row[1]}")
        
    cur.execute("SELECT COUNT(*) FROM public.profiles")
    profile_count = cur.fetchone()[0]
    print(f"Total Profiles: {profile_count}")
    
    cur.execute("SELECT id, email, is_active FROM public.profiles")
    for row in cur.fetchall():
        print(f"Profile ID: {row[0]}, Email: {row[1]}, Active: {row[2]}")
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
