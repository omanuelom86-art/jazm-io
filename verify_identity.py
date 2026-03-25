import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri)
    cur = conn.cursor()
    
    email = "omanuelom86@gmail.com"
    print(f"--- CHECKING IDENTITY FOR {email} ---")
    
    # 1. From Auth
    cur.execute("SELECT id FROM auth.users WHERE email = %s", (email,))
    auth_id = cur.fetchone()
    if auth_id:
        auth_id = auth_id[0]
        print(f"Auth ID: {auth_id}")
        
        # 2. From Profiles
        cur.execute("SELECT id, email, full_name, rol FROM public.profiles WHERE id = %s", (auth_id,))
        profile = cur.fetchone()
        if profile:
            print(f"Profile Found: {profile}")
        else:
            print(f"Profile NOT FOUND for ID {auth_id}! Trying by email...")
            cur.execute("SELECT id, email, full_name, rol FROM public.profiles WHERE email = %s", (email,))
            profile_email = cur.fetchone()
            if profile_email:
                print(f"Profile found by email with DIFFERENT ID: {profile_email[0]}")
                print("CRITICAL: IDs are out of sync!")
            else:
                print("Profile completely missing for this email.")
    else:
        print(f"User {email} NOT FOUND in auth.users.")

    cur.close()
    conn.close()
except Exception as e:
    print(f"DB Error: {e}")
