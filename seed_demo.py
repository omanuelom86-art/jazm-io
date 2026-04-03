import psycopg2

DATABASE_URL = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def seed_data():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        conn.autocommit = True
        cur = conn.cursor()
        print("--- Seeding Demo Data ---")
        
        # 1. Create a demo pipeline
        cur.execute("INSERT INTO public.pipelines (name) VALUES ('Ventas Jazm.io (Demo)') RETURNING id;")
        p_id = cur.fetchone()[0]
        
        # 2. Create a demo stage
        cur.execute(f"INSERT INTO public.pipeline_stages (pipeline_id, name) VALUES ('{p_id}', 'Interesados') RETURNING id;")
        s_id = cur.fetchone()[0]
        
        # 3. Create a demo deal
        cur.execute(f"""
            INSERT INTO public.deals (pipeline_id, stage_id, name, value, status, ai_score) 
            VALUES ('{p_id}', '{s_id}', 'Empresa ABC (Demo)', 150000, 'open', 85);
        """)
        
        print("Demo data seeded. Dashboard should now show 1 Lead and $150k.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    seed_data()
