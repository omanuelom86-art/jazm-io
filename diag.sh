#!/bin/bash
# Simple diagnostic tool in bash
LOG_FILE="/opt/nexus/web/diag.txt"

check_port() {
    (echo > /dev/tcp/127.0.0.1/$1) >/dev/null 2>&1
    return $?
}

while true; do
  echo "--- NEXUS DIAGNOSTICS $(date) ---" > "$LOG_FILE"
  echo "Port 8080 (Evolution): $(check_port 8080 && echo 'OPEN' || echo 'CLOSED')" >> "$LOG_FILE"
  echo "Port 5678 (n8n): $(check_port 5678 && echo 'OPEN' || echo 'CLOSED')" >> "$LOG_FILE"
  echo "Port 7860 (Nginx): $(check_port 7860 && echo 'OPEN' || echo 'CLOSED')" >> "$LOG_FILE"
  echo "" >> "$LOG_FILE"
  echo "Recent process logs (Supervisor):" >> "$LOG_FILE"
  tail -n 20 /tmp/supervisord.log >> "$LOG_FILE"
  echo "" >> "$LOG_FILE"
  echo "Evolution Main Search:" >> "$LOG_FILE"
  find /evolution -name main.js | grep -v "node_modules" >> "$LOG_FILE"
  echo "" >> "$LOG_FILE"
  echo "Process status:" >> "$LOG_FILE"
  ps aux >> "$LOG_FILE"
  sleep 30
done
