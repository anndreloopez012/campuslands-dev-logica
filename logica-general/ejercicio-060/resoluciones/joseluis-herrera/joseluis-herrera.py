def seleccionar_menu_rentable(menu):
    menu_seleccionado = []
    
    for i in range(len(menu)):
        nombre = menu[i][0]
        precio_venta = menu[i][1]
        costo_produccion = menu[i][2]
        margen = precio_venta - costo_produccion
        
        if margen >= 5:
            menu_seleccionado.append([nombre, margen])
            
    return menu_seleccionado

lista_menu = [["Taco", 8, 2], ["Burrito", 10, 6], ["Pizza", 12, 5], ["Soda", 3, 1]]
menu_filtrado = seleccionar_menu_rentable(lista_menu)

for plato in menu_filtrado:
    print(f"Plato: {plato[0]} | Margen de ganancia: {plato[1]}")