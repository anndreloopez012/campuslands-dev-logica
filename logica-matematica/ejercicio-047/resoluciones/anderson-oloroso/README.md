# Plantilla de solucion

## Analisis

- Entrada:
  - ID inicial de la playlist.
  - Cantidad de canciones.

- Proceso:
  - Generar una secuencia numérica aumentando 3 al ID anterior.
  - Guardar cada ID en un arreglo.
  - Calcular la suma y el promedio de los IDs.

- Salida:
  - Playlist generada.
  - Suma de los IDs.
  - Promedio de los IDs.

## Reglas identificadas

1. La playlist inicia con el ID proporcionado.
2. Cada nuevo ID aumenta 3 unidades respecto al anterior.
3. Se debe mostrar la playlist, la suma y el promedio.

## Pruebas

### Caso normal

Entrada:

- ID inicial: 100
- Cantidad: 6

Resultado esperado:

- Playlist: [100, 103, 106, 109, 112, 115]
- Suma: 645
- Promedio: 107.50

### Caso borde

Entrada:

- ID inicial: 50
- Cantidad: 1

Resultado esperado:

- Playlist: [50]
- Suma: 50
- Promedio: 50.00

## Explicacion final

La solución funciona porque utiliza un ciclo para generar una secuencia numérica donde cada elemento aumenta en 3 unidades. Durante el recorrido almacena los IDs en un arreglo y utiliza un acumulador para calcular la suma. Finalmente obtiene el promedio dividiendo la suma entre la cantidad de canciones.