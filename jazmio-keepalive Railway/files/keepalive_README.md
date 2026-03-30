# Jazmio Keepalive 🚀

Mini servicio que mantiene despiertos los Spaces de Hugging Face haciendo ping automático.

## Despliegue en Railway

1. Crea un nuevo proyecto en Railway
2. Conecta este repositorio (o sube los 2 archivos: app.py + Dockerfile)
3. Agrega estas variables de entorno en Railway:

| Variable | Valor |
|---|---|
| `HF_SPACE_URL` | `https://info86-new-espacio-jazmio.hf.space` |
| `PING_INTERVAL` | `240` (cada 4 minutos) |

4. Railway despliega automáticamente

## Dashboard

Una vez desplegado, abre la URL de Railway y verás el monitor en tiempo real:
- Timestamp de cada ping
- Status HTTP
- Latencia en ms
- Auto-refresh cada 30 segundos

## Agregar más Spaces

Edita el array `TARGETS` en `app.py` para agregar más URLs a monitorear.

## Costo en Railway

Esta app consume ~5MB RAM y prácticamente nada de CPU.
Costo estimado: **$0.10/mes** — casi nada del crédito gratuito.
