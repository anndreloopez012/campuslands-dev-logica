# Logica matematica 055 - velocidad tiempo distancia (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 015: antes de calcular, se organizan los pares (distancia, tiempo) en objetos simples con `construirTrazos()`, guardando la velocidad individual y si el trazo es fluido. Los pares con tiempo en cero se marcan con velocidad `null` en vez de romper la ejecucion. Sobre esa estructura ya ordenada se calcula la velocidad promedio, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `trazos`: array de objetos `{trazo, distancia, tiempo, velocidad, fluido}` con `construirTrazos()` (velocidad `null` si tiempo es 0).
4. Calcular `velocidad_promedio` sobre los trazos con velocidad valida.
5. Si no hay trazos validos, retornar error.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `velocidad_promedio >= 0.7` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

# Logica matematica 055 - velocidad tiempo distancia (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 015: antes de calcular, se organizan los pares (distancia, tiempo) en objetos simples con `construirTrazos()`, guardando la velocidad individual y si el trazo es fluido. Los pares con tiempo en cero se marcan con velocidad `null` en vez de romper la ejecucion. Sobre esa estructura ya ordenada se calcula la velocidad promedio, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `trazos`: array de objetos `{trazo, distancia, tiempo, velocidad, fluido}` con `construirTrazos()` (velocidad `null` si tiempo es 0).
4. Calcular `velocidad_promedio` sobre los trazos con velocidad valida.
5. Si no hay trazos validos, retornar error.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `velocidad_promedio >= 0.7` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → velocidad_promedio 0.75, puntaje_final 27, clasificacion competitivo.
- Caso especial (trazo lento): `[5,20]`, bono 0, penalizacion 0 → velocidad_promedio 0.25.
- Caso borde (tiempo en cero): retorna error controlado.