import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    print("--- RLS POLICIES ON profiles ---")
    cur.execute("SELECT policyname, cmd, qual, with_check FROM pg_policies WHERE tablename = 'profiles'")
    policies = cur.fetchall()
    for p in policies:
        print(f"Policy: {p[0]} ({p[1]})")
        print(f"  QUAL: {p[2]}")
        print(f"  CHECK: {p[3]}")

    print("\n--- TABLE PRIVILEGES ---")
    cur.execute("SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'profiles'")
    grants = cur.fetchall()
    for g in grants:
        print(f"Grant: {g[0]} -> {g[1]}")

    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
