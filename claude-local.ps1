# Script para lanzar Claude Code en modo LOCAL y GRATUITO usando Ollama
# Modelo seleccionado: Qwen 2.5 Coder (7B) - Optimizado para programación

# 1. Configurar variables de entorno para que Claude use a Ollama como backend
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_BASE_URL = "http://localhost:11434"

# 2. Lanzar Claude Code con el modelo local
Write-Host "Iniciando Claude Code en modo LOCAL (Cerebro: Qwen 2.5)..." -ForegroundColor Cyan
claude --model qwen2.5-coder:7b
