import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def install_trigger():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        sql = """
        -- Función para rellenar automáticamente el company_id
        CREATE OR REPLACE FUNCTION public.set_company_id_from_profile()
        RETURNS TRIGGER AS $$
        BEGIN
            IF NEW.company_id IS NULL THEN
                NEW.company_id := (SELECT company_id FROM public.profiles WHERE id = auth.uid() LIMIT 1);
            END IF;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql SECURITY DEFINER;
        
        -- Asignar trigger a la tabla whatsapp_instances
        DROP TRIGGER IF EXISTS tr_whatsapp_instances_company_id ON public.whatsapp_instances;
        CREATE TRIGGER tr_whatsapp_instances_company_id
        BEFORE INSERT ON public.whatsapp_instances
        FOR EACH ROW
        EXECUTE FUNCTION public.set_company_id_from_profile();
        """
        
        cur.execute(sql)
        print("[SUCCESS] Trigger SaaS instalado: whatsapp_instances heredará el company_id automáticamente.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    install_trigger()
