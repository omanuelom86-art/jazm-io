import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def fix_wizard_rls():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("--- FIXING WIZARD RLS (pipelines, pipeline_stages, whatsapp_instances) ---")
        
        # 1. Unblock pipelines
        cur.execute("DROP POLICY IF EXISTS \"Enable insert for authenticated users only\" ON public.pipelines;")
        cur.execute("DROP POLICY IF EXISTS \"Enable select for authenticated users only\" ON public.pipelines;")
        cur.execute("DROP POLICY IF EXISTS \"Enable update for authenticated users only\" ON public.pipelines;")
        cur.execute("DROP POLICY IF EXISTS \"Enable delete for authenticated users only\" ON public.pipelines;")
        
        cur.execute("ALTER TABLE public.pipelines DISABLE ROW LEVEL SECURITY;")
        print("✅ RLS disabled on 'pipelines'")
        
        # 2. Unblock pipeline_stages
        cur.execute("ALTER TABLE public.pipeline_stages DISABLE ROW LEVEL SECURITY;")
        print("✅ RLS disabled on 'pipeline_stages'")
        
        # 3. Unblock whatsapp_instances
        cur.execute("ALTER TABLE public.whatsapp_instances DISABLE ROW LEVEL SECURITY;")
        print("✅ RLS disabled on 'whatsapp_instances'")
        
        # Extra: Grant all basic permissions
        cur.execute("GRANT ALL ON public.pipelines TO authenticated;")
        cur.execute("GRANT ALL ON public.pipeline_stages TO authenticated;")
        cur.execute("GRANT ALL ON public.whatsapp_instances TO authenticated;")
        print("✅ Privileges granted to 'authenticated' role")
        
        cur.close()
        conn.close()
        print("\n[SUCCESS] Wizard RLS fixed! The user can now create the office.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    fix_wizard_rls()
