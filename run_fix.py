import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()
DB_URI = os.getenv("DATABASE_CONNECTION_URI")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

def apply_fix():
    print(f"Connecting to: {DB_URI[:30]}...")
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        with open("fix_rls_and_n8n.sql", "r", encoding="utf-8") as f:
            sql = f.read()
            
        print("Applying fix_rls_and_n8n.sql...")
        cur.execute(sql)
        conn.commit()
        print("OK: SQL fixes applied successfully.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    apply_fix()
