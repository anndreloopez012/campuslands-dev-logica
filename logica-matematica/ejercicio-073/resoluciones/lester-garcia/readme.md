# Plantilla de solucion

## Analisis

- **Entrada:**
  - Coordenadas iniciales `(x1, y1)`.
  - Coordenadas finales `(x2, y2)`.

- **Proceso:**
  - Calcular la diferencia entre las coordenadas en los ejes X y Y.
  - Aplicar la formula de la distancia euclidiana.
  - Comparar la distancia obtenida con el limite establecido.
  - Determinar la categoria del salto.

- **Salida:**
  - Distancia.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La distancia se calcula con la formula √((x2 - x1)² + (y2 - y1)²).
2. Si la distancia es mayor o igual a 100, la categoria es **salto largo**.
3. Si la distancia es menor a 100, la categoria es **salto corto**.

## Pruebas

### Caso normal

**Entrada:**

x1: 120

y1: 80

x2: 180

y2: 160

**Resultado esperado:**

distancia: 100

categoria: salto largo

explicacion: se calculo la distancia entre dos coordenadas utilizando la formula de la distancia en el plano.

### Caso borde

**Entrada:**

x1: 50

y1: 50

x2: 80

y2: 90

**Resultado esperado:**

distancia: 50

categoria: salto corto

explicacion: se calculo la distancia entre dos coordenadas utilizando la formula de la distancia en el plano.

## Explicacion final

La solucion recibe las coordenadas inicial y final del recorrido. Luego calcula la distancia entre ambos puntos aplicando la formula de la distancia euclidiana en el plano cartesiano. Finalmente compara el resultado con el limite definido para clasificar el salto y presenta todos los resultados obtenidos.