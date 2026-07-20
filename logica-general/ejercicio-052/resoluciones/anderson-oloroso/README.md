# Plantilla de solucion

## Analisis

- Entrada:
  - Dos jugadores con su nombre y la cantidad de puntos obtenidos.

- Proceso:
  - Comparar la cantidad de puntos de ambos jugadores.
  - Determinar cuál obtuvo la mayor puntuación.
  - Verificar si existe un empate.

- Salida:
  - Nombre del jugador ganador o el mensaje "Empate".

## Reglas identificadas

1. Gana el jugador con mayor cantidad de puntos.
2. Si ambos tienen la misma puntuación, el resultado es un empate.
3. Solo se debe anunciar un ganador o un empate.

## Pruebas

### Caso normal

Entrada:

- Jugador 1: Laura - 11 puntos
- Jugador 2: Carlos - 9 puntos

Resultado esperado:

- Ganador: Laura

### Caso borde

Entrada:

- Jugador 1: Ana - 10 puntos
- Jugador 2: Pedro - 10 puntos

Resultado esperado:

- Empate

## Explicacion final

La solución funciona porque compara las puntuaciones de ambos jugadores utilizando estructuras condicionales. Dependiendo del resultado de la comparación, identifica al jugador con mayor puntaje o determina que existe un empate cuando ambos obtienen la misma cantidad de puntos.