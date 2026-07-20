def generar_ranking_proyectos(proyectos):
    for i in range(len(proyectos)):
        for j in range(0, len(proyectos) - i - 1):
            if proyectos[j][1] < proyectos[j + 1][1]:
                proyectos[j], proyectos[j + 1] = proyectos[j + 1], proyectos[j]
    
    for i in range(len(proyectos)):
        nombre = proyectos[i][0]
        puntaje = proyectos[i][1]
        print(f"Puesto {i+1}: {nombre} con {puntaje} puntos")

lista_proyectos = [["Torre Solar", 85], ["Casa Eco", 92], ["Centro Cultural", 78], ["Museo Verde", 95]]

generar_ranking_proyectos(lista_proyectos)