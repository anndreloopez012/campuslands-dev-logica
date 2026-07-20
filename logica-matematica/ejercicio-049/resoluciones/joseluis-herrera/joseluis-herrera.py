escenas = [
    {"minuto": 5, "intensidad": 6},
    {"minuto": 10, "intensidad": 9},
    {"minuto": 3, "intensidad": 8},
    {"minuto": 15, "intensidad": 4},
    {"minuto": 7, "intensidad": 5}
]

def programar_eventos(lista):
    lista_ordenada = sorted(lista, key=lambda x: x['minuto'])
    programacion = []
    
    for e in lista_ordenada:
        tipo = "Ninguno"
        
        if e['minuto'] % 10 == 0:
            tipo = "Pánico"
        elif e['minuto'] % 5 == 0:
            tipo = "Tensión"
        elif e['minuto'] % 2 != 0 and e['intensidad'] > 7:
            tipo = "Susto Ligero"
            
        programacion.append({"minuto": e['minuto'], "evento": tipo})
        
    return programacion

resultado = programar_eventos(escenas)

for r in resultado:
    print(f"Minuto {r['minuto']}: Evento programado -> {r['evento']}")