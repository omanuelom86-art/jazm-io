import urllib.request
import base64
import json
import os

token = os.getenv("HF_TOKEN", "REPLACE_WITH_YOUR_TOKEN")
repo_id = "Info86/New-Espacio-Jazmio"

def upload_file(local_path, hf_path, message):
    url = f"https://huggingface.co/api/spaces/{repo_id}/contents/{hf_path}"
    
    with open(local_path, "rb") as f:
        content = base64.b64encode(f.read()).decode("utf-8")
        
    data = {
        "content" : content,
        "message" : message,
        "encoding" : "base64"
    }
    
    req = urllib.request.Request(url, data=json.dumps(data).encode("utf-8"), method="PUT")
    req.add_header("Authorization", f"Bearer {token}")
    req.add_header("Content-Type", "application/json")
    
    try:
        with urllib.request.urlopen(req) as response:
            print(f"Successfully uploaded {hf_path}: {response.code}")
            return True
    except Exception as e:
        print(f"Error uploading {hf_path}: {e}")
        return False

# Files to upload
files_to_push = [
    ("Dockerfile", "Fix evolution startup + permissions"),
    ("supervisord.conf", "Add diag script + hex fix"),
    ("nginx.conf", "Fix subpaths + MIME types"),
    ("start_evolution.sh", "Add debug diagnostics"),
    (".env", "Update to Session Pooler 5432"),
    ("force_setup_admin.py", "Fix connection string for admin setup"),
    ("app.py", "Final stable version"),
    ("create_admin_user.py", "Sync with new DB"),
    ("verify_db.py", "Sync with new DB"),
    ("PROJECT_LOG.md", "Project changelog"),
    ("INFRASTRUCTURE_TRUTH.md", "Source of Truth"),
]

for filename, msg in files_to_push:
    local_path = os.path.join(r"C:\Users\Oscar Orozco\ .gemini\antigravity\scratch\jazmio-servidor-act-clean", filename)
    if not os.path.exists(local_path):
        local_path = os.path.join(r"C:\Users\Oscar Orozco\.gemini\antigravity\scratch\jazmio-servidor-act-clean", filename)
    
    if os.path.exists(local_path):
        upload_file(local_path, filename, msg)
    else:
        print(f"File not found: {local_path}")
