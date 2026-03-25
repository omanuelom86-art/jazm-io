import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- USERS IN n8n SCHEMA ---")
    cur.execute("SELECT email, \"firstName\", \"lastName\" FROM n8n.user")
    rows = cur.fetchall()
    for r in rows:
        print(f"User: {r[0]} ({r[1]} {r[2]})")

    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
