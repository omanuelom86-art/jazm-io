import psycopg2
db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(db_uri, connect_timeout=10)
    cur = conn.cursor()
    # Query tables in n8n schema
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'n8n';")
    tables = cur.fetchall()
    print("Tables in 'n8n' schema:")
    for table in tables:
        print(f"- {table[0]}")
    
    # Try to see if 'user' table exists
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'n8n' AND table_name = 'user';")
    if cur.fetchone():
        print("\nChecking 'user' table...")
        cur.execute("SELECT email, \"apiKey\", \"password\" FROM n8n.user;")
        users = cur.fetchall()
        for user in users:
            print(f"User: {user[0]}, Key: {user[1]}")
    else:
        print("\n'user' table not found in 'n8n' schema.")
        
    cur.close()
    conn.close()
except Exception as e:
    # If psycopg2 fails, maybe the table is actually 'n8n_user' or something else if not using schema
    print("Error:", e)
    try:
        # Fallback to public if schema wasn't right
        cur.execute("SELECT table_name FROM information_schema.tables WHERE table_name LIKE '%user%';")
        print("\nMaybe in other schemas?")
        for t in cur.fetchall(): print(t[0])
    except: pass
