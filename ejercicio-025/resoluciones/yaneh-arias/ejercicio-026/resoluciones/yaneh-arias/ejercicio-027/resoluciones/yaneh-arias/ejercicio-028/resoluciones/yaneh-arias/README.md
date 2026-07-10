
# Ejercicio 028 - Patrones de Puntuación (Sci-Fi Movies)

## Análisis del Problema
En el mundo del cine, el promedio no cuenta toda la historia. El objetivo es identificar patrones de puntuación para saber si una película de ciencia ficción gusta a todo el público por igual (consistente) o si divide a los espectadores (polarizante).

## Reglas Aplicadas
1. **Detección de Extremos:** Se calculan el máximo y el mínimo de la lista de calificaciones.
2. **Cálculo de Dispersión:** La diferencia entre el máximo y el mínimo define el "patrón".
3. **Umbral:** Se define un umbral de 5 puntos. Si la dispersión es mayor, el patrón se clasifica como `Polarizante`.
4. **Validación:** Se requiere un mínimo de 2 calificaciones para que el análisis sea estadísticamente válido.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal (Consistente):** Notas `[9, 8, 9, 7, 8]` (Diferencia 2). Patrón: Consistente.
2. **Caso Borde (Polarizante):** Notas `[10, 2, 9, 3, 8]` (Diferencia 8). Patrón: Polarizante.