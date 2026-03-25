import re
import os

file_path = r"c:\Users\Oscar Orozco\ .gemini\antigravity\scratch\jazmio-servidor-act-clean\assets\index-Bc6IvWS4.js".replace(" ", "")

if not os.path.exists(file_path):
    print(f"Error: {file_path} not found")
    exit(1)

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Look for Supabase URLs
urls = re.findall(r'https://[a-z0-9]+\.supabase\.co', content)
print("Found URLs:", set(urls))

# Look for what looks like a Supabase Key (long JWT-like string)
# Typically starts with eyJ...
keys = re.findall(r'eyJ[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+', content)
for k in set(keys):
    if len(k) > 100:
        print(f"Found potential key (len {len(k)}): {k[:20]}...")

# Look for the project ID specifically
project_id = "htabdguydyysolkzdilm"
if project_id in content:
    print(f"Confirmed: Project ID {project_id} exists in file.")
    # Look for surrounding context
    idx = content.find(project_id)
    print("Context:", content[max(0, idx-50):idx+100])
else:
    print(f"Project ID {project_id} NOT found in file.")
