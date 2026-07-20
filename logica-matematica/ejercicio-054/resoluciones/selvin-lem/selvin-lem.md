# Logica matematica 054 - areas y perimetros (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 014: antes de calcular, se organizan los pares (base, altura) en objetos simples con `construirZonas()`, guardando el area, el perimetro y la eficiencia de cada zona individual (a diferencia del 014, que promediaba el area y perimetro globales, aqui se promedian las eficiencias por zona). Sobre esa estructura ya ordenada se calcula la eficiencia promedio, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (minimo 2 elementos, numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `zonas`: array de objetos `{zona, base, altura, area, perimetro, eficiencia}` con `construirZonas()`.
4. Calcular `eficiencia_promedio` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `eficiencia_promedio >= 5` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → eficiencia_promedio 5.21, puntaje_final 27, clasificacion competitivo.
- Caso especial (zona alargada, baja eficiencia): `[2,40]`, bono 0, penalizacion 0.
- Caso borde (menos de 2 valores): retorna error controlado.