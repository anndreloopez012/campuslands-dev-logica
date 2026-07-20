def calcular_rendimiento_trazos(longitud_total, tiempo_segundos):
    velocidad = longitud_total / tiempo_segundos
    
    if velocidad < 2:
        return "Estado: Trazo demasiado lento, riesgo de inestabilidad."
    elif velocidad > 10:
        return "Estado: Trazo muy rápido, riesgo de perdida de precision."
    else:
        return "Estado: Velocidad de trazo optima."

sesiones = [[50, 10], [10, 20], [100, 5]]
contador = 0

while contador < len(sesiones):
    datos = sesiones[contador]
    resultado = calcular_rendimiento_trazos(datos[0], datos[1])
    print(f"Sesion {contador + 1}: {resultado}")
    contador += 1