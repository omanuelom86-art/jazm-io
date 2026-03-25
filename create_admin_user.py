import psycopg2
import uuid

# Credenciales de tu nueva base de datos (Nexus) - SESSION POOLER
DB_URI = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def create_admin_user():
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        # Generamos un UUID para el usuario
        user_id = str(uuid.uuid4())
        email = "omanuelom86@gmail.com"
        password = "Nexus2026*" # Password consistente con el resto del sistema
        
        # 1. Habilitar pgcrypto si no está habilitado
        cur.execute("CREATE EXTENSION IF NOT EXISTS pgcrypto;")
        
        # 2. Insertar en auth.users (Supabase Auth)
        # Usamos crypt('contraseña', gen_salt('bf')) para el hash compatible con Bcrypt
        print(f"Insertando usuario {email} en auth.users...")
        
        sql_user = """
        INSERT INTO auth.users (
            id, instance_id, email, encrypted_password, email_confirmed_at, 
            raw_app_meta_data, raw_user_meta_data, created_at, updated_at, 
            role, confirmation_token, email_change, email_change_token_new, recovery_token
        ) VALUES (
            %s, '00000000-0000-0000-0000-000000000000', %s, 
            crypt(%s, gen_salt('bf')), NOW(), 
            '{"provider":"email","providers":["email"]}', '{"full_name":"Oscar Orozco"}', 
            NOW(), NOW(), 'authenticated', '', '', '', ''
        ) ON CONFLICT (email) DO UPDATE SET 
            email_confirmed_at = NOW(),
            encrypted_password = crypt(%s, gen_salt('bf'))
        RETURNING id;
        """
        
        cur.execute(sql_user, (user_id, email, password, password))
        actual_id = cur.fetchone()[0]
        
        # 3. Insertar en public.profiles (Tu JAZM.IO Manager)
        print(f"Vinculando perfil en public.profiles con rol: admin...")
        sql_profile = """
        INSERT INTO public.profiles (id, nombre_completo, rol, creado_at, actualizado_at)
        VALUES (%s, 'Oscar Orozco', 'admin', NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET rol = 'admin';
        """
        cur.execute(sql_profile, (actual_id,))
        
        conn.commit()
        print(f"✅ ¡ÉXITO! Usuario {email} registrado y confirmado como Administrador.")
        
        cur.close()
        conn.close()
    except Exception as e:
        print(f"❌ Error creando el usuario: {e}")

if __name__ == "__main__":
    create_admin_user()
