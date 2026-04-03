# ⚡ QUICK START - VALIDACIÓN DE 5 MINUTOS
**Jazm.io Production Check**  
**Commit:** 085cf13  
**Fecha:** 2 de abril, 2026

---

## 🚀 HAGA ESTO AHORA (En Este Orden)

### ✅ Paso 1: Abre Railway Dashboard
```
https://dashboard.railway.app
→ Busca proyecto "jazm-io-production"
→ ¿Status BUILD está VERDE? 
   - SÍ ✅ → Continúa
   - NO ❌ → Ve a TROUBLESHOOTING
```

---

### ✅ Paso 2: Abre la App (30 segundos)
```
https://jazm-io-production.up.railway.app/

¿Carga la página (ve contenido)? 
   - SÍ ✅ → Continúa
   - NO ❌ → Abre F12, mira Network, ve a TROUBLESHOOTING
```

---

### ✅ Paso 3: Valida Health Check (30 segundos)
```
https://jazm-io-production.up.railway.app/status

¿Devuelve JSON con "healthy"?
   - SÍ ✅ → Continúa
   - NO ❌ → Ve a TROUBLESHOOTING
```

---

### ✅ Paso 4: Verifica n8n (1 minuto)
```
https://jazm-io-production.up.railway.app/n8n/

¿Ves el panel de n8n (logo visible, no pantalla en blanco)?
   - SÍ ✅ → Sistema está OK ✅✅✅
   - NO ❌ → Ve a TROUBLESHOOTING
```

---

### ✅ Paso 5: Opcional - Valida Evolution API (30 segundos)
```
https://jazm-io-production.up.railway.app/evolution/health

¿Responde con JSON?
   - SÍ ✅ → Excelente
   - NO ⚠️ → No crítico, pero anótalo
```

---

## 🎯 RESULTADO ESPERADO

```
✅ Frontend carga
✅ Status endpoint responde "healthy"
✅ n8n panel abre
✅ Evolution API responde (opcional)

→ SISTEMA OPERATIVO ✅✅✅
```

---

## 🆘 TROUBLESHOOTING RÁPIDO

### Problema 1: Railway build sigue "Pending"
**Solución:** Espera 2-3 minutos. Si sigue, haz click en "Redeploy"

### Problema 2: Frontend no carga / Pantalla en blanco
**Solución:**
1. Abre F12 → Network
2. Busca assets con error 404
3. Si ves errores CORS → Refrescar (Ctrl+Shift+R)
4. Si persiste → Código tiene bug, contacta dev

### Problema 3: n8n dice "Cannot GET /n8n"
**Solución:** Nginx config está mal
→ Ve al documento LARGO, sección "Error: Cannot GET /n8n"

### Problema 4: n8n carga pero está vacío (pantalla en blanco)
**Solución:**
1. Abre DevTools (F12)
2. Busca errores en Console
3. Si dice "Could not decrypt credentials" → CRITICAL, rebuild necesario
4. Si dice 502 Bad Gateway → Nginx/n8n timeout

### Problema 5: El status dice "unhealthy"
**Solución:** Algo está down
→ Mira Railway logs (botón "Logs" en Dashboard)
→ Busca palabras clave: ERROR, FATAL, Exception

---

## 📊 ESTADO RÁPIDO

| Componente | URL | Esperado |
|------------|-----|----------|
| **Railway Build** | Dashboard | 🟢 ACTIVE |
| **Frontend** | `/` | 🟢 Carga HTML |
| **Health** | `/status` | 🟢 `{"status":"healthy"}` |
| **n8n** | `/n8n/` | 🟢 Panel visible |
| **WhatsApp** | `/evolution/health` | 🟡 Opcional |

---

## 🔑 NÚMEROS CRÍTICOS A RECORDAR

- **Encryption Key:** `nexus_secret_key` (NO CAMBIAR)
- **Base URL n8n:** Debe terminar en `/n8n/` (con barra)
- **Puerto contenedor:** `7860`
- **Puerto n8n interno:** `3100`
- **BD:** Supabase PostgreSQL (AWS West 2)

---

## 📞 Si Todo Falla

1. Captura screenshot de los errores
2. Ve a documento LARGO (INSTRUCCIONES_JAZM_IO_DIAGNOSTICO_COMPLETO.md)
3. Sigue los pasos de diagnóstico detallados
4. Si no se resuelve → Escala con logs

---

**¿Listo? ¡Empieza por Paso 1! ⚡**
