import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def check_policies():
    try:
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        
        cur.execute("""
            SELECT tablename, policyname, roles, cmd, qual, with_check 
            FROM pg_policies 
            WHERE schemaname = 'public' AND tablename = 'api_configurations';
        """)
        
        policies = cur.fetchall()
        for p in policies:
            print(f"Table: {p[0]}, Policy: {p[1]}, Roles: {p[2]}, Cmd: {p[3]}")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    check_policies()
