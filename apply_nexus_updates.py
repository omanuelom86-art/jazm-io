import psycopg2
import os

# Credenciales corregidas - Removido ?schema ya que psycopg2 no lo soporta en DSN
CONN_STR = "postgresql://postgres.htabdguydyysolkzdilm:Mm0101mM*@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def apply_nexus_updates():
    try:
        print("Conectando a Supabase...")
        # Probando con la contraseña que tiene los asteriscos extra
        conn = psycopg2.connect(
            user="postgres.htabdguydyysolkzdilm",
            password="*Mm0101mM****",
            host="aws-0-us-west-2.pooler.supabase.com",
            port=5432,
            database="postgres"
        )
        cur = conn.cursor()
        
        sql_file = "update_nexus_schema.sql"
        if not os.path.exists(sql_file):
            print(f"Error: No se encontró {sql_file}")
            return
            
        with open(sql_file, "r", encoding="utf-8") as f:
            sql = f.read()
            
        print("Aplicando actualizaciones de Nexus AI (IA active, analytics, etc.)...")
        cur.execute(sql)
        conn.commit()
        print("OK: Base de datos actualizada con éxito.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"FAIL: Error actualizando la base de datos: {e}")

if __name__ == "__main__":
    apply_nexus_updates()
