import urllib.request
import urllib.error
import json

url = "https://htabdguydyysolkzdilm.supabase.co/auth/v1/token?grant_type=password"
data = json.dumps({"email": "omanuelom86@gmail.com", "password": "Nexus2026*"}).encode('utf-8')
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0YWJkZ3V5ZHl5c29sa3pkaWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NDA1MTgsImV4cCI6MjA4OTQxNjUxOH0.dvpLpfu7ApFmX6p8DlAavy2M6dsEOLYccnnf3V7VSNs",
    "Content-Type": "application/json"
}
req = urllib.request.Request(url, data=data, headers=headers, method='POST')

try:
    response = urllib.request.urlopen(req)
    print("Success:", response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print(f"Error {e.code}: {e.read().decode('utf-8')}")
except Exception as e:
    print(f"Exception: {e}")
