import psycopg2

DATABASE_URL = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def run_sql():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        conn.autocommit = True
        cur = conn.cursor()
        print(f"--- Applying Master Schema Setup ---")
        
        with open('c:\\Jazmio servidor Hunnging\\schema_setup.sql', 'r') as f:
            sql = f.read()
            
        cur.execute(sql)
        print("Schema Setup OK.")
        
        print("--- Unlocking Tables (RLS Bypass for Emergency Restore) ---")
        cur.execute("""
        DO $$ 
        DECLARE r RECORD;
        BEGIN
            FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') 
            LOOP
                EXECUTE 'ALTER TABLE public.' || quote_ident(r.tablename) || ' DISABLE ROW LEVEL SECURITY;';
                EXECUTE 'GRANT ALL ON public.' || quote_ident(r.tablename) || ' TO authenticated, anon, service_role;';
            END LOOP;
        END $$;
        """)
        print("Permissions OK.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    run_sql()
