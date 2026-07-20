saltos = [
    {"id": 1, "altura": 1500, "viento": 20},
    {"id": 2, "altura": 800, "viento": 10},
    {"id": 3, "altura": 2000, "viento": 35},
    {"id": 4, "altura": 1200, "viento": 15}
]

print("Reporte de seguridad para saltos:")

for salto in saltos:
    es_altura_correcta = salto["altura"] >= 1000
    es_viento_correcto = salto["viento"] <= 30
    
    if es_altura_correcta and es_viento_correcto:
        estado = "Apto"
    else:
        estado = "Cancelado"
        
    print(f"Salto {salto['id']}: {estado} (Altura: {salto['altura']}m, Viento: {salto['viento']}km/h)")