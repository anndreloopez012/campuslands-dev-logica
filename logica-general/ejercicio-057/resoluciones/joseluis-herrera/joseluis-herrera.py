def evaluar_proyecto_arquitectonico(iluminacion_natural, ventilacion_cruzada, eficiencia_energetica):
    if iluminacion_natural == "alta" and ventilacion_cruzada == "optima":
        if eficiencia_energetica == "A":
            return "Certificacion: Oro - Diseno Sostenible"
        else:
            return "Certificacion: Plata - Diseno Funcional"
    elif iluminacion_natural == "baja" or ventilacion_cruzada == "deficiente":
        return "Certificacion: Requiere ajustes de diseno"
    else:
        return "Certificacion: Estandar"

proyectos = [
    ["alta", "optima", "A"],
    ["alta", "optima", "B"],
    ["baja", "deficiente", "C"]
]

for i in range(len(proyectos)):
    p = proyectos[i]
    resultado = evaluar_proyecto_arquitectonico(p[0], p[1], p[2])
    print(f"Proyecto {i+1}: {resultado}")