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
git add -A
git commit -m "NEXUS-AGENTIC-HUB: v11.8-FINAL - Syncing AI Hub + Stable DB + Nginx Fix"

Write-Host "Subiendo a GitHub (Railway)..."
git push github main

Write-Host "Subiendo a Hugging Face (Origin)..."
git push origin main 2>$null # Intentamos pero ignoramos error de auth si ocurre

Write-Host "LISTO!"
