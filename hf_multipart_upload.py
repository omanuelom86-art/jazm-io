import urllib.request
import os

token = os.getenv("HF_TOKEN", "REPLACE_WITH_YOUR_TOKEN")
repo_id = "Info86/jazmio-servidor-act-clean"

def upload_multipart(local_path, hf_path):
    url = f"https://huggingface.co/api/spaces/{repo_id}/upload"
    boundary = "----------Boundary12345"
    
    with open(local_path, "rb") as f:
        file_content = f.read()
        
    body = (
        f"--{boundary}\r\n"
        f'Content-Disposition: form-data; name="file"; filename="{hf_path}"\r\n'
        f"Content-Type: application/octet-stream\r\n\r\n"
    ).encode("utf-8") + file_content + (
        f"\r\n--{boundary}\r\n"
        f'Content-Disposition: form-data; name="path"\r\n\r\n'
        f"{hf_path}\r\n"
        f"--{boundary}--\r\n"
    ).encode("utf-8")
    
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Authorization", f"Bearer {token}")
    req.add_header("Content-Type", f"multipart/form-data; boundary={boundary}")
    
    try:
        with urllib.request.urlopen(req) as response:
            print(f"Successfully uploaded {hf_path}: {response.code}")
            return True
    except Exception as e:
        print(f"Error uploading {hf_path}: {e}")
        return False

# Files to upload
files_to_push = ["Dockerfile", "supervisord.conf"]

for filename in files_to_push:
    local_path = os.path.join(os.getcwd(), filename)
    if os.path.exists(local_path):
        upload_multipart(local_path, filename)
    else:
        print(f"File not found: {local_path}")
