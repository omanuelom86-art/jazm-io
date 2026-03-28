import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def check():
    try:
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        
        print("--- TRIGGERS ON auth.users ---")
        cur.execute("SELECT trigger_name, action_statement FROM information_schema.triggers WHERE event_object_schema = 'auth' AND event_object_table = 'users'")
        for t in cur.fetchall():
            print(f"Trigger Name: {t[0]}\nAction: {t[1]}")
            
        print("\n--- GRANTS ON public.profiles ---")
        cur.execute("SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'profiles' AND table_schema = 'public'")
        for g in cur.fetchall():
            print(f"Grantee: {g[0]}, Privilege: {g[1]}")

        # Comprobar RLS de forma manual leyendo configuración de tabla
        print("\n--- RLS POLICIES ON public.profiles ---")
        cur.execute("SELECT policyname, permissive, roles, cmd, qual, with_check FROM pg_policies WHERE tablename = 'profiles'")
        for p in cur.fetchall():
            print(f"Policy: {p[0]} - cmd: {p[3]} - roles: {p[2]}")

        conn.close()
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == '__main__':
    check()
