import os
import json
import urllib.request
import urllib.parse
import time

API_KEY = "YOUR_API_KEY"
USERNAME = "stefani-sanchez"
BASE_DIR = r"c:\Users\artur\OneDrive\Escritorio\campuslands-dev-logica"

def call_gemini_api(prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={API_KEY}"
    headers = {'Content-Type': 'application/json'}
    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.2,
            "responseMimeType": "application/json"
        }
    }
    req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode('utf-8'))
    try:
        with urllib.request.urlopen(req) as response:
            res_body = response.read()
            res_json = json.loads(res_body)
            content = res_json['candidates'][0]['content']['parts'][0]['text']
            return content
    except Exception as e:
        print(f"Error calling API: {e}")
        return None

def process_exercise(ex_path, ex_name):
    print(f"Procesando {ex_name}...")
    readme_path = os.path.join(ex_path, "README.md")
    
    if not os.path.exists(readme_path):
        print(f"  No se encontro README en {ex_path}")
        return
        
    with open(readme_path, "r", encoding="utf-8") as f:
        readme_content = f.read()
        
    prompt = f"""
Eres un estudiante llamado {USERNAME} resolviendo un ejercicio de logica. 
Aqui esta el README del ejercicio:
{readme_content}

Instrucciones:
1. Genera el codigo JavaScript que resuelve el ejercicio de forma logica y generica. Usa variables en espanol, condicionales y ciclos segun aplique.
2. Genera un README.md en Markdown que explique: Como pensaste el problema, Que reglas aplicaste, Como ejecutar o revisar tu solucion, y Que casos probaste.

ESTRUCTURA DE RESPUESTA OBLIGATORIA:
Debes responder UNICAMENTE con un objeto JSON valido con dos propiedades:
"codigo_js": El string con el codigo JavaScript.
"readme_md": El string con el contenido del README.md.
No incluyas nada mas fuera del JSON.
"""
    
    response_text = call_gemini_api(prompt)
    if not response_text:
        print("  Fallo la respuesta de la API.")
        return
        
    try:
        cleaned_text = response_text.strip()
        if cleaned_text.startswith("```json"):
            cleaned_text = cleaned_text[7:]
        elif cleaned_text.startswith("```"):
            cleaned_text = cleaned_text[3:]
        if cleaned_text.endswith("```"):
            cleaned_text = cleaned_text[:-3]
        cleaned_text = cleaned_text.strip()
        data = json.loads(cleaned_text)
    except Exception as e:
        print(f"  Error parseando JSON: {e}")
        return
        
    js_code = data.get("codigo_js", "")
    md_code = data.get("readme_md", "")
    
    # Crear directorio de resolucion
    resolucion_dir = os.path.join(ex_path, "resoluciones", USERNAME)
    os.makedirs(resolucion_dir, exist_ok=True)
    
    js_path = os.path.join(resolucion_dir, f"{USERNAME}.js")
    md_path = os.path.join(resolucion_dir, "README.md")
    
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_code)
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md_code)
        
    print(f"  Completado: {ex_name}")
    # Pausa para no saturar la API
    time.sleep(3)

def main():
    # Logica matematica 51 al 70
    math_dir = os.path.join(BASE_DIR, "logica-matematica")
    for i in range(51, 71):
        ex_name = f"ejercicio-{i:03d}"
        ex_path = os.path.join(math_dir, ex_name)
        if os.path.exists(ex_path):
            process_exercise(ex_path, ex_name)
            
    # Logica general 5 al 70
    gen_dir = os.path.join(BASE_DIR, "logica-general")
    for i in range(5, 71):
        ex_name = f"ejercicio-{i:03d}"
        ex_path = os.path.join(gen_dir, ex_name)
        if os.path.exists(ex_path):
            process_exercise(ex_path, ex_name)

if __name__ == "__main__":
    main()
