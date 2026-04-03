# 🔧 INSTRUCCIONES DE DIAGNÓSTICO COMPLETO - JAZM.IO
**Fecha:** 2 de abril, 2026  
**Estado:** Post-deploy Railway (commit: `085cf13`)  
**Responsable:** Antigravity (o asistente designado)

---

## 📋 TABLA DE CONTENIDOS
1. [Contexto Técnico](#contexto-técnico)
2. [Checklist de Verificación por Componente](#checklist-de-verificación-por-componente)
3. [URLs y Endpoints a Validar](#urls-y-endpoints-a-validar)
4. [Procedimientos de Diagnóstico](#procedimientos-de-diagnóstico)
5. [Guía de Troubleshooting](#guía-de-troubleshooting)
6. [Rollback y Recuperación](#rollback-y-recuperación)

---

## 🏗️ CONTEXTO TÉCNICO

### Arquitectura del Sistema
```
┌─────────────────────────────────────────────────────────┐
│           CONTENEDOR DOCKER (Alpine Linux)              │
│                   (Railway / Hugging Face)              │
├─────────────────────────────────────────────────────────┤
│  SUPERVISOR (supervisord.conf)                          │
│  ├── Nginx (Puerto 7860)     [PROXY MAESTRO]           │
│  ├── n8n                     [AUTOMATIZACIÓN]           │
│  ├── Evolution API           [WHATSAPP]                 │
│  └── FastAPI                 [HEALTH CHECK]             │
├─────────────────────────────────────────────────────────┤
│  FRONTEND (React - Vite)                                │
│  └── Ruta: / (servido por Nginx)                       │
└─────────────────────────────────────────────────────────┘
         │
         └──→ PostgreSQL (Supabase, AWS West 2)
              ├── Schema: n8n
              └── Tablas: evolution_* (WhatsApp)
```

### Variables de Entorno Críticas
| Variable | Valor/Ejemplo | Estado | Crítica |
|----------|---------------|--------|---------|
| `N8N_ENCRYPTION_KEY` | `nexus_secret_key` | ✅ Fijo | **SÍ** |
| `N8N_BASE_URL` | `https://jazm-io-production.up.railway.app/n8n/` | 🔄 Verificar | **SÍ** |
| `DATABASE_URL` | Supabase PostgreSQL | 🔄 Verificar | **SÍ** |
| `EVOLUTION_API_URL` | `http://localhost:9000` | ✅ Local | No |
| `NGINX_PORT` | `7860` | ✅ Fijo | **SÍ** |

### Archivos Clave a Monitorear
```
proyecto-root/
├── supervisord.conf              [ORQUESTADOR PRINCIPAL]
├── docker/
│   ├── nginx/
│   │   └── nginx.conf           [PROXY ROUTING]
│   └── Dockerfile               [IMAGEN BASE]
├── n8n/                          [INSTANCIA n8n]
├── evolution/                    [API WHATSAPP]
├── jazm-io/                      [FRONTEND REACT]
│   ├── dist/                     [BUILD OUTPUT]
│   └── src/
├── nexus-assets/                 [ASSETS EMPAQUETADOS]
└── index.html                    [ENTRY POINT]
```

---

## ✅ CHECKLIST DE VERIFICACIÓN POR COMPONENTE

### 1️⃣ VERIFICACIÓN DE RAILWAY DEPLOYMENT

**Paso 1.1: Estado del Build**
```
URL: https://dashboard.railway.app
- [ ] Proyecto "jazm-io-production" visible
- [ ] Último commit: 085cf13
- [ ] Build status: ✅ SUCCESS (verde)
- [ ] Deployment status: ✅ ACTIVE (verde)
- [ ] Health check: ✅ PASSING
```

**Paso 1.2: Logs del Contenedor**
```bash
# En Railway Dashboard → Logs
- [ ] NO hay errores CRITICAL o FATAL
- [ ] Supervisor ha iniciado exitosamente
- [ ] Nginx escuchando en puerto 7860
- [ ] n8n ha iniciado (busca "n8n started successfully")
- [ ] Evolution API en línea
- [ ] Conexión a Supabase establecida
```

**Paso 1.3: Salud General**
```
URL: https://jazm-io-production.up.railway.app/status
- [ ] Endpoint responde con código 200
- [ ] JSON devuelve: {"status": "healthy", "timestamp": "..."}
- [ ] Todos los servicios marcan UP
```

---

### 2️⃣ VERIFICACIÓN DEL FRONTEND (REACT)

**Paso 2.1: Página Principal Carga**
```
URL: https://jazm-io-production.up.railway.app/
- [ ] Página carga (sin pantalla en blanco)
- [ ] CSS se aplica correctamente (colores, layouts)
- [ ] Consola JS: ❌ NO hay errores 404 o CORS
- [ ] Devtools Network: todos los assets cargan (status 200)
```

**Paso 2.2: Verificación de Assets**
```bash
# Abre la consola del navegador (F12)
- [ ] script.js carga correctamente
- [ ] styles.css aplica estilos
- [ ] Favicon carga (sin error 404)
- [ ] Imágenes/logos cargan desde nexus-assets/
```

**Paso 2.3: Funcionalidad Básica**
```
- [ ] Navegación responde
- [ ] Formularios aceptan input
- [ ] Botones ejecutan acciones
- [ ] No hay freeze o lag anormal
```

---

### 3️⃣ VERIFICACIÓN DE N8N

**Paso 3.1: Acceso a Panel n8n**
```
URL: https://jazm-io-production.up.railway.app/n8n/
- [ ] Panel abre (logo n8n visible)
- [ ] ❌ NO muestra error "Cannot GET /n8n"
- [ ] ❌ NO muestra pantalla en blanco
- [ ] Login funciona (si está configurado)
```

**Paso 3.2: Validación de Configuración Nginx**
```
Verificar en logs que Nginx haya cargado:
- [ ] proxy_pass para /n8n/ apunta a http://localhost:3100/
- [ ] proxy_pass TERMINA EN / (barra diagonal)
- [ ] N8N_BASE_URL = https://jazm-io-production.up.railway.app/n8n/
- [ ] WebSocket upgrade configurado: Upgrade $http_upgrade
```

**Paso 3.3: Disponibilidad de Workflows**
```
En panel n8n:
- [ ] Lista de workflows carga
- [ ] Flujos anteriores están disponibles
- [ ] ❌ NO hay error "Could not decrypt credentials"
```

---

### 4️⃣ VERIFICACIÓN DE EVOLUTION API (WHATSAPP)

**Paso 4.1: Estado del Servicio**
```
URL: http://localhost:9000/health (desde contenedor)
o
URL: https://jazm-io-production.up.railway.app/evolution/health
- [ ] Endpoint responde
- [ ] Estado: "connected" o "running"
```

**Paso 4.2: Instancias de WhatsApp**
```
URL: https://jazm-io-production.up.railway.app/evolution/instance/list
- [ ] API responde con JSON
- [ ] Lista de instancias visible
- [ ] ❌ NO hay errores de autenticación
```

---

### 5️⃣ VERIFICACIÓN DE BASE DE DATOS

**Paso 5.1: Conexión a Supabase**
```bash
# En cliente SQL (psql, DBeaver, etc.)
- [ ] Usuario puede conectarse a Supabase
- [ ] BD "postgres" (o la configurada) accesible
- [ ] Schema "n8n" existe
- [ ] Tablas evolution_* existen
```

**Paso 5.2: Integridad de Datos**
```sql
SELECT COUNT(*) FROM n8n.workflow;
- [ ] Workflows previos están ahí (COUNT > 0)

SELECT COUNT(*) FROM evolution_instances;
- [ ] Instancias de WhatsApp registradas
```

---

## 🌐 URLs Y ENDPOINTS A VALIDAR

| Componente | URL | Esperado | Crítica |
|------------|-----|----------|---------|
| **Frontend** | `https://jazm-io-production.up.railway.app/` | Status 200, HTML + CSS | ✅ |
| **n8n Panel** | `https://jazm-io-production.up.railway.app/n8n/` | Status 200, Panel UI | ✅ |
| **Health Check** | `https://jazm-io-production.up.railway.app/status` | Status 200, JSON healthy | ✅ |
| **Evolution Health** | `https://jazm-io-production.up.railway.app/evolution/health` | Status 200 | ⚠️ |
| **n8n API** | `https://jazm-io-production.up.railway.app/n8n/api/v1/` | Status 200, JSON | ⚠️ |
| **Hugging Face** | `https://jazm-io-hugging-face.hf.space/` | Status 200 (mirror) | ⚠️ |

---

## 🔍 PROCEDIMIENTOS DE DIAGNÓSTICO

### Diagnóstico 1: Nginx No Routea Correctamente

**Síntomas:**
- Acceso a `/n8n/` da error 404 o pantalla en blanco
- Assets no cargan (CSS/JS 404)

**Pasos de Diagnóstico:**
```bash
# 1. Verifica la config de Nginx en el contenedor
docker exec -it [container-id] cat /etc/nginx/nginx.conf

# 2. Busca estas líneas (DEBEN estar):
# location /n8n/ {
#     proxy_pass http://localhost:3100/;
#     proxy_http_version 1.1;
#     proxy_set_header Upgrade $http_upgrade;
#     proxy_set_header Connection "upgrade";
# }

# 3. Recarga Nginx (sin reiniciar el contenedor)
docker exec -it [container-id] nginx -s reload

# 4. Verifica status
docker exec -it [container-id] curl http://localhost:7860/n8n/
```

**Solución:**
1. Edita `docker/nginx/nginx.conf`
2. Verifica que `proxy_pass` termine en `/` (barra diagonal)
3. Verifica que `N8N_BASE_URL` sea `https://jazm-io-production.up.railway.app/n8n/`
4. Redeploy a Railway

---

### Diagnóstico 2: n8n Muestra Pantalla en Blanco

**Síntomas:**
- Panel n8n carga pero está vacío
- Consola JS muestra errores CORS o 404

**Pasos de Diagnóstico:**
```bash
# 1. Verifica logs de n8n
docker logs [container-id] | grep -i "n8n"

# 2. Busca estos errores:
# - "Cannot find base URL"
# - "Could not decrypt credentials"
# - "Connection refused to database"

# 3. Valida la encryption key
echo "Esperado: nexus_secret_key"
docker exec -it [container-id] echo $N8N_ENCRYPTION_KEY
```

**Solución:**
```bash
# Reinicia n8n (a través de Supervisor)
docker exec -it [container-id] supervisorctl restart n8n

# Espera 30 segundos y recarga el navegador
```

---

### Diagnóstico 3: Base de Datos No Conecta

**Síntomas:**
- Logs muestran "Connection refused to database"
- n8n no inicia

**Pasos de Diagnóstico:**
```bash
# 1. Verifica la URL de conexión
docker exec -it [container-id] echo $DATABASE_URL

# 2. Prueba conexión directa desde el contenedor
docker exec -it [container-id] psql $DATABASE_URL -c "SELECT 1;"

# 3. Verifica en Supabase que:
# - La BD está activa
# - Las reglas de firewall permiten la IP de Railway
# - El usuario tiene permisos
```

---

### Diagnóstico 4: Evolution API No Arranca

**Síntomas:**
- WhatsApp integration falla
- Evolution API no responde

**Pasos de Diagnóstico:**
```bash
# 1. Verifica logs
docker logs [container-id] | grep -i "evolution"

# 2. Valida puerto 9000
docker exec -it [container-id] curl http://localhost:9000/health

# 3. Verifica variables de entorno necesarias
docker exec -it [container-id] env | grep -i evolution
```

---

## 🚨 GUÍA DE TROUBLESHOOTING

### Error: "ENOENT: no such file or directory"
**Causa:** Assets no copiados a la carpeta correcta durante build  
**Solución:**
```bash
# En local, verifica:
# 1. React build generó dist/
cd jazm-io && npm run build

# 2. Archivos copiados a raíz:
cp -r jazm-io/dist/* ./nexus-assets/
cp jazm-io/dist/index.html ./

# 3. Rebuild Docker:
docker build -t jazm-io:latest .
```

---

### Error: "N8N_ENCRYPTION_KEY is not defined"
**Causa:** Variable no pasada a Supervisor  
**Solución:**
```bash
# En supervisord.conf, dentro de [program:n8n]:
# Asegúrate de:
# environment=N8N_ENCRYPTION_KEY=nexus_secret_key,
#             DATABASE_URL=...,
#             N8N_BASE_URL=https://jazm-io-production.up.railway.app/n8n/
```

---

### Error: "502 Bad Gateway" en /n8n/
**Causa:** Nginx no puede conectar a n8n en localhost:3100  
**Solución:**
```bash
# 1. Verifica que n8n está escuchando:
docker exec -it [container-id] netstat -tulpn | grep 3100

# 2. Si no hay nada, Supervisor no lo levantó:
docker exec -it [container-id] supervisorctl status

# 3. Si está DOWN, mira el error:
docker exec -it [container-id] supervisorctl tail -100 n8n
```

---

### Error: "Cannot GET /n8n"
**Causa:** Nginx no tiene configurado proxy_pass para /n8n/  
**Solución:**
```bash
# Edita nginx.conf:
# ANTES (❌ INCORRECTO):
# location /n8n {
#     proxy_pass http://localhost:3100;
# }

# DESPUÉS (✅ CORRECTO):
# location /n8n/ {
#     proxy_pass http://localhost:3100/;
#     proxy_http_version 1.1;
#     proxy_set_header Upgrade $http_upgrade;
#     proxy_set_header Connection "upgrade";
# }

# Redeploy a Railway
```

---

## 🔄 ROLLBACK Y RECUPERACIÓN

### Rollback a Commit Anterior
Si el deploy actual tiene problemas críticos:

```bash
# 1. En Railway Dashboard
# → Settings → Environment
# → Busca el commit anterior conocido como "bueno"
# → Haz click en "Redeploy"

# O desde CLI:
railway deploy --commit [HASH_DEL_COMMIT_BUENO]
```

**Commits Conocidos:**
- `085cf13` - Último (actual)
- `[ANTERIOR]` - Backup anterior (anota aquí el hash)

---

### Recuperación Manual del Contenedor

Si el contenedor está corrompido:

```bash
# 1. Detén el contenedor
docker stop jazm-io

# 2. Elimina y reconstruye
docker rm jazm-io
docker build -t jazm-io:latest .

# 3. Inicia de nuevo
docker run -d --name jazm-io \
  -p 7860:7860 \
  -e DATABASE_URL="..." \
  -e N8N_ENCRYPTION_KEY="nexus_secret_key" \
  -e N8N_BASE_URL="https://jazm-io-production.up.railway.app/n8n/" \
  jazm-io:latest

# 4. Monitorea logs
docker logs -f jazm-io
```

---

## 📊 RESUMEN DE PUNTOS CRÍTICOS

| Item | Valor | Estado | Acción |
|------|-------|--------|--------|
| **N8N_ENCRYPTION_KEY** | `nexus_secret_key` | ✅ Crítico | NO CAMBIAR |
| **N8N_BASE_URL** | `.../n8n/` (con /) | 🔄 Verificar | Revisar supervisord.conf |
| **Nginx proxy_pass** | `/` (barra final) | 🔄 Verificar | Revisar nginx.conf |
| **Railway Deployment** | `085cf13` | 🔄 Verificar | Revisar Dashboard |
| **Database Connection** | Supabase West 2 | 🔄 Verificar | Test psql |
| **React Build** | En nexus-assets/ | 🔄 Verificar | Revisar dist/ + index.html |

---

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

1. **Inmediato (0-5 min):**
   - [ ] Revisa Railway Dashboard estado del build
   - [ ] Accede a `https://jazm-io-production.up.railway.app/` y verifica que carga
   - [ ] Revisa `/status` endpoint

2. **Corto plazo (5-15 min):**
   - [ ] Prueba `/n8n/` panel
   - [ ] Verifica `/evolution/health`
   - [ ] Abre consola JS (F12) y busca errores

3. **Validación completa (15-30 min):**
   - [ ] Sigue el checklist completo de verificación por componente
   - [ ] Ejecuta los procedimientos de diagnóstico para cada servicio
   - [ ] Documenta cualquier anomalía encontrada

4. **Si hay errores:**
   - [ ] Consulta la guía de troubleshooting
   - [ ] Aplica las soluciones propuestas
   - [ ] Redeploy a Railway si fue necesario cambiar config

---

## 📞 ESCALAMIENTO

Si después de seguir esta guía hay problemas que no se resuelven:

1. **Captura logs completos:**
   ```bash
   docker logs [container-id] > jazm-io-logs-$(date +%Y%m%d_%H%M%S).txt
   ```

2. **Documenta el error exacto y el paso donde ocurre**

3. **Contacta al equipo técnico con:**
   - Logs capturados
   - URL donde ocurre el error
   - Pasos para reproducir
   - Stack trace (si aplica)

---

**Documento generado:** 2 de abril, 2026  
**Versión:** 1.0  
**Última actualización:** Post-deploy commit 085cf13
