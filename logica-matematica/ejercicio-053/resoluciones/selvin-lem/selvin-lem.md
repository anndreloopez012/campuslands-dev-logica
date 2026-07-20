# Logica matematica 053 - coordenadas y distancia (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 013: antes de calcular, se organizan los pares de coordenadas en objetos simples con `construirAterrizajes()`, guardando x, y, la distancia euclidiana al objetivo (0,0), y una etiqueta de precision. Sobre esa estructura ya ordenada se calcula la distancia promedio, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `aterrizajes`: array de objetos `{salto, x, y, distancia, precision}` con `construirAterrizajes()`.
4. Calcular `distancia_promedio` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `distancia_promedio <= 35` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → distancia_promedio 30.34, puntaje_final 27, clasificacion competitivo.
- Caso especial (aterrizaje lejano): `[80,90]`, bono 0, penalizacion 0 → distancia_promedio 120.42.
- Caso borde (menos de 2 valores): retorna error controlado.