def clasificar_jugador(rango_puntos, victorias, penalizaciones):
    if penalizaciones > 3:
        return "Estado: Suspendido por comportamiento"
    
    if rango_puntos >= 3000 and victorias >= 50:
        return "Liga: Maestro - Jugador Elite"
    elif rango_puntos >= 1500:
        return "Liga: Veterano - Jugador Avanzado"
    elif victorias >= 10:
        return "Liga: Aspirante - Jugador Activo"
    else:
        return "Liga: Principiante - Periodo de prueba"

jugadores = [
    [3200, 60, 0],
    [1800, 25, 1],
    [500, 5, 5],
    [1200, 15, 0]
]

for i in range(len(jugadores)):
    j = jugadores[i]
    resultado = clasificar_jugador(j[0], j[1], j[2])
    print(f"Jugador {i+1}: {resultado}")