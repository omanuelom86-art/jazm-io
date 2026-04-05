# 🔮 NEXUS ORACLE: AGENTE DE CONSULTA DE MEMORIA INFRAESTRUCTURA
import sys
import os

MEMORY_FILE = "NEXUS_ORACLE_MEMORIES.md"

def consult_oracle(query=None):
    if not os.path.exists(MEMORY_FILE):
        print("🚨 Error: No se encuentra el Libro de Sabiduría (NEXUS_ORACLE_MEMORIES.md).")
        return

    with open(MEMORY_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    print("\n" + "="*60)
    print("🔮 EL ORÁCULO DE NEXUS RESPONDE:")
    print("="*60 + "\n")

    if not query:
        print("📖 CONSULTA GENERAL DEL MANUAL:")
        print(content)
    else:
        query = query.lower()
        found = False
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if query in line.lower():
                # Encontramos algo, mostramos el bloque
                print(f"✅ Sabiduría encontrada para '{query}':\n")
                start = max(0, i - 1)
                end = min(len(lines), i + 15) # Mostramos 15 líneas de contexto
                print('\n'.join(lines[start:end]))
                found = True
                break
        
        if not found:
            print(f"🔎 No encontré registros exactos para '{query}', pero recuerda los pilares de Jazmio:")
            print("- Nginx: Prefix /tmp/nginx/")
            print("- Root: /opt/nexus/web/")
            print("- Pip: --break-system-packages")

    print("\n" + "="*60 + "\n")

if __name__ == "__main__":
    q = ' '.join(sys.argv[1:]) if len(sys.argv) > 1 else None
    consult_oracle(q)
