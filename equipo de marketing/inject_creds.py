import requests
import json

# JAZMIO CREDENTIAL INJECTOR v2.0 - PLAN ZEUS
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZGQwNWI5OS1mNmQxLTQ5N2QtYWMwOC0wNzg4MmNlZjdhNzciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzc1Mjc5OTIxLCJleHAiOjE3ODMwNTEyMDB9.cdKpbFNHhT4kn09rH8iQHlafaZ0cZUx6eWayVHI4Qpo"
BASE_URL = "https://jazm-io-production.up.railway.app/api/v1/credentials"

headers = {
    "X-N8N-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def inject():
    creds = [
        {
            "name": "Google Gemini JAZMIO",
            "type": "googleGeminiChatApi",
            "data": {"apiKey": "AIzaSyBvpj5nexqdDYooUmqux9lId_1iS_WpTZ8"}
        },
        {
            "name": "Mistral AI JAZMIO",
            "type": "mistralApi",
            "data": {"apiKey": "5JH4ZFcb07BAaCJl625WK7DigLiFyqsG"}
        },
        {
            "name": "OpenRouter JAZMIO",
            "type": "openAiApi",
            "data": {
                "apiKey": "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",
                "url": "https://openrouter.ai/api/v1"
            }
        }
    ]
    
    for c in creds:
        print(f"📦 Inyectando Credencial: {c['name']}")
        try:
            r = requests.post(BASE_URL, headers=headers, json=c)
            if r.status_code in [200, 201]:
                print(f"✅ ÉXITO: {c['name']} inyectada.")
            else:
                print(f"⚠️ ERROR en {c['name']}: {r.status_code} - {r.text}")
        except Exception as e:
            print(f"❌ FALLO CRÍTICO en {c['name']}: {e}")

if __name__ == "__main__":
    inject()
