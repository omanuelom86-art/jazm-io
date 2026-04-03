import os
file_path = r"c:\Jazmio servidor Hunnging\jazm-io\src\pages\WhatsAppSetup.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

old_str = "body: JSON.stringify({ instanceName: dbInstanceName, qrcode: true, webhook: '', integration: 'WHATSAPP-BAILEYS' })"
new_str = "body: JSON.stringify({ instanceName: dbInstanceName, qrcode: true, webhook: evoConfig.url, webhook_wa_business: evoConfig.url, integration: 'WHATSAPP-BAILEYS' })"
# Actually the webhook should point to n8n webhook, which is in api_configurations
# wait, evoConfig has evoConfig.url but it DOES NOT have webhookUrl!
# In Settings.tsx, botConfig has webhookUrl. But in WhatsAppSetup.tsx I didn't load webhookUrl into evoConfig!
# So I must fix both: loading the webhookUrl and sending it.
