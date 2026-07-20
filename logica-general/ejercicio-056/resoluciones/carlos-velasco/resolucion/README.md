# Plantilla de solucion

## Analisis

* **Entrada**: Una `matriz` bidimensional que representa el entorno y un objeto `pos` con las coordenadas `fila` y `columna`.
* **Proceso**: Evaluación de límites espaciales (para evitar errores fuera de rango) y validación de ocupación de celdas mediante acceso directo a la matriz.
* **Salida**: Un objeto con la `accion` resultante (Error, Bloqueado, o Permitido) y un `motivo` explicativo.

## Reglas identificadas

1. La posición es inválida ("Error") si las coordenadas están fuera de los índices de la matriz.
2. La posición es inválida ("Bloqueado") si el valor en la celda correspondiente es igual a 1 (ocupado).
3. La posición es válida ("Permitido") únicamente si está dentro de los límites y su valor es 0.

## Pruebas

### Caso normal

* **Entrada**: `entorno = [[0, 0, 1], [0, 1, 0], [0, 0, 0]], pos = { fila: 0, columna: 0 }`
* **Resultado esperado**: `{ accion: "Permitido", motivo: "Posición libre, objeto colocado con éxito." }`

### Caso borde

* **Entrada**: `entorno = [[0, 0, 1], [0, 1, 0], [0, 0, 0]], pos = { fila: 1, columna: 1 }`
* **Resultado esperado**: `{ accion: "Bloqueado", motivo: "La celda ya está ocupada por otro objeto." }`

## Explicacion final

La solución funciona gracias a una validación en capas. Primero, aseguramos la integridad del acceso a la memoria evitando que el programa intente leer índices inexistentes (esto previene errores de ejecución). Luego, comprobamos el estado lógico de la celda específica. Este enfoque asegura que el sistema sea capaz de manejar errores de usuario (coordenadas erróneas) y colisiones con objetos existentes de manera ordenada y predecible.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de límites**: `pos.fila < 0 || pos.fila >= matriz.length || pos.columna < 0 || pos.columna >= matriz[0].length`
* **Condición de colisión**: `matriz[pos.fila][pos.columna] === 1`