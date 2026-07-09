
# Resolución: Ejercicio 002.2 - Validación de datos (Fútbol Sala)

## Pensamiento lógico
He aplicado un diseño de "validación temprana" (*Guard Clauses*). El objetivo es rechazar los datos incorrectos tan pronto como se detecta una inconsistencia, lo que simplifica el flujo del programa al no tener que anidar múltiples condiciones.

## Reglas aplicadas
1. **Validación de Rango:** Se asegura que los valores sean físicamente posibles (>= 0).
2. **Validación de Consistencia:** Se asegura que el rendimiento (ganados) sea un subconjunto lógico del total (jugados).

## Cómo revisar
El pseudocódigo presentado sigue una estructura lógica universal. Para implementarlo en cualquier lenguaje, simplemente sustituye las estructuras `SI/ENTONCES` por `if/then` y los retornos por `return`.

## Casos probados
1. **Caso Normal:** Goles: 10, Ganados: 2, Jugados: 3 -> Resultado: apto.
2. **Caso Borde (Lógica):** Ganados: 5, Jugados: 2 -> Resultado: rechazado (excede límite).
3. **Caso Borde (Negativos):** Goles: -1 -> Resultado: rechazado (valor inválido).