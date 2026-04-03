import psycopg2
db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
def list_all_schemas():
    try:
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        cur.execute("SELECT schema_name FROM information_schema.schemata")
        schemas = cur.fetchall()
        print("All Schemas:")
        for s in schemas:
            print(f"- {s[0]}")
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")
if __name__ == '__main__':
    list_all_schemas()
