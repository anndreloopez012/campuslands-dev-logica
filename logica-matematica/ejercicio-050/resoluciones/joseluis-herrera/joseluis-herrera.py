import math

paquetes = [
    {"destino": "París", "costo_usd": 850.50},
    {"destino": "Roma", "costo_usd": 1200.75},
    {"destino": "Londres", "costo_usd": 950.20}
]

def procesar_costos(lista):
    lista_ordenada = sorted(lista, key=lambda x: x['costo_usd'], reverse=True)
    resultado = []
    
    for p in lista_ordenada:
        valor_eur = p['costo_usd'] * 0.92
        impuesto = valor_eur * 0.125
        total_preciso = valor_eur + impuesto
        
        total_final = math.ceil(total_preciso)
        categoria = "Premium" if total_final >= 1000 else "Económico"
        
        resultado.append({
            "destino": p['destino'],
            "total": total_final,
            "categoria": categoria
        })
        
    return resultado

reporte = procesar_costos(paquetes)

for item in reporte:
    print(f"Destino: {item['destino']} | Total: {item['total']} EUR | Tipo: {item['categoria']}")