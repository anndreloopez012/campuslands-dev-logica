# Logica matematica 047 - secuencias numericas (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 027: antes de calcular, se organizan los tramos entre pistas consecutivas en objetos simples con `construirTramos()`, que guardan ambas pistas, la diferencia y un tipo ("sube", "baja", "igual"). Sobre esa estructura ya ordenada se calculan la proporcion de tramos crecientes y la variabilidad, replicando la logica de clasificacion ya validada en el 027.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `tramos`: array de objetos `{tramo, pistaAnterior, pistaSiguiente, diferencia, tipo}` con `construirTramos()`.
4. Si todos los tramos son "igual": `proporcion_crecientes = 0`, `variabilidad = 0`.
5. Si no: calcular `proporcion_crecientes` (tramos "sube" / total) y `variabilidad` sobre los objetos ya construidos.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `proporcion_crecientes >= 0.6` y `variabilidad <= 2`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_crecientes 1, variabilidad 0.67, puntaje_final 27, clasificacion competitivo.
- Caso especial (secuencia decreciente e irregular): `[40,10,35,5]`, bono 0, penalizacion 0.
- Caso borde (secuencia constante): `[15,15,15]`, bono 5, penalizacion 2 → proporcion_crecientes 0, variabilidad 0.