
# Ejercicio 012: Probabilidad básica en Ping Pong

## Pensamiento del problema
Para determinar la efectividad de un jugador, calculo la relación entre los aciertos y el total de intentos. Esto nos permite clasificar el rendimiento del jugador bajo un criterio probabilístico.

## Reglas aplicadas
1. **Fórmula:** $P = \frac{saquesExitosos}{totalSaques}$
2. **Clasificación:** Si la probabilidad supera el 70% (0.7), el nivel es 'élite'.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `8 exitosos de 10` -> 80% (Élite).
- **Caso Borde:** `0 exitosos de 10` -> 0% (Regular).