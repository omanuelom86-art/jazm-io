import psycopg2

DATABASE_URL = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def find_table(table_name):
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        print(f"--- Searching for table: {table_name} ---")
        cur.execute(f"""
            SELECT table_schema, table_name 
            FROM information_schema.tables 
            WHERE table_name = '{table_name}'
            ORDER BY table_schema;
        """)
        rows = cur.fetchall()
        for row in rows:
            print(f"Schema: {row[0]} | Table: {row[1]}")
            
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    find_table('deals')
    find_table('pipelines')
    find_table('tasks')
