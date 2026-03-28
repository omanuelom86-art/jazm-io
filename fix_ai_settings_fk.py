import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def fix_fk():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        
        sql = """
        -- 1. Drop the incorrect column and table
        ALTER TABLE public.whatsapp_instances DROP COLUMN IF EXISTS ai_agent_id;
        DROP TABLE IF EXISTS public.ai_agents CASCADE;

        -- 2. Add the correct foreign key to ai_settings
        ALTER TABLE public.whatsapp_instances ADD COLUMN ai_setting_id UUID REFERENCES public.ai_settings(id) ON DELETE SET NULL;
        """
        
        cur.execute(sql)
        print("[SUCCESS] FK corregida. whatsapp_instances ahora apunta a ai_settings.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    fix_fk()
