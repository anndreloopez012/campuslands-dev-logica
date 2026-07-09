
def determinar_clasificacion(nombre_equipo, puntos, partidas, penalizacion):
    """
    Toma la decisión de clasificación basada en reglas del torneo.
    """
    # Regla 1: Penalización
    if penalizacion:
        return {"equipo": nombre_equipo, "estado": "descalificado", "motivo": "El equipo presenta penalizaciones activas."}
    
    # Regla 2: Requisitos de rendimiento
    if partidas < 5:
        return {"equipo": nombre_equipo, "estado": "descalificado", "motivo": "No cumple con el mínimo de 5 partidas jugadas."}
    
    if puntos < 10:
        return {"equipo": nombre_equipo, "estado": "descalificado", "motivo": "Puntuación insuficiente para clasificar."}
    
    # Si pasa todo lo anterior
    return {"equipo": nombre_equipo, "estado": "clasificado", "motivo": "Equipo cumple con todos los requisitos del torneo."}

# --- Pruebas ---
# Caso normal: Clasifica
print(determinar_clasificacion("CyberTeam", 12, 6, False))

# Caso borde: Tiene penalización
print(determinar_clasificacion("LagMaster", 20, 10, True))

# Caso borde: Puntos insuficientes
print(determinar_clasificacion("Newbies", 5, 5, False))