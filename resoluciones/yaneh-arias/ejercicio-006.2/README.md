
# Ejercicio 006.2: Búsqueda de Elementos - Autos Hiperdeportivos

## Pensamiento del problema
He implementado un algoritmo de búsqueda secuencial. La lógica recorre cada posición de la lista comparando el nombre del auto. Si el nombre coincide, el sistema devuelve su ubicación; si termina el ciclo sin encontrar nada, reporta la ausencia del vehículo.

## Reglas aplicadas
1. **Recorrido:** Se evalúa la lista completa hasta hallar una coincidencia o llegar al final.
2. **Validación:** Se utiliza una bandera booleana (`encontrado`) para determinar el resultado final tras el recorrido.

## Cómo revisar la solución
La lógica está descrita mediante pseudocódigo en `irma-arias.md`. Este proceso es independiente del lenguaje de programación.

## Casos de prueba
- **Caso Normal:** Buscar "Pagani" -> Resultado: Encontrado en posición 1.
- **Caso Borde (No existe):** Buscar "Ferrari" -> Resultado: No se encuentra en el inventario.