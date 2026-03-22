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
    
    email = "omanuelom86@gmail.com"
    cur.execute("SELECT id, email, role FROM auth.users WHERE email = %s;", (email,))
    user = cur.fetchone()
    if user:
        print(f"User found: ID={user[0]}, Email={user[1]}, Role={user[2]}")
    else:
        print("User not found in auth.users")
        
    cur.execute("SELECT id, email, rol FROM public.profiles WHERE email = %s;", (email,))
    profile = cur.fetchone()
    if profile:
        print(f"Profile found: ID={profile[0]}, Email={profile[1]}, Role={profile[2]}")
    else:
        print("Profile not found in public.profiles")
        
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
