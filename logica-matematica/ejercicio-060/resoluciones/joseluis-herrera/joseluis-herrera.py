def calcular_costo_produccion(productos):
    costo_fijo = 100
    costo_total = 0
    
    for i in range(len(productos)):
        nombre = productos[i][0]
        cantidad = productos[i][1]
        precio_unidad = productos[i][2]
        
        subtotal = cantidad * precio_unidad
        costo_total += subtotal
        print(f"Producto: {nombre} | Subtotal: {subtotal}")
        
    final = costo_total + costo_fijo
    return final

inventario_pedido = [["Tacos", 50, 2], ["HotDogs", 30, 3], ["Burgers", 20, 5]]
total = calcular_costo_produccion(inventario_pedido)
print(f"Costo operativo total incluyendo fijos: {total}")