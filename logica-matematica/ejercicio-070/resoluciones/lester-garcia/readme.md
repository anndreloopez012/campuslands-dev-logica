# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con las distancias recorridas durante varios viajes.

- **Proceso:**
  - Recorrer el arreglo de distancias.
  - Redondear cada distancia utilizando `Math.round()`.
  - Guardar las distancias redondeadas.
  - Calcular el promedio de las distancias redondeadas.
  - Clasificar el recorrido segun el promedio obtenido.

- **Salida:**
  - Arreglo de distancias redondeadas.
  - Promedio.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. Cada distancia debe redondearse al entero mas cercano utilizando `Math.round()`.
2. El promedio se calcula utilizando las distancias ya redondeadas.
3. Si el promedio es mayor o igual a **120**, la categoria es **ruta extensa**. Si no cumple esa condicion pero el promedio es mayor o igual a **100**, la categoria es **ruta equilibrada**. En otro caso, la categoria es **ruta corta**.

## Pruebas

### Caso normal

**Entrada:**

distancias: [125.8, 98.4, 140.2, 110.6]

**Resultado esperado:**

distancias_redondeadas: [126, 98, 140, 111]

promedio: 118.75

categoria: ruta equilibrada

explicacion: se organizaron las distancias, se redondearon al entero mas cercano y luego se calculo el promedio.

### Caso borde

**Entrada:**

distancias: [120.4, 120.5, 119.6]

**Resultado esperado:**

distancias_redondeadas: [120, 121, 120]

promedio: 120.33333333333333

categoria: ruta extensa

explicacion: se organizaron las distancias, se redondearon al entero mas cercano y luego se calculo el promedio.

## Explicacion final

La solucion recibe un arreglo con las distancias recorridas durante varios viajes. Primero organiza los datos recorriendo el arreglo y redondeando cada distancia al entero mas cercano mediante `Math.round()`. Posteriormente almacena las nuevas distancias, calcula el promedio de los valores redondeados y finalmente clasifica el recorrido. Si el promedio es mayor o igual a **120**, la categoria es **ruta extensa**. Si el promedio es mayor o igual a **100**, la categoria es **ruta equilibrada**; en caso contrario, la categoria es **ruta corta**. Finalmente se muestran las distancias redondeadas, el promedio obtenido y la categoria correspondiente.