import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
DB_URI = os.getenv("DATABASE_CONNECTION_URI")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

def diag():
    print(f"Connecting to: {DB_URI[:30]}...")
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        # Check schemas
        cur.execute("SELECT schema_name FROM information_schema.schemata;")
        schemas = [r[0] for r in cur.fetchall()]
        print(f"Available schemas: {schemas}")
        
        # Check auth.users
        if 'auth' in schemas:
            try:
                cur.execute("SELECT count(*) FROM auth.users;")
                count = cur.fetchone()[0]
                print(f"Users in auth.users: {count}")
                
                cur.execute("SELECT id, email, role FROM auth.users LIMIT 5;")
                users = cur.fetchall()
                for u in users:
                    print(f"User: ID={u[0]}, Email={u[1]}, Role={u[2]}")
            except Exception as e:
                print(f"Error reading auth.users: {e}")
        
        # Check public.profiles
        if 'public' in schemas:
            try:
                cur.execute("SELECT count(*) FROM public.profiles;")
                count = cur.fetchone()[0]
                print(f"Profiles in public.profiles: {count}")
                
                cur.execute("SELECT id, email, rol FROM public.profiles LIMIT 5;")
                profiles = cur.fetchall()
                for p in profiles:
                    print(f"Profile: ID={p[0]}, Email={p[1]}, Role={p[2]}")
            except Exception as e:
                print(f"Error reading public.profiles: {e}")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Connection error: {e}")

if __name__ == "__main__":
    diag()
