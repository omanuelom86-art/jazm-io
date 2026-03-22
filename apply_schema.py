import psycopg2
import os

# Credenciales de tu nueva base de datos
DB_URI = "postgresql://postgres:%2AMm0101mM%2A%2A%2A%2A@db.htabdguydyysolkzdilm.supabase.co:5432/postgres"

def apply_schema():
    try:
        conn_str = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor()
        
        # Leemos el archivo SQL
        sql_file = "schema_setup.sql"
        if not os.path.exists(sql_file):
            print(f"Error: No se encontró {sql_file}")
            return
            
        with open(sql_file, "r", encoding="utf-8") as f:
            sql = f.read()
            
        print("Aplicando esquema Jazm.io (CRM y RBAC)...")
        cur.execute(sql)
        conn.commit()
        print("✅ Esquema aplicado con éxito.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"❌ Error aplicando el esquema: {e}")

if __name__ == "__main__":
    apply_schema()
