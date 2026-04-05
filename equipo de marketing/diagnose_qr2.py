import os, json, time, sys
import httpx
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8')

load_dotenv('c:/Jazmio servidor Hunnging/jazm-io/.env')
EVO_URL = "https://jazm-io-production.up.railway.app/evolution"
EVO_KEY = "Supera"
h = {"apikey": EVO_KEY}

test_name = "wizard_test_qr_" + str(int(time.time()))

print(f"Creating instance '{test_name}'...")
try:
    r2 = httpx.post(f"{EVO_URL}/instance/create", headers={**h, "Content-Type":"application/json"},
        json={"instanceName": test_name, "qrcode": True, "integration": "WHATSAPP-BAILEYS"}, timeout=15)
    print(r2.text)
except Exception as e:
    print(f"Error creating: {e}")

print(f"Polling /instance/qrcode/{test_name}?image=true...")
for attempt in range(12):
    time.sleep(2.5)
    try:
        qrRes = httpx.get(f"{EVO_URL}/instance/qrcode/{test_name}", headers=h, timeout=10) # ?image=true removed because base64 is not strictly an image
        qrData = qrRes.json()
        print(f"Attempt {attempt+1}: HTTP {qrRes.status_code}")
        
        # print keys of the json safely:
        print(json.dumps(qrData, indent=2))
        
        b64 = qrData.get('base64') or qrData.get('qrcode',{}).get('base64') or qrData.get('code',{}).get('base64')
        state = qrData.get('state') or qrData.get('instance',{}).get('state')
        
        if b64:
            print("FOUND QR BASE64!")
            break
        elif state == 'open':
            print("INSTANCE ALREADY OPEN!")
            break
    except Exception as e:
        print(f"Polling error: {e}")

print("Done.")
