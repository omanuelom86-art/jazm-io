import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_url = os.getenv("DATABASE_CONNECTION_URI")
if db_url and "?" in db_url:
    db_url = db_url.split("?")[0]

try:
    conn = psycopg2.connect(db_url)
    conn.autocommit = True
    cur = conn.cursor()
    
    email = "omanuelom86@gmail.com"
    
    print(f"--- Forcing Admin Status for {email} ---")
    
    # 1. Ensure the profile exists and is active/admin
    cur.execute("""
        UPDATE public.profiles 
        SET is_active = true, 
            rol = 'admin',
            updated_at = NOW()
        WHERE LOWER(email) = LOWER(%s)
    """, (email,))
    
    if cur.rowcount == 0:
        print(f"Warning: No profile found for {email}. Please ensure you have registered first.")
    else:
        print(f"Success: {cur.rowcount} profile(s) updated to ACTIVE/ADMIN.")
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
