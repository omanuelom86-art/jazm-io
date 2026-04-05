# Build and Deploy SetupWizard QR fix
Write-Host "Step 1: Building frontend..."
Set-Location "C:\Jazmio servidor Hunnging\jazm-io"
$env:NODE_OPTIONS = "--max-old-space-size=4096"
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build FAILED"
    exit 1
}

Write-Host "Step 2: Copying static assets..."
Copy-Item -Path "dist\index.html" -Destination "..\index.html" -Force
if (!(Test-Path "..\nexus-assets")) { New-Item -ItemType Directory -Path "..\nexus-assets" }
Copy-Item -Path "dist\nexus-assets\*" -Destination "..\nexus-assets\" -Recurse -Force

Set-Location "C:\Jazmio servidor Hunnging"
Write-Host "Step 3: Committing changes..."
git add -A
git commit -m "fix: SetupWizard QR polling endpoint (Evolution v2.x) - /instance/qrcode"

Write-Host "Step 4: Pushing to Railway..."
git push github main

Write-Host "DONE! Deploy triggered. Railway will rebuild in ~2 min."
