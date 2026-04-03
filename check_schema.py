import psycopg2
import os

DATABASE_URL = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def check_schema(schema_name):
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        print(f"--- Checking schema: {schema_name} ---")
        cur.execute(f"""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = '{schema_name}'
            ORDER BY table_name;
        """)
        rows = cur.fetchall()
        for row in rows:
            print(f"Table: {row[0]}")
            
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_schema('evolution_api')
