# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de golpes directos.
  - Cantidad de golpes circulares.

- **Proceso:**
  - Calcular el numero total de combinaciones posibles multiplicando ambas cantidades.
  - Comparar el resultado con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Numero de combinaciones.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El total de combinaciones se obtiene multiplicando la cantidad de golpes directos por la cantidad de golpes circulares.
2. Si el numero de combinaciones es mayor o igual a 20, la categoria es **estrategia avanzada**.
3. Si el numero de combinaciones es menor a 20, la categoria es **estrategia basica**.

## Pruebas

### Caso normal

**Entrada:**

golpesDirectos: 6

golpesCirculares: 4

**Resultado esperado:**

combinaciones: 24

categoria: estrategia avanzada

explicacion: se calcularon las combinaciones posibles multiplicando los tipos de golpes disponibles.

### Caso borde

**Entrada:**

golpesDirectos: 3

golpesCirculares: 2

**Resultado esperado:**

combinaciones: 6

categoria: estrategia basica

explicacion: se calcularon las combinaciones posibles multiplicando los tipos de golpes disponibles.

## Explicacion final

La solucion recibe la cantidad de golpes directos y golpes circulares disponibles. Luego calcula el numero total de combinaciones posibles mediante una multiplicacion, que representa todas las parejas de golpes que pueden formarse. Finalmente compara el resultado con el umbral establecido para determinar la categoria y muestra todos los resultados solicitados.