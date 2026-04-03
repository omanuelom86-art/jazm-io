# 🛠️ COMANDOS RÁPIDOS - REFERENCIA TERMINAL
**Jazm.io - Toolkit de Antigravity**

---

## 🚀 ACCESO RÁPIDO

### Conectar a Railway CLI
```bash
# Login (primera vez)
railway login

# Seleccionar proyecto
railway project

# Ver logs en vivo
railway logs -f

# Ver status
railway status
```

---

## 🐳 DOCKER LOCALS

### Si estás en el servidor con Docker directamente:

#### Ver logs
```bash
# Logs completos
docker logs jazm-io

# Últimas 100 líneas
docker logs --tail 100 jazm-io

# Logs en tiempo real
docker logs -f jazm-io

# Logs con timestamp
docker logs --timestamps jazm-io
```

#### Ejecutar comandos en el contenedor
```bash
# Bash shell interactivo
docker exec -it jazm-io /bin/bash

# Solo ejecutar comando
docker exec -it jazm-io curl http://localhost:7860/status

# Ver variables de entorno
docker exec -it jazm-io env
```

#### Supervisorctl (gestor de procesos)
```bash
# Ver estado de todos los servicios
docker exec -it jazm-io supervisorctl status

# Reiniciar n8n
docker exec -it jazm-io supervisorctl restart n8n

# Reiniciar Nginx
docker exec -it jazm-io supervisorctl restart nginx

# Reiniciar Evolution
docker exec -it jazm-io supervisorctl restart evolution

# Reiniciar todo
docker exec -it jazm-io supervisorctl restart all

# Ver logs de un servicio específico
docker exec -it jazm-io supervisorctl tail -100 n8n
docker exec -it jazm-io supervisorctl tail -100 nginx
docker exec -it jazm-io supervisorctl tail -100 evolution
```

#### Validar Nginx
```bash
# Reload config sin reiniciar
docker exec -it jazm-io nginx -s reload

# Test config
docker exec -it jazm-io nginx -t

# Ver proceso
docker exec -it jazm-io netstat -tulpn | grep nginx
```

#### Base de Datos (desde contenedor)
```bash
# Conectar a PostgreSQL
docker exec -it jazm-io psql $DATABASE_URL

# Query básico
docker exec -it jazm-io psql $DATABASE_URL -c "SELECT COUNT(*) FROM n8n.workflow;"

# Listar bases de datos
docker exec -it jazm-io psql $DATABASE_URL -c "\l"

# Listar tablas en esquema n8n
docker exec -it jazm-io psql $DATABASE_URL -c "\dt n8n.*"
```

#### Pruebas de Conectividad
```bash
# Test URL interna
docker exec -it jazm-io curl http://localhost:7860/status

# Test n8n interno
docker exec -it jazm-io curl http://localhost:3100/

# Test Evolution
docker exec -it jazm-io curl http://localhost:9000/health

# Verificar DNS
docker exec -it jazm-io nslookup google.com
```

---

## 🌐 CURL - TESTS DESDE AFUERA

### Health Check
```bash
curl https://jazm-io-production.up.railway.app/status
```

### Frontend
```bash
curl -I https://jazm-io-production.up.railway.app/
# -I = headers solo (sin body)
```

### n8n API
```bash
curl https://jazm-io-production.up.railway.app/n8n/api/v1/
```

### Evolution Health
```bash
curl https://jazm-io-production.up.railway.app/evolution/health
```

### Test POST a n8n (con token)
```bash
curl -X POST https://jazm-io-production.up.railway.app/n8n/api/v1/workflows \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test"}'
```

---

## 📊 MONITOREO EN TIEMPO REAL

### Watch Logs (actualización cada 2 segundos)
```bash
# Terminal 1 - Logs
watch -n 2 'railway logs | tail -30'

# Terminal 2 - Status
watch -n 5 'curl -s https://jazm-io-production.up.railway.app/status | jq'
```

### Monitor de Procesos (Linux)
```bash
# Top de procesos
top

# Memory usage
free -h

# Disk usage
df -h

# Network
netstat -tulpn
```

---

## 🔧 CONFIGURACIÓN RÁPIDA

### Ver Nginx Config
```bash
docker exec -it jazm-io cat /etc/nginx/nginx.conf
```

### Ver Supervisord Config
```bash
docker exec -it jazm-io cat /etc/supervisor/conf.d/supervisord.conf
```

### Ver variables de entorno actuales
```bash
docker exec -it jazm-io env | grep -E "N8N|DATABASE|EVOLUTION|NGINX"
```

### Editar variable de entorno (Railway)
```bash
# En Railway Dashboard → Environment
# O desde CLI:
railway env set N8N_ENCRYPTION_KEY=nexus_secret_key
railway up
```

---

## 🔄 BUILD & DEPLOY

### Rebuild local
```bash
# Docker build
docker build -t jazm-io:latest .

# Rebuild y push
docker build -t jazm-io:latest . && docker push your-registry/jazm-io:latest
```

### Deploy a Railway
```bash
# Setup (primera vez)
railway init

# Link a Railway
railway link

# Deploy rama actual
railway up

# Deploy commit específico
railway deploy --commit 085cf13

# Ver historial
railway logs --commit
```

