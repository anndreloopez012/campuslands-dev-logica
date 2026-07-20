def calcular_estadisticas_partida(eliminaciones, muertes, asistencias, daño):
    if muertes == 0:
        kda = eliminaciones + asistencias
    else:
        kda = (eliminaciones + asistencias) / muertes
        
    promedio_dano = daño / (eliminaciones + 1)
    
    if kda > 3.0 and promedio_dano > 1000:
        return "Rendimiento: MVP"
    elif kda > 1.5:
        return "Rendimiento: Positivo"
    else:
        return "Rendimiento: Defensivo"

sesiones = [
    [10, 2, 5, 12000],
    [2, 8, 3, 3000],
    [5, 5, 5, 8000]
]

for i in range(len(sesiones)):
    s = sesiones[i]
    resultado = calcular_estadisticas_partida(s[0], s[1], s[2], s[3])
    print(f"Partida {i+1}: {resultado}")