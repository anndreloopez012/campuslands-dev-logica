# Logica matematica 043 - promedios y medianas

## Analisis

- Entrada: Un arreglo de números (participantes), bono y penalización.
- Proceso: Calcular promedio y mediana, sumarlos, aplicar bono y penalización.
- Salida: Puntaje final y clasificación.

## Reglas identificadas

1. Calcular el promedio: suma total / cantidad.
2. Calcular la mediana: ordenar y tomar el centro (si es par, promediar los dos del centro).
3. Sumar promedio + mediana + bono - penalización.
4. Si puntaje >= 30 es "competitivo", si no "normal".

## Pruebas

### Caso normal

Entrada: participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3

Resultado esperado: puntaje_final: 46.25, clasificacion: competitivo

### Caso borde

Entrada: participantes: [], bono: 0, penalizacion: 0

Resultado esperado: puntaje_final: 0, clasificacion: normal

## Explicacion final

La función calcula el promedio y la mediana, los suma, aplica bono y penalización, y clasifica según el resultado. Si no hay participantes, devuelve 0.