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

headers = {
    'apikey': supabase_key,
    'Authorization': f'Bearer {supabase_key}',
    'Content-Type': 'application/json'
}

config_json = {
    "evolutionUrl": evolution_url,
    "evolutionKey": evolution_key,
    "webhookUrl": ""
}

data = {
    "config": config_json,
    "updated_at": datetime.utcnow().isoformat()
}

# Try PATCH first
res = httpx.patch(f"{supabase_url}/rest/v1/api_configurations?provider=eq.whatsapp_bot", headers=headers, json=data)

if res.status_code in [200, 204]:
    print("SUCCESS: Configuration updated.")
elif res.status_code == 404 or (res.status_code == 200 and not res.text):
    # If not found, try POST
    data["provider"] = "whatsapp_bot"
    res = httpx.post(f"{supabase_url}/rest/v1/api_configurations", headers=headers, json=data)
    if res.status_code in [200, 201, 204]:
        print("SUCCESS: Configuration created.")
    else:
        print(f"ERROR on Create: {res.status_code} {res.text}")
else:
    print(f"ERROR on Update: {res.status_code} {res.text}")
