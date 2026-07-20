# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con los nombres de los luchadores disponibles para un torneo de kickboxing.

- Proceso:
  - Comparar cada luchador con los demás.
  - Contar las parejas únicas que pueden enfrentarse.
  - Evitar contar un mismo combate dos veces.

- Salida:
  - Cantidad total de combates posibles.

## Reglas identificadas

1. Cada combate debe estar formado por dos luchadores diferentes.
2. Una misma pareja de luchadores no debe contarse más de una vez.
3. Todos los luchadores disponibles deben participar en las posibles combinaciones.

## Pruebas

### Caso normal

Entrada:

- Luchadores:
  - Carlos
  - Ana
  - Luis
  - Sofía

Resultado esperado:

- Combates posibles: 6

### Caso borde

Entrada:

- Luchadores:
  - Carlos

Resultado esperado:

- Combates posibles: 0

## Explicacion final

La solución funciona porque utiliza dos ciclos para comparar cada luchador con los que aparecen después de él en la lista. Esto permite generar todas las combinaciones posibles sin repetir enfrentamientos, obteniendo el número total de combates disponibles.