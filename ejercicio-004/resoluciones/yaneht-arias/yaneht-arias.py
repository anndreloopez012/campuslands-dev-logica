
def calcular_clasificacion(participantes, bono, penalizacion):
    # Regla: Sumatoria de la lista + bono - penalización
    puntaje_final = sum(participantes) + bono - penalizacion
    
    # Regla de clasificación
    if puntaje_final >= 50:
        clasificacion = "competitivo"
    else:
        clasificacion = "basico"
        
    return puntaje_final, clasificacion

# --- Casos de Prueba ---
# Caso del ejemplo
puntos, categoria = calcular_clasificacion([12, 18, 25, 30], 8, 3)
print(f"Resultado Ejemplo -> Puntaje: {puntos}, Clasificación: {categoria}")

# Caso borde (lista vacía o valores mínimos)
puntos_borde, cat_borde = calcular_clasificacion([5, 5], 0, 2)
print(f"Resultado Borde -> Puntaje: {puntos_borde}, Clasificación: {cat_borde}")