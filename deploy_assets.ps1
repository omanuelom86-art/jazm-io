Set-Location "C:\Jazmio servidor Hunnging\jazm-io"
Write-Host "Construyendo (Build) el Frontend en React..."
npm run build

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Falló el build"
    exit 1
}

Write-Host "Copiando archivos estáticos de React hacia la carpeta raíz que Hugging Face (Docker) lee..."
Copy-Item -Path "dist\index.html" -Destination "..\index.html" -Force
Copy-Item -Path "dist\assets\*" -Destination "..\assets\" -Recurse -Force

Set-Location "C:\Jazmio servidor Hunnging"
Write-Host "Registrando archivos de activos de producción en Git..."
git add index.html assets/ jazm-io/src/
git commit -m "FIX: React AuthContext DB Mapper to fix Cuenta en Revision"
Write-Host "Subiendo (Pusheando) a Hugging Face..."
git push
Write-Host "¡TERMINADO!"
