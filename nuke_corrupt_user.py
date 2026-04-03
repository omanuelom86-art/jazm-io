import psycopg2

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def nuke_user():
    try:
        conn = psycopg2.connect(db_uri)
        conn.autocommit = True
        cur = conn.cursor()
        email = "omanuelom86@gmail.com"
        cur.execute("DELETE FROM auth.users WHERE email = %s;", (email,))
        print(f"Limpieza profunda: Usuario {email} eliminado de auth.users.")
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error borrando al usuario: {e}")

if __name__ == '__main__':
    nuke_user()
