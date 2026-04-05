import os, json
import httpx
from dotenv import load_dotenv

load_dotenv('c:/Jazmio servidor Hunnging/jazm-io/.env')
EVO_URL = "https://jazm-io-production.up.railway.app/evolution"
EVO_KEY = "Supera"

h = {"apikey": EVO_KEY}

# 1. List instances
r = httpx.get(f"{EVO_URL}/instance/fetchInstances", headers=h)
instances = r.json()
print("=== INSTANCES ===")
for inst in instances:
    name = inst.get('instance',{}).get('instanceName') or inst.get('instanceName','?')
    status = inst.get('instance',{}).get('connectionStatus') or inst.get('connectionStatus','?')
    print(f"  - {name}: {status}")

# 2. Try creating a test instance
test_name = "wizard_test_qr"
print(f"\n=== CREATING INSTANCE '{test_name}' ===")
r2 = httpx.post(f"{EVO_URL}/instance/create", headers={**h, "Content-Type":"application/json"},
    json={"instanceName": test_name, "qrcode": True, "integration": "WHATSAPP-BAILEYS"}, timeout=15)
d2 = r2.json()
print(f"Status: {r2.status_code}")
print(json.dumps(d2 if isinstance(d2, dict) else d2, indent=2)[:1000])

# Check if QR is in creation response
if 'qrcode' in d2 and d2['qrcode']:
    print("\n✅ QR received at creation!")
else:
    print("\n⚠️ No QR at creation. Trying /instance/connect...")
    r3 = httpx.get(f"{EVO_URL}/instance/connect/{test_name}", headers=h, timeout=15)
    d3 = r3.json()
    print(json.dumps(d3 if isinstance(d3, dict) else d3, indent=2)[:1000])
