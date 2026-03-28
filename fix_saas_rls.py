import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def fix_rls():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("--- FIXING MULTI-TENANT RLS FOR whatsapp_instances ---")
        
        # We need to make sure whatsapp_instances has the same RLS as pipelines
        # Usually checking company_id against auth.uid() mapped via public.profiles
        
        sql = """
        -- Borrar políticas inseguras
        DROP POLICY IF EXISTS "Enable ALL for authenticated users" ON public.whatsapp_instances;
        DROP POLICY IF EXISTS "whatsapp_instances_isolation_policy" ON public.whatsapp_instances;
        
        -- Crear política segura Multi-Tenant basada en company_id
        CREATE POLICY "whatsapp_instances_isolation_policy" ON public.whatsapp_instances
        FOR ALL TO authenticated
        USING (
            company_id IN (
                SELECT company_id 
                FROM public.profiles 
                WHERE id = auth.uid()
            )
        )
        WITH CHECK (
            company_id IN (
                SELECT company_id 
                FROM public.profiles 
                WHERE id = auth.uid()
            )
        );
        
        -- Configurar el trigger para insertar el company_id automáticamente si es null (opcional pero buena práctica)
        -- o asegurarnos que el backend/UI envíe el company_id.
        """
        
        cur.execute(sql)
        print("[SUCCESS] RLS Multi-Tenant (B2B SaaS) aplicado a whatsapp_instances.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    fix_rls()
