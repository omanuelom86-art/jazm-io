import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- SEARCHING FOR 'users' TABLE ---")
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_name = 'users'")
    res = cur.fetchall()
    for r in res:
        print(f"Table Found: {r[0]}.{r[1]}")
        # Audit columns
        cur.execute(f"SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = '{r[0]}' AND table_name = 'users'")
        cols = cur.fetchall()
        for c in cols:
            print(f"  - {c[0]}: {c[1]}")

    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
