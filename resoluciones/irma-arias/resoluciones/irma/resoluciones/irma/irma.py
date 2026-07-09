
def validar_equipo(nombre, goles_favor, goles_contra, ganados, jugados):
    """
    Valida las estadísticas de un equipo de fútbol sala.
    """
    # Regla 1: Valores negativos
    if goles_favor < 0 or goles_contra < 0 or ganados < 0 or jugados < 0:
        return {"equipo": nombre, "estado": "inválido", "motivo": "Los valores no pueden ser negativos."}
    
    # Regla 2: Lógica deportiva
    if ganados > jugados:
        return {"equipo": nombre, "estado": "inválido", "motivo": "Los partidos ganados no pueden superar a los jugados."}
    
    # Regla 3: Si todo está bien
    return {"equipo": nombre, "estado": "apto", "motivo": "Estadísticas coherentes para el ranking."}

# --- Pruebas ---
# Prueba normal
print(validar_equipo("Los Tigres", 15, 5, 3, 5))

# Caso borde: Valores negativos
print(validar_equipo("Errores FC", -1, 5, 0, 2))

# Caso borde: Ganados > Jugados
print(validar_equipo("Tramposos SC", 10, 2, 5, 3))