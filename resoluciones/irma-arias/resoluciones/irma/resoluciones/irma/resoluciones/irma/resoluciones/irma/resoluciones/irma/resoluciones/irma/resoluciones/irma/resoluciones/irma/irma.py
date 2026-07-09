
def evaluar_pelicula(titulo, presupuesto_millones, rating):
    """
    Evalúa el flujo paso a paso de una película de ciencia ficción.
    """
    # Paso 1: Revisión presupuestaria
    if presupuesto_millones > 200:
        return {"estado": "en revisión", "motivo": "Requiere aprobación de estudio por alto presupuesto."}
    
    # Paso 2: Evaluación de calidad
    if rating < 7:
        return {"estado": "en espera", "motivo": "Requiere reshoots para mejorar el rating."}
    
    # Paso 3: Aprobación
    return {"estado": "lista para estreno", "motivo": "La película cumple todos los criterios."}

# --- Pruebas ---
# Prueba normal: Aprobada
print(evaluar_pelicula("Interstellar 2", 150, 8.5))

# Caso borde: Presupuesto alto
print(evaluar_pelicula("Avatar 3", 300, 9.0))

# Caso borde: Rating bajo
print(evaluar_pelicula("Sci-Fi Flop", 50, 4.0))