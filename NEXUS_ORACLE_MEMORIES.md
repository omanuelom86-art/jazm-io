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

---

### 🛠️ COMANDOS DE CONSULTA (EL AGENTE NEXUS ORACLE)

Si el sistema falla, contacta con tu Agente IA y dile: **"Consulta el Manual del Oráculo de Nexus"**.

---
> **"Un error es una lección; un error repetido es una negligencia."** — El Oráculo.
