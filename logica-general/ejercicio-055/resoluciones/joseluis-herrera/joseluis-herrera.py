def evaluar_proyecto_digital(capas, horas, resolucion_dpi):
    proyectos = []
    
    if capas > 50:
        proyectos.append("Revision: Demasiadas capas, optimizar grupo")
    if horas > 10:
        proyectos.append("Revision: Tiempo excesivo, simplificar trazos")
    if resolucion_dpi < 300:
        proyectos.append("Error: Calidad insuficiente para impresion")
        
    if not proyectos:
        return "Proyecto listo para exportar"
    else:
        return proyectos

lista_proyectos = [[60, 12, 300], [20, 5, 150], [10, 8, 300]]

for i in range(len(lista_proyectos)):
    datos = lista_proyectos[i]
    resultado = evaluar_proyecto_digital(datos[0], datos[1], datos[2])
    print(f"Proyecto {i+1}: {resultado}")