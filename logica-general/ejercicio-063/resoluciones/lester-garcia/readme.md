# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los puntajes obtenidos por el equipo.

- **Proceso:**
  - Sumar todos los puntajes.
  - Calcular el promedio.
  - Ordenar el arreglo para obtener la mediana.
  - Evaluar varias condiciones utilizando el promedio y la mediana.
  - Asignar la categoria correspondiente.

- **Salida:**
  - Promedio.
  - Mediana.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El promedio se obtiene sumando todos los puntajes y dividiendo entre la cantidad de elementos.
2. La mediana corresponde al valor central del arreglo una vez ordenado.
3. Si el promedio es mayor o igual a 85 y la mediana es mayor o igual a 88, la categoria es **equipo elite**. Si no cumple ambas condiciones pero el promedio es mayor o igual a 80, la categoria es **equipo competitivo**; en otro caso, la categoria es **equipo en desarrollo**.

## Pruebas

### Caso normal

**Entrada:**

puntajes: [82, 95, 76, 88, 91]

**Resultado esperado:**

promedio: 86.4

mediana: 88

categoria: equipo elite

explicacion: se calcularon el promedio y la mediana para clasificar el rendimiento del equipo.

### Caso borde

**Entrada:**

puntajes: [80, 82, 84, 86, 88]

**Resultado esperado:**

promedio: 84

mediana: 84

categoria: equipo competitivo

explicacion: se calcularon el promedio y la mediana para clasificar el rendimiento del equipo.

## Explicacion final

La solucion recibe un arreglo con los puntajes del equipo. Primero calcula el promedio sumando todos los valores y dividiendo entre la cantidad de elementos. Luego ordena el arreglo para obtener la mediana. Finalmente evalua varias condiciones: para ser **equipo elite** debe cumplir simultaneamente el promedio y la mediana requeridos; si solo cumple el promedio minimo, se clasifica como **equipo competitivo**; de lo contrario, queda como **equipo en desarrollo**.