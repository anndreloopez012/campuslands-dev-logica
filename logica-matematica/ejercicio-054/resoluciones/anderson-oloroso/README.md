# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con diseños de tatuajes.
  - Cada diseño contiene nombre, ancho y alto.

- Proceso:
  - Recorrer cada diseño registrado.
  - Calcular el área multiplicando ancho por alto.
  - Calcular el perímetro sumando todos los lados del diseño.
  - Guardar los resultados obtenidos.

- Salida:
  - Nombre del diseño.
  - Área del tatuaje.
  - Perímetro del tatuaje.

## Reglas identificadas

1. El área se calcula multiplicando ancho por alto.
2. El perímetro se calcula con la fórmula 2 * (ancho + alto).
3. Cada diseño debe generar sus propios cálculos.

## Pruebas

### Caso normal

Entrada:

- Dragón: ancho 10, alto 20
- Rosa: ancho 8, alto 15

Resultado esperado:

- Dragón:
  - Área: 200
  - Perímetro: 60

- Rosa:
  - Área: 120
  - Perímetro: 46

### Caso borde

Entrada:

- Diseño:
  - Fénix
  - Ancho: 0
  - Alto: 20

Resultado esperado:

- Área: 0
- Perímetro: 40

## Explicacion final

La solución funciona porque procesa cada diseño de tatuaje aplicando fórmulas matemáticas para obtener su área y perímetro. Mediante un ciclo recorre todos los elementos y almacena los resultados, permitiendo analizar las dimensiones de cada diseño.