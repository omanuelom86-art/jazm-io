# 🔮 NEXUS ORACLE: MEMORIA ETERNA DE INFRAESTRUCTURA JAZM.IO

## Estado del Sistema: Fortaleza SaaS de Alto Desempeño

Este documento es la "Caja Negra" y el "Manual de Guerra" de Jazm.io. Contiene la sabiduría acumulada de los rescates críticos para evitar la repetición de errores.

---

### ⚔️ REGISTRO DE BATALLAS Y SOLUCIONES MAESTRAS

#### 1. LA CRISIS DEL 502 (EL CONSERJE DORMIDO)

* **Error**: `502 Bad Gateway`.
* **Causa Real**: Nginx (el conserje) intentaba usar carpetas de Alpine Linux (`/var/lib/nginx`) que estaban bloqueadas por permisos en Railway.
* **Solución Maestra (Plan B 26.0)**:
  * Mudar todo a `/tmp/nginx/`.
  * Usar el prefijo `-p /tmp/nginx` al arrancar Nginx.
  * **LECCIÓN**: Nginx NUNCA debe tocar carpetas raíz en entornos de contenedores no-root.

#### 2. LA CRISIS DEL 403 (LA PUERTA CERRADA)

* **Error**: `403 Forbidden`.
* **Causa Real**: Los archivos del Dashboard Rosa no estaban en `/opt/nexus/web/` o no tenían permisos de lectura en la imagen construida.
* **Solución Maestra (Plan B 31.0)**:
  * Crear la carpeta `/opt/nexus/web/` explícitamente.
  * Mover `index.html`, `assets` y `manager` allí durante el build.
  * Aplicar `chmod -R 755 /opt/nexus/web`.
  * **LECCIÓN**: El frontend debe estar aislado y con permisos universales de lectura.

#### 3. LA CRISIS DEL ADN PYTHON (LIBRERÍAS FANTASMA)

* **Error**: `ModuleNotFoundError` o fallos de construcción `apk add`.
* **Causa Real**: Intentar instalar paquetes de Python vía Alpine (`apk`) que ya no existen o están desactualizados.
* **Solución Maestra (Plan B 25.0)**:
  * Usar `pip3 install --break-system-packages`.
  * Instalar `python-dotenv`, `fastapi`, `uvicorn` y `psycopg2-binary`.
  * **LECCIÓN**: En Alpine/Python 3.11+, usar siempre la bandera de fuerza para pip.

#### 4. LA CRISIS DE LOS LOGS (ILLEGAL SEEK)

* **Error**: `CRIT exception... Illegal seek`.
* **Causa Real**: Supervisor intentando escribir en pipes incorrectos de Railway sin el parámetro de límite.
* **Solución Maestra (Plan B 27.0)**:
  * Usar `stdout_logfile_maxbytes=0` en todos los procesos de Supervisord.
  * **LECCIÓN**: Estabilidad sobre volumen de logs.

#### 5. LA CRISIS DEL MIME TYPE (N8N EN SUBPATH)

* **Error**: Pantalla en blanco en `/n8n/`, errores de consola `Refused to apply style... MIME type ('text/html') is not a supported stylesheet`.
* **Causa Real**: El bloque `location /` del CRM capturaba las peticiones de assets de n8n (ej: `/n8n/assets/index.js`) y servía el `index.html` del CRM (fallback `try_files`) porque las reglas estándar de Nginx no tenían prioridad suficiente.
* **Solución Maestra (Plan B 45.0)**:
  * Usar `location ^~ /n8n/` para dar **PRIORIDAD ABSOLUTA** sobre el CRM.
  * Configurar `proxy_pass http://127.0.0.1:3100/;` (con slash final) para hacer el *strip prefix* automático de Nginx.
  * Definir `N8N_PATH` vacío o no definirlo (n8n corre en raíz `/` internamente) y avisarle su URL pública con `proxy_set_header X-Forwarded-Prefix /n8n`.
  * **LECCIÓN**: El operador `^~` es vital para aislar microservicios en subrutas cuando hay un fallback de Single Page Application (SPA) en la raíz.

#### 6. LA CRISIS DE WHATSAPP Y EL DOCKER PESADO (EVOLUTION API V2)

* **Error**: Evolution API se quedaba "conectando" y crasheaba en silencio pasados 10 segundos, no arrojaba QR. Además, al intentar actualizar, el build en Railway fallaba con: `Image of size 4.1 GB exceeded limit of 4.0 GB`.
* **Causa Real**:
    1. La imagen base del `Dockerfile` estaba apuntando a `atendai/evolution-api:latest`, un repositorio abandonado y obsoleto. Los protocolos de WhatsApp Web cambiaron, por lo que Baileys era rechazado inmediatamente al intentar crear la sesión.
    2. El nuevo repositorio, `evoapicloud/evolution-api:latest`, es mucho más pesado y excedía el límite gratuito de Railway de 4.0 GB.
    3. Hubo caracteres invisibles UTF-16 inyectados en `.dockerignore` al usar `echo` en terminales de Windows.
* **Solución Maestra (Plan B 60.0)**:
  * Sustituir la imagen base por `FROM evoapicloud/evolution-api:latest`.
  * **Dieta Estricta de Docker**: Utilizar el patrón de Alpine `--virtual .build-deps` para instalar `gcc`, `python3-dev`, y `musl-dev` DE FORMA TEMPORAL, instalar paquetes PIP (`psycopg2-binary`), y luego eliminar la capa de compiladores con `apk del .build-deps`. Esto ahorró más de 400 MB.
  * Asegurar que `.dockerignore` tenga codificación UTF-8 pura.
  * **LECCIÓN**: Los motores de WhatsApp caducan rápido y requieren su registro docker oficial actual. En entornos con límites de disco, los compiladores de C++ nunca deben permanecer en la imagen final.

---

### 🛠️ COMANDOS DE CONSULTA (EL AGENTE NEXUS ORACLE)

Si el sistema falla, contacta con tu Agente IA y dile: **"Consulta el Manual del Oráculo de Nexus"**.

---
> **"Un error es una lección; un error repetido es una negligencia."** — El Oráculo.
