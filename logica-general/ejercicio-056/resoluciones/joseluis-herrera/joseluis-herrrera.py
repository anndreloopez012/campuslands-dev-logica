def analizar_render_granja(matriz_nodos):
    nodos_activos = 0
    total_carga = 0
    
    for i in range(len(matriz_nodos)):
        for j in range(len(matriz_nodos[i])):
            carga = matriz_nodos[i][j]
            if carga > 0:
                nodos_activos += 1
                total_carga += carga
                
    if total_carga / nodos_activos > 80:
        return "Estado: Granja sobrecargada, distribuir carga."
    else:
        return f"Estado: Operativo con {nodos_activos} nodos trabajando."

granja = [[90, 70, 80], [60, 95, 50], [40, 85, 75]]

resultado = analizar_render_granja(granja)
print(resultado)