Set-Location "C:\Jazmio servidor Hunnging\jazm-io"
Write-Host "Construyendo (Build) el Frontend en React..."
npm run build

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Fallo el build"
    exit 1
}

Write-Host "Copiando archivos estaticos de React hacia la carpeta que Hugging Face lee..."
Copy-Item -Path "dist\index.html" -Destination "..\index.html" -Force
if (!(Test-Path "..\nexus-assets")) { New-Item -ItemType Directory -Path "..\nexus-assets" }
Copy-Item -Path "dist\nexus-assets\*" -Destination "..\nexus-assets\" -Recurse -Force

Set-Location "C:\Jazmio servidor Hunnging"
Write-Host "Registrando todos los archivos modificados..."
# Forzamos agregar todo lo importante para el despliegue
git add index.html nexus-assets/ start_n8n.sh status.py nginx.conf supervisord.conf Dockerfile build_and_push.ps1 INFRASTRUCTURE_TRUTH.md README.md skills/ tools_from_video/

git commit -m "NEXUS-AGENTIC-HUB: v11.5 - Agregadas 21 Skills, GWS CLI y correcciones SSL"

Write-Host "Subiendo a GitHub (Railway)..."
git push github main

Write-Host "Subiendo a Hugging Face (Origin)..."
git push origin main 2>$null # Intentamos pero ignoramos error de auth si ocurre

Write-Host "LISTO!"
