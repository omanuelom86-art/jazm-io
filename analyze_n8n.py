import json

file_path = r"c:\Jazmio servidor Hunnging\n8n_templates\WhatsApp_AI_Responder.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print("Nodes in flow:")
for idx, node in enumerate(data.get("nodes", [])):
    print(f"[{idx}] {node.get('name')} - Type: {node.get('type')}")
    
# Fix WhatsAppSetup.tsx
tsx_path = r"c:\Jazmio servidor Hunnging\jazm-io\src\pages\WhatsAppSetup.tsx"
with open(tsx_path, "r", encoding="utf-8") as f:
    tsx = f.read()

# 1. Add webhookUrl to evoConfig state
tsx = tsx.replace("const [evoConfig, setEvoConfig] = useState({ url: '', key: '' })", 
                  "const [evoConfig, setEvoConfig] = useState({ url: '', key: '', webhookUrl: '' })")

# 2. Extract webhookUrl when loading config
old_cfg = "setEvoConfig({ url: parsed.evolutionUrl || '', key: parsed.evolutionKey || '' })"
new_cfg = "setEvoConfig({ url: parsed.evolutionUrl || '', key: parsed.evolutionKey || '', webhookUrl: parsed.webhookUrl || '' })"
tsx = tsx.replace(old_cfg, new_cfg)

# 3. Use webhookUrl in Evolution API payload
old_body = "body: JSON.stringify({ instanceName: dbInstanceName, qrcode: true, webhook: '', integration: 'WHATSAPP-BAILEYS' })"
new_body = "body: JSON.stringify({ instanceName: dbInstanceName, qrcode: true, webhook: evoConfig.webhookUrl, webhook_wa_business: evoConfig.webhookUrl, webhook_wa_baileys: evoConfig.webhookUrl, integration: 'WHATSAPP-BAILEYS' })"
tsx = tsx.replace(old_body, new_body)

with open(tsx_path, "w", encoding="utf-8") as f:
    f.write(tsx)
    
print("WhatsAppSetup.tsx patched with Webhook!")
