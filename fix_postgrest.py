import psycopg2
import time

# Usando la contraseña con URL Encoding estricto
db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def fix_db():
    try:
        print("Intentando conectar a Supabase (Pooler AWS)...")
        conn = psycopg2.connect(db_uri, connect_timeout=10)
        conn.autocommit = True
        cur = conn.cursor()
        
        print("Ejecutando NOTIFY pgrst, 'reload schema'...")
        cur.execute("NOTIFY pgrst, 'reload schema';")
        
        print("Restaurando permisos de acceso público...")
        cur.execute("GRANT USAGE ON SCHEMA public TO anon, authenticated;")
        cur.execute("GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;")
        
        print("Restaurando flujo...")
        cur.close()
        conn.close()
        print("EXITO: Base de datos resincronizada.")
    except Exception as e:
        print("Error de DB:", e)

if __name__ == "__main__":
    fix_db()
