
# Ejercicio 004 - Rangos y Máximos (Inventario de Motos)

## Análisis
Se busca identificar el modelo de moto con mayor existencia (valor máximo) y verificar si este valor respeta los límites de inventario establecidos para la empresa.

## Reglas Aplicadas
1. **Búsqueda del Máximo:** Se recorre la lista comparando cada elemento para hallar el pico más alto.
2. **Validación de Rangos:** Se compara el máximo obtenido contra `min_perm` y `max_perm`.
3. **Clasificación:** Determinación de estado operativo basado en los umbrales definidos.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 25, 30]`, Min: 10, Max: 35. Resultado: Máximo 30 (Óptimo).
2. **Caso Borde (Sobrestock):** `[40, 10, 5]`, Min: 10, Max: 35. Resultado: Máximo 40 (Sobrestock).