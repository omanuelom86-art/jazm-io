import urllib.request
import json

url = "https://huggingface.co/api/spaces/Info86/New-Espacio-Jazmio/logs/build"
try:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')
        lines = content.splitlines()[-30:] # Last 30 lines
        for l in lines:
            print(l)
except Exception as e:
    print("Error fetching logs:", e)
