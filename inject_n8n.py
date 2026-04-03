import os
import json
import psycopg2
import uuid
from datetime import datetime

db_uri = "postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

def inject():
    conn = psycopg2.connect(db_uri)
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute("SET search_path TO n8n;")
    
    templates_dir = "C:\\Jazmio servidor Hunnging\\n8n_templates"
    for file in os.listdir(templates_dir):
        if file.endswith(".json"):
            name = file.replace(".json", "").replace("_", " ")
            path = os.path.join(templates_dir, file)
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
            
            w_id = str(uuid.uuid4())
            nodes = json.dumps(data.get("nodes", []))
            connections = json.dumps(data.get("connections", {}))
            settings = json.dumps(data.get("settings", {}))
            meta = json.dumps(data.get("meta", {}))
            now = datetime.now()
            
            try:
                cur.execute("""
                INSERT INTO workflow_entity (id, name, active, nodes, connections, "createdAt", "updatedAt", settings, meta)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (w_id, name, True, nodes, connections, now, now, settings, meta))
                print(f"Injected: {name}")
            except Exception as e:
                print(f"Error injecting {name}: {e}")
                
    cur.close()
    conn.close()

if __name__ == "__main__":
    inject()
