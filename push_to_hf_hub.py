from huggingface_hub import HfApi
import os

token = os.getenv("HF_TOKEN", "REPLACE_WITH_YOUR_TOKEN")
repo_id = "Info86/New-Espacio-Jazmio"
local_dir = r"C:\Users\Oscar Orozco\.gemini\antigravity\scratch\jazmio-servidor-act-clean"

api = HfApi(token=token)

print(f"🚀 Iniciando subida completa al Space: {repo_id}")

try:
    # Subir toda la carpeta ignorando archivos innecesarios
    api.upload_folder(
        folder_path=local_dir,
        repo_id=repo_id,
        repo_type="space",
        ignore_patterns=[".git*", "__pycache__", "*.pyc", "output.txt", "problemas del sistema.txt", "push_to_hf_hub.py", "node_modules"],
        commit_message="🚀 EXPERT RECOVERY v1.6: Trae AI Optimizations (127.0.0.1 host, n8n MIME fix, MANAGER enabled)",
    )
    print("\n✅ ¡DISCIPLINA! Todos los archivos corregidos han sido subidos con éxito.")
    print("El Space debería comenzar a reconstruirse automáticamente (Versión 1.0.8).")
except Exception as e:
    print(f"\n❌ Error durante la subida: {e}")

print("\n--- PROCESO FINALIZADO ---")
