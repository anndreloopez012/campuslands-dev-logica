# Logica matematica 052 - probabilidad basica (intermedio)

## Como se planteo el problema
Se subio un nivel respecto al ejercicio 012: antes de calcular, se organizan los jugadores en objetos simples con `construirJugadores()`, guardando sus puntos, su probabilidad individual respecto al total, y si son el jugador top. Sobre esa estructura ya ordenada se obtiene la probabilidad del jugador top, combinandola con el puntaje_final para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `puntos_totales` con un ciclo y acumulador.
4. Construir `jugadores`: array de objetos `{id, puntos, probabilidad_individual, esTop}` con `construirJugadores()`.
5. Obtener `probabilidad_top` del jugador marcado como esTop.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `probabilidad_top >= 0.35` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → probabilidad_top 0.353, puntaje_final 27, clasificacion competitivo.
- Caso especial (puntos parejos): `[20,20,20,20]`, bono 0, penalizacion 0 → probabilidad_top 0.25, clasificacion principiante.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.