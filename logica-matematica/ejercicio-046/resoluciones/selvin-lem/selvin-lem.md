# Logica matematica 046 - conversion de unidades (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 026: antes de hacer cualquier calculo, se organizan los datos crudos en objetos simples (uno por auto) con `construirAutos()`, que guarda velocidad en km/h, su conversion a mph, y si supera el limite de referencia. Sobre esa estructura ya ordenada se calculan el promedio y la proporcion que supera el limite, replicando la logica de clasificacion ya validada en el 026.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Construir `autos`: array de objetos `{id, velocidad_kmh, velocidad_mph, superaLimite}` con `construirAutos()`.
4. Calcular `promedio_mph` y `superan_limite` sobre los objetos ya construidos.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `promedio_mph >= 13` y `superan_limite >= 0.4`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → promedio_mph 13.2, superan_limite 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (velocidades bajas): `[5,6,7]`, bono 0, penalizacion 0 → superan_limite 0.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.