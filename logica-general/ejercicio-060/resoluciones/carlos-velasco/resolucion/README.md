# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `ingredientes` (objetos con `nombre`, `frescura`, `costo`, `popularidad`) y un string `estrategia` (criterio de selección).
* **Proceso**: Validación de existencia de elementos, aplicación de lógica de filtrado extremo mediante `.reduce()` según la estrategia elegida y generación del reporte de selección.
* **Salida**: Un objeto que indica el `ingrediente_seleccionado` y un `motivo` detallando la estrategia aplicada.

## Reglas identificadas

1. **Seguridad**: Si el arreglo de ingredientes está vacío, el sistema debe retornar un aviso de "Inventario vacío".
2. **Selección por Estrategia**:
* "económica": Selecciona el ingrediente con el `costo` más bajo.
* "premium": Selecciona el ingrediente con la mayor `frescura`.
* "popular": Selecciona el ingrediente con la mayor `popularidad`.


3. **Validación**: Si la estrategia no es reconocida, el sistema debe retornar un mensaje de error.

## Pruebas

### Caso normal

* **Entrada**: `menu = [{nombre: "Tomate", frescura: 8, costo: 2, popularidad: 9}, {nombre: "Carne", frescura: 9, costo: 10, popularidad: 7}], "económica"`
* **Resultado esperado**: `{ ingrediente_seleccionado: "Tomate", motivo: "Elegido bajo estrategia: económica." }`

### Caso borde

* **Entrada**: `menu = [], "premium"`
* **Resultado esperado**: `{ ingrediente: "Ninguno", motivo: "Inventario vacío." }`

## Explicacion final

La solución es altamente efectiva porque utiliza la versatilidad del método `.reduce()` para realizar comparaciones acumulativas en una sola iteración, lo cual optimiza el rendimiento del programa. Al estructurar la lógica en un `switch`, se logra una separación clara de responsabilidades: cada estrategia de negocio tiene su propio bloque de comparación, lo que facilita enormemente la legibilidad del código y permite añadir futuras estrategias de selección sin alterar la arquitectura base del sistema.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de vacío**: `ingredientes.length === 0`
* **Condición económica**: `cur.costo < min.costo`
* **Condición de estrategia inválida**: `default` en el `switch`