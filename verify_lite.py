import urllib.request
import json

URLS = [
    "https://info86-new-espacio-jazmio.hf.space/",
    "https://info86-new-espacio-jazmio.hf.space/api/status",
    "https://info86-new-espacio-jazmio.hf.space/api/debug/logs?file=evolution.err",
    "https://info86-new-espacio-jazmio.hf.space/api/debug/logs?file=n8n.err"
]

def check():
    for url in URLS:
        print(f"Checking {url}...")
        try:
            with urllib.request.urlopen(url, timeout=10) as response:
                print(f"[{response.status}] {url}")
                if "logs" in url:
                    print(response.read().decode('utf-8')[-500:])
        except Exception as e:
            print(f"FAILED: {e}")

if __name__ == "__main__":
    check()
