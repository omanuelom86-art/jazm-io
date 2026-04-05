import os
import json
import httpx
from datetime import datetime
from dotenv import load_dotenv

# Load env from jazm-io
load_dotenv('c:/Jazmio servidor Hunnging/jazm-io/.env')

supabase_url = os.getenv('VITE_SUPABASE_URL')
supabase_key = os.getenv('VITE_SUPABASE_ANON_KEY')

# Config from root .env
evolution_url = "https://jazm-io-production.up.railway.app/evolution"
evolution_key = "Supera"

if not supabase_url or not supabase_key:
    print("Missing Supabase credentials")
    exit(1)

headers = {
    'apikey': supabase_key,
    'Authorization': f'Bearer {supabase_key}',
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates'
}

config_json = {
    "evolutionUrl": evolution_url,
    "evolutionKey": evolution_key,
    "webhookUrl": ""
}

data = {
    "provider": "whatsapp_bot",
    "config": config_json,
    "updated_at": datetime.utcnow().isoformat()
}

# Upsert config
res = httpx.post(f"{supabase_url}/rest/v1/api_configurations", headers=headers, json=data)

if res.status_code in [200, 201, 204]:
    print("SUCCESS: Configuration synchronized correctly.")
else:
    print(f"ERROR: {res.status_code} {res.text}")
