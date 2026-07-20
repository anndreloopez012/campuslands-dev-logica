# Ejercicio 048 - Patrones de puntuación

## ¿Cómo pensé el problema?

Primero identifiqué las entradas (lista de participantes, bono y penalización). Después calculé el promedio de las puntuaciones, apliqué el bono y resté la penalización para obtener el puntaje final.

## Reglas aplicadas

- Calcular la suma de las puntuaciones.
- Obtener el promedio.
- Sumar el bono.
- Restar la penalización.
- Clasificar el resultado:
  - 30 o más: elite.
  - 20 a 29.99: competitivo.
  - Menor de 20: básico.
- Si la lista está vacía, mostrar "sin datos".

## ¿Cómo ejecutar?

```bash
node stefani-sanchez.js