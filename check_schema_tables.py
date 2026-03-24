import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
DB_URI = os.getenv("DATABASE_CONNECTION_URI")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

def check():
    print(f"Connecting to: {DB_URI[:30]}...")
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        schemas = ['public', 'auth', 'n8n', 'evolution_api']
        
        for schema in schemas:
            print(f"\n--- Tables in {schema} ---")
            cur.execute(f"SELECT table_name FROM information_schema.tables WHERE table_schema = '{schema}';")
            tables = [r[0] for r in cur.fetchall()]
            if not tables:
                print("No tables found.")
            else:
                for table in tables:
                    print(f"- {table}")
        
        print("\n--- RLS Status for public.profiles ---")
        cur.execute("SELECT rowsecurity FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles';")
        row = cur.fetchone()
        if row:
            print(f"Row security enabled: {row[0]}")
            
            cur.execute("SELECT policyname, roles, cmd, qual FROM pg_policies WHERE schemaname = 'public' AND tablename = 'profiles';")
            policies = cur.fetchall()
            if not policies:
                print("No policies found.")
            else:
                for p in policies:
                    print(f"Policy: {p[0]}, Roles: {p[1]}, Command: {p[2]}, Qual: {p[3]}")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check()
