import psycopg2
import os

DB_URI = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def check_admin():
    try:
        conn = psycopg2.connect(DB_URI)
        cur = conn.cursor()
        
        email = "omanuelom86@gmail.com"
        
        print(f"--- Verificando Admin en public.profiles: {email} ---")
        cur.execute("SELECT id, email, rol, is_active FROM public.profiles WHERE LOWER(email) = LOWER(%s)", (email,))
        profile = cur.fetchone()
        
        if profile:
            print(f"Perfil encontrado: ID={profile[0]}, Email={profile[1]}, Rol={profile[2]}, Activo={profile[3]}")
            if profile[2] in ['admin', 'super_admin']:
                print("✅ Rol administrativo correcto.")
            else:
                print("❌ Rol incorrecto en profiles.")
        else:
            print("❌ Perfil no encontrado en public.profiles.")
            
        print(f"\n--- Verificando Admin en auth.users: {email} ---")
        cur.execute("SELECT id, email, last_sign_in_at FROM auth.users WHERE LOWER(email) = LOWER(%s)", (email,))
        auth_user = cur.fetchone()
        
        if auth_user:
            print(f"Usuario auth encontrado: ID={auth_user[0]}, Email={auth_user[1]}, Last Login={auth_user[2]}")
            print("✅ Cuenta de autenticación existe.")
        else:
            print("❌ Usuario no encontrado en auth.users.")
            
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_admin()
