# Logica matematica 049 - modulos y divisibilidad (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 029: antes de calcular, se organizan las duraciones en objetos simples con `construirPeliculas()`, guardando flags de divisibilidad entre 3, entre 2, y si son "numero maldito" (ambas a la vez). Sobre esa estructura ya ordenada se calculan las proporciones, replicando la logica de clasificacion ya validada en el 029.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `peliculas`: array de objetos `{id, duracion, divisible3, divisible2, numeroMaldito}` con `construirPeliculas()`.
4. Calcular `proporcion_div3` y `proporcion_div_ambos` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `proporcion_div3 >= 0.5` y `proporcion_div_ambos <= 0.75`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_div3 0.75, proporcion_div_ambos 0.75, puntaje_final 27, clasificacion competitivo.
- Caso especial (valor 0, divisible entre todo): `[0,9,14]`, bono 0, penalizacion 0.
- Caso borde (valor negativo): `[12,-3,20]`, bono 5, penalizacion 2 → retorna error controlado.