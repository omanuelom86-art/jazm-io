from huggingface_hub import HfApi
import os

token = os.getenv("HF_TOKEN", "REPLACE_WITH_YOUR_TOKEN")
repo_id = "Info86/New-Espacio-Jazmio"
local_dir = r"C:\Users\Oscar Orozco\.gemini\antigravity\scratch\jazmio-servidor-act-clean"

api = HfApi(token=token)

print(f"Iniciando subida COMPLETA al Space: {repo_id}")

try:
    api.upload_folder(
        folder_path=local_dir,
        repo_id=repo_id,
        repo_type="space",
        path_in_repo="",
        commit_message="Full Project Fix: Evolution API, n8n, and Jazmio Manager",
        ignore_patterns=[".git", "node_modules", "__pycache__", "*.pyc", "hf_api_push.py", "hf_multipart_upload.py", "push_full.py", "push_to_hf_hub.py"]
    )
    print("\n[OK] PROCESO FINALIZADO CON EXITO ---")
except Exception as e:
    print(f"\n[ERROR] Error durante la subida: {e}")
