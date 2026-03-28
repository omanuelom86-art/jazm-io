import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def run_db_migration():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        sql = """
        -- 1. Create ai_agents table
        CREATE TABLE IF NOT EXISTS public.ai_agents (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            company_id UUID,
            name VARCHAR(255) NOT NULL,
            identity_role TEXT,
            guidelines TEXT,
            tone VARCHAR(50) DEFAULT 'Profesional',
            length VARCHAR(50) DEFAULT 'Corta',
            language VARCHAR(50) DEFAULT 'Español',
            delay_seconds INTEGER DEFAULT 0,
            active BOOLEAN DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
        );

        -- 2. Add ai_agent_id to whatsapp_instances (if not exists)
        DO $$ 
        BEGIN 
            IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                           WHERE table_name='whatsapp_instances' AND column_name='ai_agent_id') THEN
                ALTER TABLE public.whatsapp_instances ADD COLUMN ai_agent_id UUID REFERENCES public.ai_agents(id) ON DELETE SET NULL;
            END IF;
        END $$;

        -- 3. RLS on ai_agents (Multi-Tenant SaaS)
        ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;
        
        DROP POLICY IF EXISTS "ai_agents_isolation_policy" ON public.ai_agents;
        CREATE POLICY "ai_agents_isolation_policy" ON public.ai_agents
        FOR ALL TO authenticated
        USING (
            company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
        )
        WITH CHECK (
            company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
        );

        -- 4. Trigger auto_company_id for ai_agents
        DROP TRIGGER IF EXISTS tr_ai_agents_company_id ON public.ai_agents;
        CREATE TRIGGER tr_ai_agents_company_id
        BEFORE INSERT ON public.ai_agents
        FOR EACH ROW
        EXECUTE FUNCTION public.set_company_id_from_profile();

        -- 5. Give Grants
        GRANT ALL ON TABLE public.ai_agents TO anon, authenticated, service_role;
        """
        
        cur.execute(sql)
        print("[SUCCESS] Migración AI Agents y CRM Enrutador Finalizada Correctamente (Modo SaaS Activo).")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    run_db_migration()
