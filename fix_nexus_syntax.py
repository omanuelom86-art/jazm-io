import os

path = r"c:\Jazmio servidor Hunnging\jazm-io\src\pages\NexusAIConfig.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# 1. Add viewQr state inside component
for i, line in enumerate(lines):
    if "const [editAiAgentId, setEditAiAgentId]" in line:
        lines.insert(i + 1, "  const [viewQr, setViewQr] = useState<boolean>(false)\n")
        break

# 2. Remove bottom global state
lines = [l for l in lines if "// global scope states for viewQr" not in l and "const [viewQr, setViewQr] = useState<boolean>(false)" not in l or "  const [viewQr, setViewQr] =" in l]

with open(path, "w", encoding="utf-8") as f:
    f.writelines(lines)
    
print("Syntax fixed in NexusAIConfig.tsx")
