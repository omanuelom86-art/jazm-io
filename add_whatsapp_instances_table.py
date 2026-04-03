import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def run_migration():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("--- CREATING whatsapp_instances TABLE ---")
        sql = """
        CREATE TABLE IF NOT EXISTS public.whatsapp_instances (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            instance_name TEXT UNIQUE NOT NULL,
            phone_number TEXT,
            status TEXT DEFAULT 'disconnected',
            pipeline_id UUID REFERENCES public.pipelines(id) ON DELETE SET NULL,
            stage_id UUID REFERENCES public.pipeline_stages(id) ON DELETE SET NULL,
            assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
            auto_create_lead BOOLEAN DEFAULT TRUE,
            company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );

        ALTER TABLE public.whatsapp_instances ENABLE ROW LEVEL SECURITY;
        
        DROP POLICY IF EXISTS "Enable ALL for authenticated users" ON public.whatsapp_instances;
        CREATE POLICY "Enable ALL for authenticated users" ON public.whatsapp_instances
            FOR ALL TO authenticated USING (true);
            
        -- Grant permissions
        GRANT ALL ON TABLE public.whatsapp_instances TO anon, authenticated;
        
        -- Reload Schema Cache
        NOTIFY pgrst, 'reload schema';
        """
        
        cur.execute(sql)
        print("[SUCCESS] Table public.whatsapp_instances created and permissions granted.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    run_migration()
