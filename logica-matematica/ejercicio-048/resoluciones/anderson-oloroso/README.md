# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con las puntuaciones de varias películas de ciencia ficción.

- Proceso:
  - Recorrer todas las puntuaciones.
  - Identificar la mayor y la menor calificación.
  - Acumular la suma de las puntuaciones.
  - Calcular el promedio.

- Salida:
  - Mayor puntuación.
  - Menor puntuación.
  - Promedio de las puntuaciones.

## Reglas identificadas

1. Todas las puntuaciones deben recorrerse una sola vez.
2. Se debe identificar la puntuación más alta y la más baja.
3. El promedio se obtiene dividiendo la suma entre la cantidad de puntuaciones.

## Pruebas

### Caso normal

Entrada:

- Calificaciones: [8, 9, 7, 10, 6, 9]

Resultado esperado:

- Mayor puntuación: 10
- Menor puntuación: 6
- Promedio: 8.17

### Caso borde

Entrada:

- Calificaciones: [7]

Resultado esperado:

- Mayor puntuación: 7
- Menor puntuación: 7
- Promedio: 7.00

## Explicacion final

La solución funciona porque recorre el arreglo una única vez utilizando un ciclo. Durante el recorrido compara cada puntuación para encontrar la mayor y la menor, mientras acumula la suma de todas las calificaciones. Al finalizar, calcula el promedio dividiendo la suma entre la cantidad de películas.