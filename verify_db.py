import psycopg2
from psycopg2 import sql
import os

# Get connection string from .env if possible, or use the one provided
conn_str = "postgresql://postgres.htabdguydyysolkzdilm:*Mm0101mM****@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

try:
    conn = psycopg2.connect(conn_str)
    conn.autocommit = True
    cur = conn.cursor()
    
    # Check if schema evolution_api exists
    cur.execute("SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'evolution_api';")
    schema_exists = cur.fetchone()
    
    if not schema_exists:
        print("Schema 'evolution_api' does not exist. Creating it...")
        cur.execute("CREATE SCHEMA evolution_api;")
        print("Schema 'evolution_api' created successfully.")
    else:
        print("Schema 'evolution_api' already exists.")
    
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
