import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def check():
    try:
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()
        
        email = "omanuelom86@gmail.com"
        cur.execute("SELECT id, is_sso_user, deleted_at FROM auth.users WHERE email = %s", (email,))
        u = cur.fetchone()
        print(f"User Data: {u}")
        
        if u:
            cur.execute("SELECT id, provider, identity_data FROM auth.identities WHERE user_id = %s", (u[0],))
            idents = cur.fetchall()
            print("Identities:")
            for i in idents:
                print(i)
                
            # Verificar si password es valido
            cur.execute("SELECT encrypted_password FROM auth.users WHERE id = %s", (u[0],))
            pw = cur.fetchone()[0]
            print(f"Password starts with: {pw[:10] if pw else 'NONE'}")
            
        conn.close()
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == '__main__':
    check()
