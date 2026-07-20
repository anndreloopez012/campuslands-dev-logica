# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con los puntos de aterrizaje de los paracaidistas.
  - Cada punto contiene un nombre y coordenadas X e Y.

- Proceso:
  - Recorrer cada punto de aterrizaje.
  - Aplicar la fórmula de distancia desde el punto de origen.
  - Guardar la distancia calculada para cada participante.

- Salida:
  - Lista de participantes con su distancia desde el punto inicial.

## Reglas identificadas

1. La distancia se calcula usando las coordenadas X e Y.
2. La fórmula utilizada es la raíz cuadrada de la suma de los cuadrados de las coordenadas.
3. Cada participante debe obtener una distancia individual.

## Pruebas

### Caso normal

Entrada:

- Carlos: X=3, Y=4
- Ana: X=5, Y=12
- Luis: X=8, Y=15

Resultado esperado:

- Carlos: 5.00
- Ana: 13.00
- Luis: 17.00

### Caso borde

Entrada:

- Sofía: X=0, Y=0

Resultado esperado:

- Sofía: 0.00

## Explicacion final

La solución funciona porque utiliza la fórmula de distancia para calcular qué tan lejos quedó cada aterrizaje respecto al punto de referencia. El ciclo permite procesar múltiples participantes y almacenar los resultados individuales de cada uno.