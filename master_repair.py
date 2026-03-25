import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def run_fix():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("--- FIXING CRM PROFILES SCHEMA ---")
        queries = [
            "ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();",
            "ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();",
            "ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS full_name TEXT;",
            "UPDATE public.profiles SET full_name = nombre_completo WHERE full_name IS NULL;",
            "ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;",
            "ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT TRUE;"
        ]
        for q in queries:
            try:
                cur.execute(q)
                print(f"OK: {q[:30]}...")
            except Exception as e:
                print(f"Skip: {e}")

        print("\n--- CRM SCHEMA AUDIT ---")
        cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'crm'")
        print(f"Tables in CRM schema: {[t[0] for t in cur.fetchall()]}")

        cur.close()
        conn.close()
        print("\n[SUCCESS] SCHEMA ALIGNMENT v4.7 FINISHED.")
    except Exception as e:
        print(f"Fatal DB Error: {e}")

if __name__ == "__main__":
    run_fix()
