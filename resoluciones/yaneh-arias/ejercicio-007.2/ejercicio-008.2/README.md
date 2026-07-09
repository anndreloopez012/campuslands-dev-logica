
# Ejercicio 008.2: Patrones de Puntuación - Ciencia Ficción

## Pensamiento del problema
He diseñado un algoritmo que procesa una lista de valores numéricos de forma individual antes de obtener un total. La lógica aplica una transformación lineal (x + bono - penalización) a cada elemento.

## Reglas aplicadas
1. **Ajuste:** Cada participante recibe un incremento por "bono" y un decremento por "penalización".
2. **Clasificación:** Si el promedio de energía resultante es mayor a 25, la nave es "Elite"; de lo contrario, es "Competitivo".

## Cómo ejecutar
El proceso está definido en el archivo `irma-arias.md` mediante pseudocódigo estructurado.

## Casos de prueba
- **Normal:** [12, 18, 25, 30] con bono 8 y penalización 3 -> Total 106, Promedio 26.5 (Elite).
- **Caso Borde:** [0, 0] con bono 0 y penalización 0 -> Total 0, Clasificación "Competitivo".