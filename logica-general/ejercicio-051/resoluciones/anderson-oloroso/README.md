# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de competidores con su nombre y nivel de experiencia.

- Proceso:
  - Recorrer la lista de competidores.
  - Identificar el nivel de cada uno.
  - Organizar los nombres en listas según su categoría.

- Salida:
  - Lista de competidores principiantes.
  - Lista de competidores intermedios.
  - Lista de competidores avanzados.

## Reglas identificadas

1. Cada competidor pertenece a una única categoría.
2. La clasificación se realiza según el nivel de experiencia.
3. Todos los competidores deben incluirse en la lista correspondiente.

## Pruebas

### Caso normal

Entrada:

- Competidores:
  - Luis - Principiante
  - Ana - Avanzado
  - Carlos - Intermedio
  - María - Principiante
  - Sofía - Avanzado

Resultado esperado:

- Principiantes: Luis, María
- Intermedios: Carlos
- Avanzados: Ana, Sofía

### Caso borde

Entrada:

- Competidores:
  - Pedro - Intermedio

Resultado esperado:

- Principiantes: []
- Intermedios: Pedro
- Avanzados: []

## Explicacion final

La solución funciona porque recorre la lista de competidores y evalúa el nivel de experiencia de cada uno mediante condiciones. Dependiendo de la categoría, agrega el nombre a la lista correspondiente, organizando correctamente a todos los participantes.