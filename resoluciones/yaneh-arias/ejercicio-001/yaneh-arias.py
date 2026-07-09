def calcular_puntaje(participantes, bono, penalizacion):
    # Regla: Promedio simple
    promedio = sum(participantes) / len(participantes)
    
    # Aplicar bono y penalización
    puntaje_final = promedio + bono - penalizacion
    
    # Clasificación
    clasificacion = "competitivo" if puntaje_final > 20 else "basico"
    
    return puntaje_final, clasificacion

# Casos de prueba
participantes_ejemplo = [12, 18, 25, 30]
puntaje, clase = calcular_puntaje(participantes_ejemplo, 8, 3)

print(f"Puntaje final: {puntaje}")
print(f"Clasificación: {clase}")