# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las puntuaciones de los proyectos de arquitectura 3D.

- **Proceso:**
  - Recorrer el arreglo para calcular la suma de las puntuaciones.
  - Identificar la puntuación máxima y la mínima.
  - Calcular el promedio y el rango de puntuaciones.
  - Evaluar varias condiciones utilizando el promedio y el rango.
  - Determinar la categoría correspondiente.

- **Salida:**
  - Promedio.
  - Puntuación máxima.
  - Puntuación mínima.
  - Rango.
  - Categoría.
  - Explicación del resultado.

## Reglas identificadas

1. El promedio se obtiene sumando todas las puntuaciones y dividiendo entre la cantidad de elementos, mientras que el rango se calcula restando la puntuación mínima a la máxima.
2. Si el promedio es mayor o igual a 90 y el rango es menor o igual a 12, la categoría es **ranking sobresaliente**.
3. Si no cumple ambas condiciones pero el promedio es mayor o igual a 85, la categoría es **ranking competitivo**; en otro caso, la categoría es **ranking en desarrollo**.

## Pruebas

### Caso normal

**Entrada:**

puntuaciones: [92, 85, 97, 88, 90]

**Resultado esperado:**

promedio: 90.4

puntuacion_maxima: 97

puntuacion_minima: 85

rango: 12

categoria: ranking sobresaliente

explicacion: se calcularon el promedio y el rango de puntuaciones para clasificar el rendimiento del ranking.

### Caso borde

**Entrada:**

puntuaciones: [85, 86, 87, 88]

**Resultado esperado:**

promedio: 86.5

puntuacion_maxima: 88

puntuacion_minima: 85

rango: 3

categoria: ranking competitivo

explicacion: se calcularon el promedio y el rango de puntuaciones para clasificar el rendimiento del ranking.

## Explicacion final

La solucion recibe un arreglo con las puntuaciones de los proyectos y lo recorre una sola vez para calcular la suma, la puntuacion maxima y la puntuacion minima. Con estos valores obtiene el promedio y el rango de puntuaciones. Posteriormente evalua varias condiciones: para obtener la categoria **ranking sobresaliente** debe cumplir simultaneamente un promedio minimo y un rango reducido. Si solo cumple el requisito del promedio, se clasifica como **ranking competitivo**; en caso contrario, como **ranking en desarrollo**. Finalmente muestra todas las estadisticas y la categoria correspondiente.