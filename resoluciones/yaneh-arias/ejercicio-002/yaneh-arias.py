
"""
Ejercicio 002: Cálculo de Efectividad de Equipo
Autor: Yaneh Arias
"""

def calcular_efectividad(partidos_ganados, partidos_perdidos):
    total_partidos = partidos_ganados + partidos_perdidos
    
    if total_partidos == 0:
        return 0.0, "Sin registros"
    
    porcentaje = (partidos_ganados / total_partidos) * 100
    
    if porcentaje >= 50:
        estado = "equipo_elite"
    else:
        estado = "equipo_formacion"
        
    return round(porcentaje, 2), estado

# Prueba del ejercicio
if __name__ == "__main__":
    ganados = 15
    perdidos = 10
    efectividad, categoria = calcular_efectividad(ganados, perdidos)
    print(f"Efectividad: {efectividad}% - Categoría: {categoria}")