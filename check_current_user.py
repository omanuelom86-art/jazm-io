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
    
    email = "omanuelom86@gmail.com"
    
    print(f"--- Checking profile for {email} ---")
    
    cur.execute("SELECT id, email, full_name, rol, is_active FROM public.profiles WHERE email = %s", (email,))
    rows = cur.fetchall()
    
    if not rows:
        print(f"No profile found for {email}")
    else:
        for row in rows:
            print(f"ID: {row[0]}, Email: {row[1]}, Name: {row[2]}, Role: {row[3]}, Is Active: {row[4]}")
            
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
