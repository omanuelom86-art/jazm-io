import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- SEARCHING FOR n8n TABLES ---")
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_name LIKE '%workflow_entity%'")
    res = cur.fetchall()
    for r in res:
        print(f"Found n8n table in schema: {r[0]}.{r[1]}")
    
    print("\n--- SEARCHING FOR CRM TABLES ---")
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_name = 'profiles'")
    res = cur.fetchall()
    for r in res:
        print(f"Found profiles table in schema: {r[0]}.{r[1]}")

    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
