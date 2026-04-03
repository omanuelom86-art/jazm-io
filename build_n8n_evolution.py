import json

flow = {
  "name": "Evolution API - Enrutador CRM y Auto-Leads",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "evolution_webhook",
        "options": {}
      },
      "id": "1",
      "name": "Webhook Evolution API",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [0, 0]
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $json.body.event }}",
              "value2": "messages.upsert"
            }
          ]
        }
      },
      "id": "2",
      "name": "IF Message?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [200, 0]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT * FROM public.whatsapp_instances WHERE instance_name = $1 LIMIT 1;",
        "options": {
          "queryParameters": "={{ $json.body.instance }}"
        }
      },
      "id": "3",
      "name": "Supabase: Buscar Configuracion Instancia",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.3,
      "position": [400, -100]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT id FROM public.contacts WHERE phone = $1 LIMIT 1;",
        "options": {
          "queryParameters": "={{ $('IF Message?').item.json.body.data.message.remoteJid.split('@')[0] }}"
        }
      },
      "id": "4",
      "name": "Supabase: Buscar Contacto Existente",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.3,
      "position": [600, -100]
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ $json.id ? true : false }}",
              "value2": True
            }
          ]
        }
      },
      "id": "5",
      "name": "IF Contact Exists?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [800, -100]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "INSERT INTO public.contacts (id, name, phone, company_id) VALUES (gen_random_uuid(), $1, $2, $3) RETURNING id;",
        "options": {
          "queryParameters": "={{ $('IF Message?').item.json.body.data.message.pushName || 'Desconocido' }},{{ $('IF Message?').item.json.body.data.message.remoteJid.split('@')[0] }},{{ $('Supabase: Buscar Configuracion Instancia').item.json.company_id }}"
        }
      },
      "id": "6",
      "name": "Supabase: Crear Contacto",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.3,
      "position": [1000, 50]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "INSERT INTO public.deals (id, title, pipeline_id, stage_id, assigned_to, contact_id, company_id) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6) RETURNING id;",
        "options": {
          "queryParameters": "={{ 'Lead de WhatsApp - ' + $('IF Message?').item.json.body.data.message.pushName }},{{ $('Supabase: Buscar Configuracion Instancia').item.json.pipeline_id }},{{ $('Supabase: Buscar Configuracion Instancia').item.json.stage_id }},{{ $('Supabase: Buscar Configuracion Instancia').item.json.assigned_to }},{{ $('IF Contact Exists?').item.json.id || $('Supabase: Crear Contacto').item.json.id }},{{ $('Supabase: Buscar Configuracion Instancia').item.json.company_id }}"
        }
      },
      "id": "7",
      "name": "Supabase: Crear Lead/Deal",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.3,
      "position": [1300, -100]
    }
  ],
  "connections": {
    "Webhook Evolution API": {
      "main": [
        [
          {
            "node": "IF Message?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "IF Message?": {
      "main": [
        [
          {
            "node": "Supabase: Buscar Configuracion Instancia",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Supabase: Buscar Configuracion Instancia": {
      "main": [
        [
          {
            "node": "Supabase: Buscar Contacto Existente",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Supabase: Buscar Contacto Existente": {
      "main": [
        [
          {
            "node": "IF Contact Exists?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "IF Contact Exists?": {
      "main": [
        [
          {
            "node": "Supabase: Crear Lead/Deal",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Supabase: Crear Contacto",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Supabase: Crear Contacto": {
      "main": [
        [
          {
            "node": "Supabase: Crear Lead/Deal",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {}
}

import os
target_dir = r"c:\Jazmio servidor Hunnging\n8n_templates"
if not os.path.exists(target_dir):
    os.makedirs(target_dir)
with open(os.path.join(target_dir, "Evolution_Router_Flow.json"), "w", encoding="utf-8") as f:
    json.dump(flow, f, indent=2)
print("Flow Evolution_Router_Flow.json created successfully.")
