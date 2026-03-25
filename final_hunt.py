import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- SCANNING FOR n8n PERSISTENCE ---")
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_name LIKE '%workflow_entity%'")
    res = cur.fetchall()
    if res:
        for r in res:
            print(f"Workflow Table FOUND: {r[0]}.{r[1]}")
            # Ver cuántos flujos hay
            try:
                cur.execute(f"SELECT count(*) FROM {r[0]}.{r[1]}")
                count = cur.fetchone()[0]
                print(f" -> Workflows in {r[0]}.{r[1]}: {count}")
            except:
                print(f" -> Could not query {r[0]}.{r[1]}")
    else:
        print("No workflow_entity tables found in any schema.")

    print("\n--- SCANNING CRM SCHEMA TABLES ---")
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'crm'")
    crm_tables = [t[0] for t in cur.fetchall()]
    print(f"CRM Tables: {crm_tables}")
    
    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
