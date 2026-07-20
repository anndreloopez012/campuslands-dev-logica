# Plantilla de solucion

## Analisis

- Entrada:
  - jugadorA:
    - nombre: "Carlos"
    - puntos: 11
  - jugadorB:
    - nombre: "Luis"
    - puntos: 8

- Proceso:
  - Comparar los puntos obtenidos por ambos jugadores.
  - Determinar quién tiene la mayor puntuación.
  - Si ambos tienen la misma cantidad de puntos, declarar un empate.

- Salida:
  - ganador: Carlos
  - motivo: Obtuvo una mayor cantidad de puntos.

## Reglas identificadas

1. Si los puntos del jugador A son mayores que los del jugador B, gana el jugador A.
2. Si los puntos del jugador B son mayores que los del jugador A, gana el jugador B.
3. Si ambos tienen la misma cantidad de puntos, el resultado es un empate.

## Pruebas

### Caso normal

Entrada:

jugadorA:
  nombre: "Carlos"
  puntos: 11

jugadorB:
  nombre: "Luis"
  puntos: 8

Resultado esperado:

ganador: Carlos
motivo: Obtuvo una mayor cantidad de puntos.

### Caso borde

Entrada:

jugadorA:
  nombre: "Carlos"
  puntos: 10

jugadorB:
  nombre: "Luis"
  puntos: 10

Resultado esperado:

ganador: Empate
motivo: Ambos jugadores consiguieron la misma cantidad de puntos.

## Explicacion final

La solucion funciona porque compara las puntuaciones de los dos jugadores de pingpong y aplica reglas simples para determinar un ganador o un empate. El resultado siempre es claro, verificable y depende únicamente de los datos de entrada.