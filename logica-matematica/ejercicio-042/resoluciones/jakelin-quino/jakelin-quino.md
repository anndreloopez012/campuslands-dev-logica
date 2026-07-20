# Logica matematica 042 - porcentajes y proporciones

## Analisis

- Entrada: Un arreglo de números (participantes), un número para bono y un número para penalización.
- Proceso: Calcular el porcentaje de cada participante respecto al total, sumar el bono y restar la penalización.
- Salida: El puntaje final, la clasificación y una explicación breve.

## Reglas identificadas

1. Calcular la suma total de todos los participantes.
2. Para cada participante, calcular su porcentaje: (participante / total) * 100.
3. Sumar todos los porcentajes para obtener el puntaje base.
4. Al puntaje base sumarle el bono.
5. Al resultado restarle la penalización.
6. Si el puntaje final es mayor o igual a 50, clasifica como "competitivo".
7. Si es menor a 50, clasifica como "normal".

## Pruebas

### Caso normal

Entrada: participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3

Resultado esperado: puntaje_final: 105, clasificacion: competitivo

### Caso borde

Entrada: participantes: [], bono: 0, penalizacion: 0

Resultado esperado: puntaje_final: 0, clasificacion: normal

## Explicacion final

La solución calcula el total de participantes, luego para cada uno calcula su porcentaje y los suma. Después aplica el bono y la penalización. Si el resultado es mayor o igual a 50, es competitivo. Si no hay participantes, el resultado es 0.
