# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con las puntuaciones de una película de ciencia ficción.

- Proceso:
  - Validar que el arreglo no esté vacío.
  - Recorrer todas las puntuaciones.
  - Acumular la suma de las calificaciones.
  - Calcular el promedio.
  - Clasificar el resultado según el promedio obtenido.

- Salida:
  - Promedio de las puntuaciones.
  - Clasificación de la película.

## Reglas identificadas

1. La lista de puntuaciones no debe estar vacía.
2. El promedio se obtiene sumando todas las puntuaciones y dividiéndolas entre la cantidad de elementos.
3. Si el promedio es mayor o igual a 8 la película es **Excelente**; si es mayor o igual a 6 es **Buena**; de lo contrario es **Regular**.

## Pruebas

### Caso normal

Entrada:

Puntuaciones:

- 9
- 8
- 10
- 7
- 8

Resultado esperado:

Promedio: 8.4

Clasificación: Excelente

### Caso borde

Entrada:

Puntuaciones:

[]

Resultado esperado:

No hay puntuaciones para evaluar.

## Explicacion final

La solución funciona porque primero valida que existan datos para analizar. Después utiliza un ciclo para sumar todas las puntuaciones, calcula el promedio y finalmente aplica una serie de condiciones para determinar la clasificación correspondiente según el resultado obtenido.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.