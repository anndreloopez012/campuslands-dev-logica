
# Ejercicio 023: Toma de decisiones

## Pensamiento del problema
Analicé el rendimiento del jugador comparando su puntuación frente a los rangos definidos para esports. Decidí usar una estructura `if-else` porque permite evaluar rangos de forma jerárquica y sencilla.

## Reglas aplicadas
1. Menos de 50 puntos resulta en eliminación.
2. De 50 a 79 puntos clasifica como Amateur.
3. 80 puntos o más clasifica como Profesional.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con: `node irma-arias.js`

## Casos probados
- Caso normal: Puntuación de 85 (Profesional).
- Caso borde: Puntuación de 45 (Eliminado).