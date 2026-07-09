
# Resolución: Ejercicio 005 - Ordenamiento de Prioridades (Taller Mecánico)

## Pensamiento lógico
Para resolver este problema, utilicé un "diccionario de pesos" (`pesos`). Esto permite convertir una etiqueta de texto ("alta", "media", "baja") en un valor numérico que Python puede comparar fácilmente. La función `sorted()` con una llave (`key`) personalizada permite reorganizar toda la lista de forma eficiente.

## Reglas aplicadas
1. **Jerarquía:** La prioridad 'alta' se le asigna el valor 1, siendo la primera en procesarse.
2. **Estabilidad:** El algoritmo mantiene el orden relativo original si las prioridades son iguales.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Lista mixta con diversos niveles de prioridad -> Resultado: Lista reordenada de mayor a menor urgencia.
2. **Caso Borde:** Lista vacía -> El sistema retorna una lista vacía sin errores