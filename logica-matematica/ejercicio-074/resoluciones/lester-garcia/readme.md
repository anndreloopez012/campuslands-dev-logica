# Plantilla de solucion

## Analisis

- **Entrada:**
  - Largo del diseño del tatuaje.
  - Ancho del diseño del tatuaje.

- **Proceso:**
  - Calcular el area multiplicando el largo por el ancho.
  - Calcular el perimetro sumando todos los lados.
  - Comparar el area con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Area.
  - Perimetro.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El area se obtiene multiplicando el largo por el ancho.
2. El perimetro se calcula con la formula `2 × (largo + ancho)`.
3. Si el area es mayor o igual a 90, la categoria es **tatuaje grande**; de lo contrario, es **tatuaje pequeno**.

## Pruebas

### Caso normal

**Entrada:**

largo: 12

ancho: 8

**Resultado esperado:**

area: 96

perimetro: 40

categoria: tatuaje grande

explicacion: se calcularon el area y el perimetro del diseño utilizando las dimensiones proporcionadas.

### Caso borde

**Entrada:**

largo: 8

ancho: 10

**Resultado esperado:**

area: 80

perimetro: 36

categoria: tatuaje pequeno

explicacion: se calcularon el area y el perimetro del diseño utilizando las dimensiones proporcionadas.

## Explicacion final

La solucion recibe el largo y el ancho del diseño del tatuaje. Con estos datos calcula el area mediante una multiplicacion y el perimetro utilizando la suma de todos los lados del rectangulo. Finalmente compara el area con el valor de referencia para asignar la categoria correspondiente y mostrar todos los resultados obtenidos.