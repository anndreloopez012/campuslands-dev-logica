# Logica matematica 050 - redondeo y precision (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 030: antes de calcular, se organizan los costos en objetos simples con `construirCostos()`, guardando el costo original, su version redondeada, y el error entre ambos. Sobre esa estructura ya ordenada se calculan el error promedio y el maximo, replicando la logica de clasificacion ya validada en el 030.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `costos`: array de objetos `{id, costo, redondeado, error}` con `construirCostos()`.
4. Calcular `error_redondeo_promedio` y `error_redondeo_maximo` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `error_redondeo_promedio <= 0.25` y `error_redondeo_maximo <= 0.4`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo, todos enteros): `[12,18,25,30]`, bono 8, penalizacion 3 → error_redondeo_promedio 0, error_redondeo_maximo 0, puntaje_final 27, clasificacion competitivo.
- Caso especial (decimales cercanos a 0.5): `[10.5,20.4,15.5]`, bono 0, penalizacion 0 → error_redondeo_maximo 0.5, clasificacion principiante.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.