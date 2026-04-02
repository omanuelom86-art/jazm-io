# 🛡️ Nexus Server Infrastructure: Fuente de la Verdad

Este documento contiene la configuración maestra y las lecciones aprendidas para evitar errores en el futuro. **NO cambiar estas configuraciones sin entender el motivo técnico.**

## 1. 🗄️ Base de Datos (Supabase)

Para que el servidor funcione en **Hugging Face Spaces (HF)**, la conexión DEBE ser **IPv4 Compatible**.

* **Método**: Session Pooler (NO Direct Connection, NO Transaction Pooler solo).
* **Host**: `aws-0-us-west-2.pooler.supabase.com`
* **Puerto**: `5432`
* **Usuario**: `postgres.htabdguydyysolkzdilm`
* **Base de datos**: `postgres`
* **Esquema de la API**: `evolution_api`
* **URI Maestra**: `postgresql://postgres.htabdguydyysolkzdilm:%2AMm0101mM%2A%2A%2A%2A@aws-0-us-west-2.pooler.supabase.com:5432/postgres?schema=evolution_api`

> [!IMPORTANT]
> **Por qué Puerto 5432?**: El puerto 6543 (Transaction Pooler) a veces da problemas con la persistencia de Evolution API. El puerto 5432 (Session Pooler) es más estable y es el que Supabase marca como "IPv4 Compatible" en tus capturas.

---

## 2. 🚀 Configuración de Procesos (Supervisor)

* **Escapado de caracteres**: NO usar doble `%` (como `%%2A`) en la URI de `supervisord.conf`. Usar el carácter limpio `*` o un solo escape si es necesario.
* **Prioridad**:
    1. `reset-login`: Arregla el acceso del usuario admin.
    2. `evolution`: Motor de WhatsApp.
    3. `n8n`: Automatización.
    4. `nginx`: Puerta de enlace.

---

## 3. 🌐 Red y Proxy (Nginx)

Para evitar errores de "White Screen" en n8n y Evolution:

* **Headers**: Usar `proxy_http_version 1.1;`, `Upgrade $http_upgrade` y `Connection "upgrade"`.
* **🚀 Regla de Oro (n8n Fix)**: El `proxy_pass` para `/n8n/` en `nginx.conf` debe apuntar al puerto **3100**. Ejemplo: `proxy_pass http://127.0.0.1:3100;`
* **Sub-ruta**: El `N8N_PATH` debe ser `/n8n/` (obligatorio para aislamiento de Cookies).
* **⚠️ SSL Error Fix**: El protocolo interno DEBE ser `http` (no `https`) para evitar el error `ERR_CERT_AUTHORITY_INVALID`.

---

## 4. 🧠 Nexus Agentic Strategy (v11.0)

Hemos evolucionado de un CRM estándar a un ecosistema de **IA Agéntica** basado en los estándares de Google Antigravity.

* **Marketing AI Hub**: +14 habilidades expertas (Auditoría, Copy, SEO, Ads).
* **n8n Expert Skills**: 7 capas de conocimiento para que la IA construya flujos n8n.
* **GWS CLI**: Capacidad nativa para que el bot controle Google Drive/Sheets.
* **OpenGravity**: El agente opera con un alto nivel de iniciativa y resolución autónoma.

---

## 4. 🔑 Credenciales Maestras (Verificadas)

* **Admin Email**: `[Tu Email Real]`
* **Admin Password**: `[TU_CONTRASEÑA_DEL_ENV]`
* **n8n User**: `[El mismo que admin]`
* **n8n Password**: `[TU_CONTRASEÑA_DEL_ENV]`
* **Evolution API Key**: `[LA_API_KEY_DEL_ENV]`
* **Groq API Key**: `[LA_API_KEY_DEL_ENV]`
* **Apify Token**: `[LA_API_KEY_DEL_ENV]`
* **Supabase Actual**: `htabdguydyysolkzdilm` (AWS West 2 Pooler)

---

## 5. 🛠️ Comandos de Mantenimiento

1. Logs: `tail -f /opt/nexus/web/evolution_stdout.log`
2. Diagnóstico: `./diag.sh`
3. Web Debug: `/debug-logs` en el navegador.
4. **n8n Groqify**: `python groqify_templates.py` (Convierte plantillas OpenAI a Groq)

---

## 6. 💤 Hibernación (Hugging Face)

Si el Space está en el **Free Tier**, se dormirá tras 48h de inactividad.

* **Keepalive Interno**: El script `keepalive.py` intenta simular tráfico, pero HF a veces lo detecta como interno.
* **Solución Recomendada**: Configurar un monitor externo en [UptimeRobot](https://uptimerobot.com) apuntando a `https://info86-new-espacio-jazmio.hf.space/api/status` cada 5 minutos.
* **Auto-Sanación**: El sistema detecta errores 502/504 en n8n/Evolution y reinicia los servicios automáticamente vía Supervisor.

---

Documento actualizado el 22 de marzo de 2026 para incluir la gestión de hibernación.
