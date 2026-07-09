
# Resolución: Ejercicio 004 - Filtros por condiciones (Inventario de Motos)

## Pensamiento lógico
Para este ejercicio, utilicé un enfoque de "recorrido y selección". Iteré sobre la lista original y apliqué una estructura condicional (`if`) con operadores lógicos para validar múltiples condiciones simultáneamente (disponibilidad y kilometraje) antes de añadir el elemento a una lista de resultados.

## Reglas aplicadas
1. **Filtro de Estado:** Se excluyen todas las motos que no estén marcadas como "disponible".
2. **Filtro de Uso:** Se aplica un límite de kilometraje (< 5000) para garantizar que solo se muestren motos con bajo uso.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Una lista con diversos estados y kilometrajes -> Se filtran solo las dos condiciones cumplidas.
2. **Caso Borde:** Una lista vacía -> El programa responde correctamente con una lista vacía sin errores.