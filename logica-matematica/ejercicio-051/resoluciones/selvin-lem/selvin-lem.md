# Logica matematica 051 - conteo combinatorio simple (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 011: antes de calcular, se organizan todos los combates posibles en objetos simples con `construirCombates()`, generados con un ciclo anidado, guardando ambos peleadores, su diferencia de nivel, y si son parejos. Sobre esa estructura ya ordenada se calcula la proporcion de combates parejos, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `combates`: array de objetos `{combate, peleadorA, peleadorB, diferencia, parejo}` con `construirCombates()` (ciclo anidado, diferencia <= 6 es parejo).
4. Calcular `proporcion_parejos` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `proporcion_parejos >= 0.3` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_parejos 0.33, puntaje_final 27, clasificacion competitivo.
- Caso especial (niveles muy parejos): `[50,51,52]`, bono 0, penalizacion 0 → proporcion_parejos 1 pero puntaje bajo.
- Caso borde (menos de 2 participantes): retorna error controlado.