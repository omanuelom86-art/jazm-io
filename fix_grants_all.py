import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
def fix_grants():
    conn = psycopg2.connect(db_uri)
    conn.autocommit = True
    cur = conn.cursor()
    roles = ["postgres", "anon", "authenticated", "service_role", "supabase_auth_admin"]
    for r in roles:
        try:
            cur.execute(f"GRANT USAGE ON SCHEMA public TO {r};")
            cur.execute(f"GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO {r};")
            cur.execute(f"GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO {r};")
            cur.execute(f"GRANT ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA public TO {r};")
            print(f"Granted all on public to {r}")
        except Exception as e:
            print(f"Error granting to {r}: {e}")
            
    try:
        cur.execute("NOTIFY pgrst, 'reload schema';")
        print("Schema reloaded.")
    except Exception as e:
        pass
        
    cur.close()
    conn.close()

if __name__ == '__main__':
    fix_grants()
