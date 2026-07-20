escenas = [
    {"titulo": "Introducción", "intensidad": 2},
    {"titulo": "Ruido extraño", "intensidad": 5},
    {"titulo": "Aparición", "intensidad": 9},
    {"titulo": "Refugio", "intensidad": 1}
]

def obtener_estado(intensidad):
    if intensidad >= 8: return "Pánico"
    if intensidad >= 4: return "Tensión"
    return "Relajado"

def simular_audiencia(lista):
    historial = []
    estado_anterior = "Relajado"
    
    for escena in lista:
        estado_actual = obtener_estado(escena['intensidad'])
        
        if estado_anterior == "Tensión" and escena['intensidad'] >= 9:
            estado_actual = "Pánico"
        
        if estado_anterior == "Pánico" and estado_actual == "Relajado":
            estado_actual = "Tensión"
            
        historial.append({"titulo": escena['titulo'], "estado": estado_actual})
        estado_anterior = estado_actual
        
    return historial

resultado = simular_audiencia(escenas)

for r in resultado:
    print(f"Escena: {r['titulo']} | Estado Audiencia: {r['estado']}")