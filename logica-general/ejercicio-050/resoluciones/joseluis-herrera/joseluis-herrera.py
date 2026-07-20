itinerarios = [
    {"pais": "Japón", "visa_requerida": True, "visa_aprobada": True, "dias": 10},
    {"pais": "Brasil", "visa_requerida": False, "visa_aprobada": False, "dias": 2},
    {"pais": "Canadá", "visa_requerida": True, "visa_aprobada": False, "dias": 15},
    {"pais": "España", "visa_requerida": False, "visa_aprobada": False, "dias": 7}
]

def validar_itinerarios(lista):
    lista_ordenada = sorted(lista, key=lambda x: x['pais'])
    reporte = []
    
    for item in lista_ordenada:
        motivo = ""
        if item['visa_requerida'] and not item['visa_aprobada']:
            motivo = "Falta aprobación de visa"
        elif item['dias'] < 3 or item['dias'] > 21:
            motivo = "Duración fuera de rango"
        
        estado = "APROBADO" if motivo == "" else f"RECHAZADO: {motivo}"
        reporte.append({"pais": item['pais'], "estado": estado})
        
    return reporte

resultados = validar_itinerarios(itinerarios)

for r in resultados:
    print(f"País: {r['pais']} | {r['estado']}")