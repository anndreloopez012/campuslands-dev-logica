# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con los resultados de varios partidos de pingpong.

- Proceso:
  - Recorrer los resultados registrados.
  - Contar la cantidad de victorias obtenidas.
  - Dividir las victorias entre el total de partidos.
  - Convertir el resultado a porcentaje.

- Salida:
  - Cantidad de victorias.
  - Total de partidos.
  - Probabilidad de victoria expresada en porcentaje.

## Reglas identificadas

1. Cada partido registrado debe contar dentro del total.
2. La probabilidad se calcula como victorias dividido entre partidos jugados.
3. El resultado final debe mostrarse como porcentaje.

## Pruebas

### Caso normal

Entrada:

- Resultados:
  - Victoria
  - Derrota
  - Victoria
  - Victoria
  - Derrota

Resultado esperado:

- Victorias: 3
- Total partidos: 5
- Probabilidad: 60.00%

### Caso borde

Entrada:

- Resultados:
  - Victoria

Resultado esperado:

- Victorias: 1
- Total partidos: 1
- Probabilidad: 100.00%

## Explicacion final

La solución funciona porque recorre el historial de partidos y cuenta cuántas veces aparece una victoria. Luego utiliza una división entre las victorias y el total de partidos para calcular la probabilidad, mostrando el resultado como porcentaje.