### Push a Hugging Face
```bash
# Si estás en el repo local
git push hugging-face main
# (requiere token configurado)
```

---

## 📋 DIAGNOSTICO COMÚN

### Verificar toda la cadena
```bash
#!/bin/bash
echo "=== RAILWAY STATUS ==="
railway status

echo -e "\n=== SUPERVISOR STATUS ==="
railway exec supervisorctl status

echo -e "\n=== HEALTH ENDPOINT ==="
curl -s https://jazm-io-production.up.railway.app/status | jq

echo -e "\n=== NGINX RUNNING ==="
railway exec netstat -tulpn | grep 7860

echo -e "\n=== DATABASE CONNECTION ==="
railway exec psql $DATABASE_URL -c "SELECT 1;"

echo -e "\n=== n8n STATUS ==="
railway exec curl -s http://localhost:3100/

echo -e "\n=== EVOLUTION STATUS ==="
railway exec curl -s http://localhost:9000/health
```

Guárdalo como `health-check.sh`, hazlo ejecutable y corre:
```bash
chmod +x health-check.sh
./health-check.sh
```

---

## 🆘 COMANDOS DE EMERGENCIA

### Reset de n8n (cuidado!)
```bash
# Reinicia n8n completamente
docker exec -it jazm-io supervisorctl restart n8n

# Espera 30 segundos
sleep 30

# Verifica que levantó
docker exec -it jazm-io curl http://localhost:3100/
```

### Reset de Nginx
```bash
# Recarga config
docker exec -it jazm-io nginx -s reload

# Si eso no funciona, reinicia
docker exec -it jazm-io supervisorctl restart nginx
```

### Limpieza de cache
```bash
# Borra cache Docker
docker system prune -a

# Borra logs antiguos
docker logs jazm-io > /dev/null
```

### Rollback a commit anterior
```bash
# Opción 1: Railway CLI
railway deploy --commit HASH_ANTERIOR

# Opción 2: Railway Dashboard
# → Deployments → Click en el anterior → Redeploy
```

---

## 📍 ARCHIVOS IMPORTANTES

### Ubicación en Railway
```
/app/
├── supervisord.conf           # ← Archivo de orquestación
├── docker/nginx/nginx.conf    # ← Routing
├── n8n/                       # ← Workflows
├── evolution/                 # ← WhatsApp
├── jazm-io/dist/              # ← Frontend compilado
├── nexus-assets/              # ← Assets empaquetados
└── index.html                 # ← Entry point
```

### Ver archivo en contenedor
```bash
docker exec -it jazm-io cat /app/supervisord.conf
docker exec -it jazm-io cat /etc/nginx/nginx.conf
docker exec -it jazm-io cat /app/index.html
```

### Editar archivo (en emergencia)
```bash
# Copia local
docker cp jazm-io:/app/supervisord.conf ./supervisord-backup.conf

# Edita y vuelve a copiar
docker cp ./supervisord-backup.conf jazm-io:/app/supervisord.conf

# Reload
docker exec -it jazm-io supervisorctl reread
docker exec -it jazm-io supervisorctl update
```

---

## 🎯 FLUJO TÍPICO DE DIAGNÓSTICO

```bash
# 1. Ver status general
railway status

# 2. Ver logs de error
railway logs | tail -50

# 3. Probar endpoints
curl https://jazm-io-production.up.railway.app/status

# 4. Revisar procesos
docker exec -it jazm-io supervisorctl status

# 5. Si n8n falla
docker exec -it jazm-io supervisorctl tail -100 n8n

# 6. Si Nginx falla
docker exec -it jazm-io supervisorctl tail -100 nginx

# 7. Si DB falla
docker exec -it jazm-io psql $DATABASE_URL -c "SELECT 1;"

# 8. Si todo falla, reinicia todo
docker exec -it jazm-io supervisorctl restart all
```

---

## 💾 EXPORTAR LOGS

### Capturar logs para análisis
```bash
# Logs a archivo
railway logs > jazm-io-logs-$(date +%Y%m%d_%H%M%S).txt

# Logs específicos de servicio
docker exec -it jazm-io supervisorctl tail -500 n8n > n8n-logs.txt

# Logs con contexto
docker logs jazm-io > container-logs.txt 2>&1
```

---

## 🔐 VARIABLES DE ENTORNO CRÍTICAS

### Ver
```bash
docker exec -it jazm-io env | grep -i "n8n\|database\|evolution"
```

### Cambiar (Railway Dashboard)
```
Settings → Environment
Add/Edit:
- N8N_ENCRYPTION_KEY = nexus_secret_key
- N8N_BASE_URL = https://jazm-io-production.up.railway.app/n8n/
- DATABASE_URL = [tu URL Supabase]
```

---

## 📞 ESCALAMIENTO

Si nada funciona:

```bash
# 1. Captura todo
docker logs jazm-io > EMERGENCY_LOGS.txt 2>&1
docker exec -it jazm-io env > ENVIRONMENT.txt
docker exec -it jazm-io supervisorctl status > SUPERVISOR_STATUS.txt

# 2. Archiva
tar -czf jazm-io-diagnostic-$(date +%Y%m%d_%H%M%S).tar.gz *.txt

# 3. Envía al equipo técnico
# (Subirá a Drive o Slack)
```

---

**Bookmark este archivo. Lo necesitarás. ⭐**
