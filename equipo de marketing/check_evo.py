import os
import json
import httpx
from dotenv import load_dotenv

# Load env from jazm-io
load_dotenv('c:/Jazmio servidor Hunnging/jazm-io/.env')

supabase_url = os.getenv('VITE_SUPABASE_URL')
supabase_key = os.getenv('VITE_SUPABASE_ANON_KEY')

if not supabase_url or not supabase_key:
    print("Missing env vars")
    exit(1)

headers = {
    'apikey': supabase_key,
    'Authorization': f'Bearer {supabase_key}'
}

# Fetch api_configurations
res = httpx.get(f"{supabase_url}/rest/v1/api_configurations?provider=eq.whatsapp_bot&select=*", headers=headers)
if res.status_code == 200:
    print(json.dumps(res.json(), indent=2))
else:
    print(f"Error config: {res.status_code} {res.text}")

# Fetch instances
res2 = httpx.get(f"{supabase_url}/rest/v1/whatsapp_instances?select=*", headers=headers)
if res2.status_code == 200:
    print(json.dumps(res2.json(), indent=2))
else:
    print(f"Error instances: {res2.status_code} {res2.text}")
