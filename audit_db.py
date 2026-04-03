import psycopg2
import os

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- SCHEMAS ---")
    cur.execute("SELECT schema_name FROM information_schema.schemata")
    print([s[0] for s in cur.fetchall()])
    
    print("\n--- TABLES IN PUBLIC ---")
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    print([t[0] for t in cur.fetchall()])
    
    print("\n--- PROFILES COLUMNS ---")
    cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'profiles'")
    for c in cur.fetchall():
        print(f" - {c[0]}: {c[1]}")
        
    print("\n--- N8N SCHEMAS/TABLES ---")
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'n8n'")
    print(f"Tables in 'n8n' schema: {[t[0] for t in cur.fetchall()]}")
    
    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
