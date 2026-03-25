import psycopg2
import os
from urllib.parse import urlparse

# Datos de conexión (extraídos del .env)
DB_URI = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
SCHEMA = "evolution_api"

def verify():
    try:
        # La contraseña en el URI tiene asteriscos literales según el walkthrough previo
        # *Mm0101mM****
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        print(f"--- Verificando Esquema: {SCHEMA} ---")
        
        # 1. Verificar si el esquema existe
        cur.execute("SELECT schema_name FROM information_schema.schemata WHERE schema_name = %s", (SCHEMA,))
        if not cur.fetchone():
            print(f"Error: El esquema '{SCHEMA}' no existe.")
            return

        # 2. Listar tablas en el esquema
        cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = %s", (SCHEMA,))
        tables = cur.fetchall()
        print(f"Tablas encontradas ({len(tables)}):")
        for table in tables:
            print(f" - {table[0]}")
            
        # 3. Verificar usuario administrador si existe la tabla 'User'
        if any(t[0].lower() == 'user' for t in tables):
            cur.execute(f'SELECT email FROM "{SCHEMA}"."User" WHERE email = %s', ("Omanuelom86@gmail.com",))
            admin = cur.fetchone()
            if admin:
                print(f"Usuario administrador encontrado: {admin[0]}")
            else:
                print("Error: Usuario administrador 'Omanuelom86@gmail.com' no encontrado en la tabla User.")
        else:
            print("Error: La tabla 'User' no existe. Las migraciones podrían no haber terminado.")

        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error de conexión o ejecución: {e}")

if __name__ == "__main__":
    verify()
