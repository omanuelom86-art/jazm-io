import urllib.request
import socket

def check_port(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(1)
        return s.connect_ex(('127.0.0.1', port)) == 0

def check_url(url):
    try:
        with urllib.request.urlopen(url, timeout=2) as r:
            return r.status
    except Exception as e:
        return str(e)

print(f"Port 8080 (Evolution): {check_port(8080)}")
print(f"Port 5678 (n8n): {check_port(5678)}")
print(f"Port 7860 (Nginx): {check_port(7860)}")
print(f"Evolution URL (local): {check_url('http://127.0.0.1:8080/')}")
print(f"n8n URL (local): {check_url('http://127.0.0.1:5678/')}")
print(f"n8n subpath (local): {check_url('http://127.0.0.1:5678/n8n/')}")
