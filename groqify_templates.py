import json
import os

TEMPLATES_DIR = 'n8n_templates'
GROQ_MODEL = 'llama-3.3-70b-versatile'

def groqify(json_data):
    nodes = json_data.get('nodes', [])
    for node in nodes:
        # Check if it's an OpenAI node
        if node.get('type') == '@n8n/n8n-nodes-langchain.lmChatOpenAi':
            print(f"Updating node: {node.get('name')}")
            # Change type to Groq
            node['type'] = '@n8n/n8n-nodes-langchain.lmChatGroq'
            # Update model
            if 'parameters' in node:
                node['parameters']['model'] = GROQ_MODEL
            # Update credentials key
            if 'credentials' in node:
                if 'openAiApi' in node['credentials']:
                    # Rename credential key
                    node['credentials']['groqApi'] = node['credentials'].pop('openAiApi')
                    node['credentials']['groqApi']['name'] = 'Groq API (Costo Cero)'
        
        # Check for other AI providers to swap with Groq if needed
        elif node.get('type') in ['@n8n/n8n-nodes-langchain.lmChatAnthropic', '@n8n/n8n-nodes-langchain.lmChatGoogleGemini']:
            print(f"Swapping {node.get('type')} node for Groq: {node.get('name')}")
            node['type'] = '@n8n/n8n-nodes-langchain.lmChatGroq'
            if 'parameters' in node:
                node['parameters']['model'] = GROQ_MODEL
            if 'credentials' in node:
                # Clear other credentials and add Groq
                node['credentials'] = {
                    'groqApi': {'id': 'placeholder', 'name': 'Groq API (Costo Cero)'}
                }

    return json_data

def process_all():
    if not os.path.exists(TEMPLATES_DIR):
        print("Templates directory not found")
        return

    for filename in os.listdir(TEMPLATES_DIR):
        if filename.endswith('.json'):
            filepath = os.path.join(TEMPLATES_DIR, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                try:
                    data = json.load(f)
                    updated_data = groqify(data)
                    with open(filepath, 'w', encoding='utf-8') as wf:
                        json.dump(updated_data, wf, indent=2, ensure_ascii=False)
                    print(f"Processed: {filename}")
                except Exception as e:
                    print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    process_all()
