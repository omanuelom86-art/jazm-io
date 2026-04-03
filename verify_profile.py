import psycopg2
db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

print("Comprobando el perfil en Supabase...")
try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    cur.execute("SELECT id, email, rol, is_active FROM public.profiles WHERE email = 'omanuelom86@gmail.com'")
    row = cur.fetchone()
    print("Perfil público en la Nube Supabase:", row)
    
    cur.execute("SELECT id, email, role FROM auth.users WHERE email = 'omanuelom86@gmail.com'")
    row2 = cur.fetchone()
    print("Auth USERS en Supabase:", row2)
    
    cur.close()
    conn.close()
except Exception as e:
    print(e)
