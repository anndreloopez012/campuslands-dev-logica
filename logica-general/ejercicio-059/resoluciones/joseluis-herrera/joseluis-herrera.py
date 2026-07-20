def gestionar_inventario_quimico(inventario, requerimientos):
    faltantes = []
    
    for i in range(len(requerimientos)):
        nombre = requerimientos[i][0]
        cantidad_necesaria = requerimientos[i][1]
        
        if inventario[nombre] < cantidad_necesaria:
            diferencia = cantidad_necesaria - inventario[nombre]
            faltantes.append(f"{nombre}: faltan {diferencia} unidades")
        else:
            inventario[nombre] -= cantidad_necesaria
            
    if not faltantes:
        return "Inventario suficiente para la reacción"
    else:
        return faltantes

stock_actual = {"Hidrogeno": 50, "Oxigeno": 30, "Carbono": 20}
pedido = [["Hidrogeno", 20], ["Oxigeno", 40], ["Carbono", 5]]

resultado = gestionar_inventario_quimico(stock_actual, pedido)
print(resultado)