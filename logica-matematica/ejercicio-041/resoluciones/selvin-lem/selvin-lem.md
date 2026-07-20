# Logica matematica 041 - operaciones aritmeticas controladas (analisis)

## Como se planteo el problema
Este ejercicio comparte tematica y dificultad con el 021, por lo que se reutilizo la misma logica ya validada: combinar el puntaje_final (mediana + bono - penalizacion, sin bajar de 0) con la consistencia del grupo (1 - desviacion/promedio) para la clasificacion.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y `desviacion_estandar` del grupo.
4. Calcular `consistencia = 1 - (desviacion_estandar/promedio)` (0 si promedio es 0).
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `puntaje_final >= 25` y `consistencia >= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntaje_final 27, consistencia 0.68, clasificacion competitivo.
- Caso especial (penalizacion excesiva): `[5,6,7]`, bono 0, penalizacion 50 → puntaje_final se protege en 0.
- Caso borde (array vacio): retorna error controlado.