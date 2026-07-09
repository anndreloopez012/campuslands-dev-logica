
# Resolución: Ejercicio 004.2 - Filtros por condiciones (Inventario de Motos)

## Pensamiento lógico
He utilizado una estructura de iteración (`PARA CADA`) combinada con una validación lógica (`SI...Y...`). Esto permite procesar el inventario elemento por elemento, descartando automáticamente todo lo que no cumpla con los estándares de disponibilidad o kilometraje.

## Reglas aplicadas
1. **Validación de disponibilidad:** Filtro estricto de estado.
2. **Validación de umbral:** Filtro numérico para el kilometraje.

## Cómo ejecutar/revisar
Este algoritmo recorre el inventario. Si tienes una lista de 100 motos, el pseudocódigo generará una sub-lista con todas las que cumplen los dos criterios.

## Casos probados
1. **Caso Normal:** Inventario con estados variados (disponible, vendida) y km variados. Resultado: solo motos disponibles con < 5000km.
2. **Caso Borde (Vacío):** Inventario sin motos. Resultado: lista filtrada vacía.
3. **Caso Borde (Ninguna cumple):** Inventario con motos disponibles pero todas con > 5000km. Resultado: lista filtrada vacía.