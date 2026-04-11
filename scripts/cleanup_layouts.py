import os
import re

pages_dir = r"c:\JAZM.IO Personal\JAZMIO_CRM_FINAL\src\pages"

def refactor_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to extract the content INSIDE <main>
    main_match = re.search(r'<main.*?>(.*?)</main>', content, re.DOTALL)
    
    if not main_match:
        # Fallback to identify anything inside the return(...) if main is not found
        content_match = re.search(r'return\s*\(\s*(.*?)\s*\);', content, re.DOTALL)
        if content_match:
            main_content = content_match.group(1)
        else:
            print(f"Skipping {filepath}: No suitable content found")
            return
    else:
        main_content = main_match.group(1)
    
    # Remove the fixed header/Dynamic Island if it's inside <main> or near it
    # Pages have: <header class="fixed top-4 ...">...</header>
    main_content = re.sub(r'<header.*?>.*?</header>', '', main_content, flags=re.DOTALL)
    
    # Remove the mobile nav if it's inside main or at the end
    main_content = re.sub(r'<nav class="md:hidden.*?>.*?</nav>', '', main_content, flags=re.DOTALL)

    # Wrap the main content in a fragment or a simple div
    # And ensure we keep the imports (some pages might have specific ones)
    
    component_name = os.path.basename(filepath).replace(".tsx", "")
    
    # Keep imports at the top
    imports_match = re.findall(r'^import.*$', content, re.MULTILINE)
    imports = "\n".join(imports_match)
    
    # If no imports found, at least keep React
    if "import React" not in imports:
        imports = "import React from 'react';\n" + imports

    new_content = f"""{imports}

const {component_name}: React.FC = () => {{
    return (
        <div className="w-full">
            {main_content}
        </div>
    );
}};

export default {component_name};
"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Refactored {component_name}")

for filename in os.listdir(pages_dir):
    if filename.endswith(".tsx") and filename != "Page_jazm_io_ingreso.tsx":
        refactor_file(os.path.join(pages_dir, filename))
