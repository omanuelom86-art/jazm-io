Set-Location "C:\Jazmio servidor Hunnging\jazm-io"
Write-Host "Construyendo (Build) el Frontend en React..."
npm run build

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Falló el build"
    exit 1
}

Write-Host "Copiando archivos estáticos de React hacia la carpeta que Hugging Face lee..."
Copy-Item -Path "dist\index.html" -Destination "..\index.html" -Force
Copy-Item -Path "dist\assets\*" -Destination "..\assets\" -Recurse -Force

Set-Location "C:\Jazmio servidor Hunnging"
Write-Host "Registrando archivos modificados en Git (status.py, start_n8n.sh, assets, index.html)..."
git add index.html assets/ start_n8n.sh status.py
git commit -m "FIX: Despliegue del Frontend (Login Premium) y Hotfixes (RLS / N8N)"
Write-Host "Subiendo (Pusheando) a Hugging Face..."
git push
Write-Host "¡TERMINADO!"
