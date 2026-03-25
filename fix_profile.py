import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    conn.autocommit = True
    cur = conn.cursor()
    
    email = "omanuelom86@gmail.com"
    auth_id = "20ca6efc-9294-4651-9bfd-0c8d2ce03a3a"
    
    print(f"--- FIXING PROFILE FOR {email} ---")
    
    cur.execute("""
        UPDATE public.profiles 
        SET email = %s, 
            full_name = 'OSCAR MANUEL', 
            nombre_completo = 'OSCAR MANUEL',
            rol = 'admin',
            is_active = true,
            updated_at = NOW()
        WHERE id = %s
    """, (email, auth_id))
    
    # También asegurar que no haya otros perfiles huérfanos con ese email
    cur.execute("DELETE FROM public.profiles WHERE email = %s AND id != %s", (email, auth_id))
    
    cur.close()
    conn.close()
    print("[SUCCESS] Profile is now POPULATED and CLEAN.")
except Exception as e:
    print(f"DB Error: {e}")
