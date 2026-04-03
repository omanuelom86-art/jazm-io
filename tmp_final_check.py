import psycopg2
import os

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def run_test():
    try:
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        
        # Check schemas
        cur.execute("SELECT schema_name FROM information_schema.schemata WHERE schema_name IN ('n8n', 'evolution_api')")
        schemas = cur.fetchall()
        print(f"Schemas found: {[s[0] for s in schemas]}")
        
        # Check instances
        try:
            cur.execute("SELECT count(*) FROM evolution_api.whatsapp_instances")
            count = cur.fetchone()[0]
            print(f"WhatsApp Instances: {count}")
        except Exception as e:
            print(f"Error checking instances: {e}")
            conn.rollback()
            cur = conn.cursor()
            
        # Check Profiles
        cur.execute("SELECT count(*) FROM public.profiles")
        profiles_count = cur.fetchone()[0]
        print(f"Total Profiles: {profiles_count}")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Connection Error: {e}")

if __name__ == '__main__':
    run_test()
