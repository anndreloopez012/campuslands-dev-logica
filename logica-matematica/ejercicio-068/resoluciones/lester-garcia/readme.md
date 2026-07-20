# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las puntuaciones de varias peliculas.

- **Proceso:**
  - Calcular el promedio de las puntuaciones.
  - Verificar si las puntuaciones siguen un patron ascendente.
  - Evaluar las reglas utilizando el promedio y el resultado del patron.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Promedio.
  - Estado del patron ascendente.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El promedio se obtiene sumando todas las puntuaciones y dividiendo entre la cantidad de elementos.
2. El patron ascendente es valido cuando cada puntuacion es mayor o igual que la anterior.
3. Si el promedio es mayor o igual a **9** y existe un patron ascendente, la categoria es **patron excelente**. Si no cumple ambas condiciones pero el promedio es mayor o igual a **8.5**, la categoria es **patron consistente**. En otro caso, la categoria es **patron irregular**.

## Pruebas

### Caso normal

**Entrada:**

puntuaciones: [8, 9, 9, 9, 10]

**Resultado esperado:**

promedio: 9

patron_ascendente: true

categoria: patron excelente

explicacion: se organizo la lista de puntuaciones, se calculo el promedio y se verifico si seguia un patron ascendente.

### Caso borde

**Entrada:**

puntuaciones: [9, 8, 9, 10, 9]

**Resultado esperado:**

promedio: 9

patron_ascendente: false

categoria: patron consistente

explicacion: se organizo la lista de puntuaciones, se calculo el promedio y se verifico si seguia un patron ascendente.

## Explicacion final

La solucion recibe un arreglo con las puntuaciones de varias peliculas de ciencia ficcion. Primero organiza los datos calculando el promedio de todas las puntuaciones. Despues verifica si los valores siguen un patron ascendente recorriendo el arreglo. Finalmente evalua varias condiciones: si el promedio alcanza el valor minimo y el patron es ascendente, la categoria es **patron excelente**. Si solo cumple el requisito del promedio, la categoria es **patron consistente**; en caso contrario, se clasifica como **patron irregular**.