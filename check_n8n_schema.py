import psycopg2
db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri, connect_timeout=10)
    cur = conn.cursor()
    cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'workflow_entity' AND table_schema = 'n8n';")
    print(cur.fetchall())
    cur.close()
    conn.close()
except Exception as e:
    print("Error:", e)
