import os
import subprocess
import socket
import time
import datetime

def check_port(host, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((host, port))
    sock.close()
    return result == 0

def run_diag():
    output = []
    output.append(f"Nexus Diagnostics - {datetime.datetime.now()}")
    output.append("-" * 30)
    
    # Process check
    try:
        ps = subprocess.getoutput("ps aux")
        output.append("Process list (partial):")
        output.append(ps)
    except Exception as e:
        output.append(f"Error checking processes: {e}")

    # Port check
    output.append(f"Port 8080 (Evolution): {check_port('127.0.0.1', 8080)}")
    output.append(f"Port 5678 (n8n): {check_port('127.0.0.1', 5678)}")
    output.append(f"Port 7860 (Nginx): {check_port('127.0.0.1', 7860)}")

    # Evolution Main JS search
    output.append("Looking for Evolution main.js:")
    try:
        find_out = subprocess.getoutput("find /evolution -name main.js")
        output.append(find_out)
    except Exception as e:
        output.append(f"Error finding main.js: {e}")

    # Supervisor log
    output.append("Supervisor Log (last 20 lines):")
    try:
        if os.path.exists("/tmp/supervisord.log"):
            with open("/tmp/supervisord.log", "r") as f:
                lines = f.readlines()
                output.append("".join(lines[-20:]))
        else:
            output.append("/tmp/supervisord.log not found")
    except Exception as e:
        output.append(f"Error reading supervisor log: {e}")

    # Check /opt/nexus/web content
    output.append("Web directory content:")
    try:
        ls_web = subprocess.getoutput("ls -la /opt/nexus/web")
        output.append(ls_web)
    except Exception as e:
        output.append(f"Error checking web dir: {e}")

    # Save to file
    try:
        with open("/opt/nexus/web/diag.txt", "w") as f:
            f.write("\n".join(output))
    except Exception as e:
        print(f"Error writing diag: {e}")

if __name__ == "__main__":
    while True:
        run_diag()
        time.sleep(30)
