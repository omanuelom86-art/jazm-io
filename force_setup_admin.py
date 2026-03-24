
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
    print(f"--- INICIANDO CONFIGURACIÓN v3.11 (AUDIT PLUS) ---")
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        email = "omanuelom86@gmail.com"
        password = "Nexus2026*" 
        
        print("Limpiando identidades y usuario previo...")
        cur.execute("DELETE FROM auth.identities WHERE user_id IN (SELECT id FROM auth.users WHERE LOWER(email) = LOWER(%s))", (email,))
        cur.execute("DELETE FROM auth.users WHERE LOWER(email) = LOWER(%s)", (email,))
        
        user_id = str(uuid.uuid4())
        print(f"Creando usuario administrativo blindado: {user_id}")
        
        # Insertar con cost 10 y metadatos completos
        sql_insert_user = """
        INSERT INTO auth.users (
            id, instance_id, email, encrypted_password, email_confirmed_at,
            aud, role,
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at, 
            is_super_admin, phone_confirmed_at, last_sign_in_at
        ) VALUES (
            %s, '00000000-0000-0000-0000-000000000000', %s, 
            crypt(%s, gen_salt('bf', 10)), NOW(),
            'authenticated', 'authenticated',
            '{"provider":"email","providers":["email"]}', '{"full_name":"Oscar Orozco"}', 
            NOW(), NOW(), FALSE, NOW(), NOW()
        );
        """
        cur.execute(sql_insert_user, (user_id, email, password))
            
        print("Insertando identidad de acceso...")
        sql_identity = """
        INSERT INTO auth.identities (
            id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
        ) VALUES (
            %s, %s, %s, %s, 'email', NOW(), NOW(), NOW()
        );
        """
        id_data = json.dumps({"sub": str(user_id), "email": email, "email_verified": True, "phone_verified": False})
        cur.execute(sql_identity, (str(uuid.uuid4()), user_id, user_id, id_data))

        print("Asegurando perfil comercial en public.profiles...")
        cur.execute("""
            INSERT INTO public.profiles (id, nombre_completo, rol, actualizado_at)
            VALUES (%s, 'Oscar Orozco', 'admin', NOW())
            ON CONFLICT (id) DO UPDATE SET rol = 'admin', actualizado_at = NOW();
        """, (user_id,))
        
        conn.commit()
        print(f"OK: ADMIN v3.11 LISTO!")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"ERROR EN SETUP: {e}")
        sys.exit(0)

if __name__ == "__main__":
    force_setup()
