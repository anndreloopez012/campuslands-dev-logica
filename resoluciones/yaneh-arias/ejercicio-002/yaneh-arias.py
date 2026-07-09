
"""
Ejercicio 002: Lógica de Ranking de Equipos
Autor: Yaneh Arias
Fecha: 08/07/2026
"""

def clasificar_equipo(ganados, perdidos):
    """
    Calcula el porcentaje de efectividad y clasifica el equipo.
    """
    total = ganados + perdidos
    
    if total == 0:
        return 0.0, "Sin partidos jugados"
    
    efectividad = (ganados / total) * 100
    
    if efectividad >= 50:
        categoria = "equipo_elite"
    else:
        categoria = "equipo_formacion"
        
    return round(efectividad, 2), categoria

# Lógica principal del programa
if __name__ == "__main__":
    try:
        g = int(input("Ingrese partidos ganados: "))
        p = int(input("Ingrese partidos perdidos: "))
        
        efectividad, categoria = clasificar_equipo(g, p)
        
        print(f"\n--- Resultado ---")
        print(f"Efectividad: {efectividad}%")
        print(f"Clasificación: {categoria}")
    except ValueError:
        print("Por favor, ingrese solo números enteros.")