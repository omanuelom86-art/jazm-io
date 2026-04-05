import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def disable_rls_api():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        cur.execute("ALTER TABLE public.api_configurations DISABLE ROW LEVEL SECURITY;")
        cur.execute("GRANT ALL ON public.api_configurations TO anon;")
        cur.execute("GRANT ALL ON public.api_configurations TO authenticated;")
        
        print("[SUCCESS] RLS disabled on 'api_configurations' and privileges granted to 'anon' and 'authenticated'.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    disable_rls_api()
