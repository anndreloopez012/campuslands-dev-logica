
def procesar_torneo(participantes, bono, penalizacion):
    # 1. Calcular promedio
    promedio = sum(participantes) / len(participantes)
    
    # 2. Calcular mediana
    lista_ordenada = sorted(participantes)
    n = len(lista_ordenada)
    mediana = (lista_ordenada[n//2] + lista_ordenada[-(n//2+1)]) / 2
    
    # 3. Calcular puntaje final (usaremos el promedio como base)
    puntaje = (promedio + bono) - penalizacion
    
    # 4. Clasificación
    clasificacion = "competitivo" if puntaje >= 25 else "en_formacion"
    
    return round(puntaje, 2), clasificacion

# Casos de prueba
datos = [12, 18, 25, 30]
b, p = 8, 3
res, cat = procesar_torneo(datos, b, p)

print(f"Puntaje: {res}, Categoría: {cat}")