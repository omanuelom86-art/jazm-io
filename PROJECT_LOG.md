# 📖 Log de Cambios y Seguimiento del Proyecto

Este archivo registra la evolución del servidor Nexus y las decisiones críticas tomadas para evitar repetir errores.

## 📅 24 de Marzo, 2026 - Nexus Repair: n8n Persistence & RLS Fix

### 🚨 Acciones de emergencia

1. **Migración n8n a Postgres**: Configuración de `n8n` en `supervisord.conf` para usar Supabase. Esto evita el reseteo de flujos al reiniciar.
2. **Corrección de RLS**: Actualización de políticas en `public.profiles` para permitir acceso total al rol `admin`. Esto soluciona el "Database error querying schema".
3. **Sincronización de Esquema**: Aplicación forzada de `fix_rls_and_n8n.sql` para asegurar la estructura de la base de datos.

### 🛠️ Archivos Actualizados

- `supervisord.conf`: Añadidas variables `DB_TYPE=postgresdb`, etc.
- `schema_setup.sql`: Actualización de políticas RLS.
- `PROJECT_LOG.md`: Este registro.

---


## 📅 22 de Marzo, 2026 - Nexus Keepalive V4 (Self-Heal & DB Check)

### 🚨 Problemas Corregidos

1. **Hibernación Agresiva**: Implementado Keepalive V4 con verificación de base de datos Supabase.
2. **Auto-Sanación**: El sistema ahora detecta errores 5xx en n8n/Evolution y los reinicia automáticamente vía Supervisor.
3. **Monitoreo Transparente**: Actualización del dashboard de estado para reflejar las correcciones de hibernación.

### 🛠️ Archivos Actualizados

- `keepalive.py`: Mejora de lógica con pings externos simulados y checks de DB.
- `status.py`: Actualización de versión a `AUDIT-FIX-2026-03-22-17-00-SLEEP-FIX`.
- `INFRASTRUCTURE_TRUTH.md`: Añadida sección de Hibernación y UptimeRobot.

---

## 📅 22 de Marzo, 2026 - Nexus Keepalive V3 + Fix MIME n8n

### 🚨 Problemas Corregidos

1. **Hibernación de HF**: Implementado Keepalive V3 con simulador de tráfico externo.
2. **n8n Assets**: Corregido error de assets en n8n mediante `sub_filter` en Nginx.
3. **WhatsApp Web**: Añadido soporte para reescritura de rutas en Evolution API.

### 🛠️ Archivos Actualizados

- `.env`: URL de base de datos actualizada.
- `nginx.conf`: Soporte de WebSockets y rutas corregidas.
- `supervisord.conf`: Limpieza de variables de entorno y escapes.
- `start_evolution.sh`: Sincronización con la nueva URI de base de datos.
- `force_setup_admin.py`: Actualización del fallback de conexión.
- `Dockerfile`: Permisos de carpetas `/run/nginx` y `/var/log/nginx`.
- `create_admin_user.py`: Sincronización de credenciales y host.
- `verify_db.py`: Sincronización de host.

### 📌 Decisiones Técnicas Clave

- **Usuario Admin**: El correo `omanuelom86@gmail.com` es el dueño del sistema. El password maestro es `Nexus2026*`.
- **Esquema**: La API siempre debe usar el esquema `evolution_api`.
- **Infraestructura**: Se mantiene Alpine Linux por rendimiento, asegurando compatibilidad con `apk add`.

---

## 🚦 Futuro: Reglas de Oro

1. **NUNCA** volver al puerto 6543 si el sistema se ejecuta en Hugging Face.
2. **SIEMPRE** verificar diagnósticos con `/debug-logs`.
3. **REVISAR** que los WebSockets estén activos en el navegador si algo no carga.

## 📅 21 de Marzo, 2026 - Fase de Estabilización

### 🛠️ Mejoras de Robustez Aplicadas

1. **Local Redis Server**: Se integró `redis-server` dentro del contenedor para eliminar el error "redis disconnected" de Evolution API.
2. **Corrección de Logs (Supervisor)**: Se desactivó la rotación de logs (`maxbytes=0`) para evitar errores de `Invalid seek` en entornos de solo lectura o pipes de Hugging Face.
3. **Sincronización Automática Prisma**: Se añadió `npx prisma db push` en `start_evolution.sh` para asegurar que las tablas (como `Instance`) se creen automáticamente si no existen.
4. **Limpieza de Scripts**: Sincronización final de `verify_db.py`, `apply_schema.py` y `create_admin_user.py` con el host de Session Pooler.

### 📌 Estado Actual

- **Redis**: Operativo localmente.
- **Log Rotation**: Desactivada para procesos `/dev/stdout`.
- **DB URI**: Consistente en todo el proyecto.
