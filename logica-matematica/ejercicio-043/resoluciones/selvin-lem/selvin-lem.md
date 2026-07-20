# Logica matematica 043 - promedios y medianas (analisis)

## Como se planteo el problema
Este ejercicio comparte tematica y dificultad con el 023, por lo que se reutilizo la misma logica ya validada: combinar si el puntaje_final alcanza el promedio del grupo, con la estabilidad medida a traves del sesgo entre promedio y mediana.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y `mediana`.
4. Calcular `sesgo = promedio - mediana` (0 si hay un solo elemento).
5. Calcular `estabilidad = 1 - (|sesgo|/promedio)` (1 si hay un solo elemento; 0 si promedio es 0).
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `puntaje_final >= promedio` y `estabilidad >= 0.9`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → sesgo -0.25, estabilidad 0.99, puntaje_final 27, clasificacion competitivo.
- Caso especial (partida atipica): `[5,6,7,100]`, bono 0, penalizacion 0.
- Caso borde (un solo elemento): `[15]`, bono 5, penalizacion 2 → sesgo 0, estabilidad 1.