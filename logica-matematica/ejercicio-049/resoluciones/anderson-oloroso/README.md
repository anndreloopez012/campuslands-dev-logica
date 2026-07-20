# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con los identificadores numéricos de películas de miedo.

- Proceso:
  - Recorrer cada identificador.
  - Evaluar si es divisible entre 2 o entre 3.
  - Clasificar cada película según la regla correspondiente.

- Salida:
  - Lista de películas con IDs divisibles por 2.
  - Lista de películas con IDs divisibles por 3.
  - Lista de otros IDs.

## Reglas identificadas

1. Un número es divisible por 2 si el residuo de su división entre 2 es igual a cero.
2. Un número es divisible por 3 si el residuo de su división entre 3 es igual a cero.
3. Cada identificador debe pertenecer a una sola categoría.

## Pruebas

### Caso normal

Entrada:

- IDs: [10, 15, 7, 8, 9, 14, 21]

Resultado esperado:

- Divisibles por 2: [10, 8, 14]
- Divisibles por 3: [15, 9, 21]
- Otros: [7]

### Caso borde

Entrada:

- IDs: [5]

Resultado esperado:

- Divisibles por 2: []
- Divisibles por 3: []
- Otros: [5]

## Explicacion final

La solución funciona porque utiliza el operador módulo para comprobar la divisibilidad de cada identificador. Mediante un ciclo recorre todos los datos y los almacena en diferentes arreglos según la regla que cumplen, permitiendo clasificar las películas de manera ordenada.