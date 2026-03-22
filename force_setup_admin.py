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

LOG_FILE = "/opt/nexus/web/setup_db.log"

def log_msg(msg):
    print(msg)
    try:
        with open(LOG_FILE, "a") as f:
            f.write(msg + "\n")
    except:
        pass

def force_setup():
    log_msg(f"--- INICIANDO CONFIGURACIÓN ---")
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        email = "omanuelom86@gmail.com"
        password = "Nexus2026*" 
        
        log_msg("Verificando extensiones...")
        cur.execute("CREATE EXTENSION IF NOT EXISTS pgcrypto;")
        
        cur.execute("SELECT id FROM auth.users WHERE LOWER(email) = LOWER(%s)", (email,))
        row = cur.fetchone()
        
        if row:
            user_id = row[0]
            log_msg(f"Usuario {email} encontrado con ID: {user_id}. Actualizando password...")
            sql_update = """
            UPDATE auth.users SET 
                encrypted_password = crypt(%s, gen_salt('bf')),
                email_confirmed_at = NOW(),
                last_sign_in_at = NOW(),
                aud = 'authenticated',
                role = 'authenticated',
                updated_at = NOW(),
                instance_id = '00000000-0000-0000-0000-000000000000'
            WHERE id = %s
            """
            cur.execute(sql_update, (password, user_id))
        else:
            user_id = str(uuid.uuid4())
            log_msg(f"Creando nuevo usuario {email} con ID: {user_id}...")
            sql_insert_user = """
            INSERT INTO auth.users (
                id, instance_id, email, encrypted_password, email_confirmed_at, 
                aud, role,
                raw_app_meta_data, raw_user_meta_data, created_at, updated_at, 
                is_super_admin, phone_confirmed_at
            ) VALUES (
                %s, '00000000-0000-0000-0000-000000000000', %s, 
                crypt(%s, gen_salt('bf')), NOW(), 
                'authenticated', 'authenticated',
                '{"provider":"email","providers":["email"]}', '{"full_name":"Oscar Orozco"}', 
                NOW(), NOW(), FALSE, NOW()
            );
            """
            cur.execute(sql_insert_user, (user_id, email, password))
            
        log_msg("Asegurando identidad del usuario...")
        # identities_provider_id_provider_unique: UNIQUE (provider_id, provider)
        sql_identity = """
        INSERT INTO auth.identities (
            id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
        ) VALUES (
            %s, %s, %s, %s, 'email', NOW(), NOW(), NOW()
        ) ON CONFLICT (provider_id, provider) DO UPDATE SET last_sign_in_at = NOW(), updated_at = NOW();
        """
        id_data = json.dumps({"sub": str(user_id), "email": email})
        cur.execute(sql_identity, (str(uuid.uuid4()), user_id, str(user_id), id_data))

        log_msg("Asegurando perfil en public.profiles...")
        # public.profiles: id, nombre_completo, avatar_url, rol, creado_at, actualizado_at
        cur.execute("""
            INSERT INTO public.profiles (id, nombre_completo, rol, actualizado_at)
            VALUES (%s, 'Oscar Orozco', 'admin', NOW())
            ON CONFLICT (id) DO UPDATE SET rol = 'admin', actualizado_at = NOW();
        """, (user_id,))
        
        conn.commit()
        log_msg(f"✅ ¡CONFIGURACIÓN COMPLETADA!")
        
        cur.close()
        conn.close()
    except Exception as e:
        log_msg(f"❌ ERROR: {e}")
        sys.exit(0)

if __name__ == "__main__":
    force_setup()
