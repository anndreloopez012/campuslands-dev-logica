# Logica matematica 048 - patrones de puntuacion (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 028: antes de calcular, se organizan las puntuaciones en objetos simples con `construirPeliculas()`, clasificando cada una como "pico", "valle" o "neutro" segun el promedio. Sobre esa estructura ya ordenada se calculan la proporcion de picos y el equilibrio del patron, replicando la logica de clasificacion ya validada en el 028.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y construir `peliculas`: array de objetos `{id, puntuacion, categoria}` con `construirPeliculas()`.
4. Calcular `proporcion_picos`, `proporcion_valles` y `equilibrio_patron` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `proporcion_picos >= 0.5` y `equilibrio_patron >= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_picos 0.5, equilibrio_patron 1, puntaje_final 27, clasificacion competitivo.
- Caso especial (patron desequilibrado): `[10,10,90]`, bono 0, penalizacion 0.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.