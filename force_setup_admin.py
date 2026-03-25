
import psycopg2
import uuid
import sys
import json
from dotenv import load_dotenv
import os

load_dotenv()

DB_URI = os.getenv("DATABASE_CONNECTION_URI") or os.getenv("DATABASE_URL")
if DB_URI and "?" in DB_URI:
    DB_URI = DB_URI.split("?")[0]

if not DB_URI:
    DB_URI = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def force_setup():
    print(f"--- INICIANDO CONFIGURACIÓN v5.1 (STABLE IDENTITY) ---")
    try:
        conn = psycopg2.connect(DB_URI)
        conn.autocommit = True
        cur = conn.cursor()
        
        email = "omanuelom86@gmail.com"
        password = "Nexus2026*" 
        
        # 1. Verificar si el usuario ya existe
        cur.execute("SELECT id FROM auth.users WHERE LOWER(email) = LOWER(%s)", (email,))
        existing_user = cur.fetchone()
        
        if existing_user:
            user_id = str(existing_user[0])
            print(f"Usuario existente detectado: {user_id}. Omitiendo recreación para preservar estabilidad.")
        else:
            user_id = str(uuid.uuid4())
            print(f"Creando nuevo usuario administrativo: {user_id}")
            
            sql_insert_user = """
            INSERT INTO auth.users (
                id, instance_id, email, encrypted_password, email_confirmed_at,
                aud, role, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, 
                is_super_admin, phone_confirmed_at, last_sign_in_at
            ) VALUES (
                %s, '00000000-0000-0000-0000-000000000000', %s, 
                crypt(%s, gen_salt('bf', 10)), NOW(),
                'authenticated', 'authenticated',
                '{"provider":"email","providers":["email"]}', '{"full_name":"OSCAR MANUEL"}', 
                NOW(), NOW(), FALSE, NOW(), NOW()
            );
            """
            cur.execute(sql_insert_user, (user_id, email, password))
            
            # Insertar identidad
            sql_identity = """
            INSERT INTO auth.identities (
                id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
            ) VALUES (%s, %s, %s, %s, 'email', NOW(), NOW(), NOW());
            """
            id_data = json.dumps({"sub": str(user_id), "email": email, "email_verified": True})
            cur.execute(sql_identity, (str(uuid.uuid4()), user_id, user_id, id_data))

        print("Sincronizando perfil comercial en public.profiles (v5.1)...")
        cur.execute("""
            INSERT INTO public.profiles (id, email, full_name, nombre_completo, rol, is_active, created_at, updated_at)
            VALUES (%s, %s, 'OSCAR MANUEL', 'OSCAR MANUEL', 'admin', true, NOW(), NOW())
            ON CONFLICT (id) DO UPDATE SET 
                email = %s,
                full_name = 'OSCAR MANUEL',
                nombre_completo = 'OSCAR MANUEL',
                rol = 'admin',
                is_active = true,
                updated_at = NOW();
        """, (user_id, email, email))
        
        print(f"OK: IDENTIDAD v5.1 SINCRONIZADA!")
        cur.close()
        conn.close()
    except Exception as e:
        print(f"ERROR EN SETUP: {e}")
        sys.exit(0)

if __name__ == "__main__":
    force_setup()
