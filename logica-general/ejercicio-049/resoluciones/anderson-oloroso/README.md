# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de escenas de una película de miedo.
  - Cada escena contiene un nombre y un nivel de terror.

- Proceso:
  - Recorrer las escenas en orden.
  - Evaluar el nivel de terror de cada escena.
  - Cambiar el estado de la película según la intensidad.
  - Guardar el estado generado para cada escena.

- Salida:
  - Historial de estados de la película durante cada escena.

## Reglas identificadas

1. Un nivel de terror menor a 5 mantiene el estado "Tranquilo".
2. Un nivel de terror entre 5 y 7 cambia el estado a "Tensión".
3. Un nivel de terror de 8 o más cambia el estado a "Terror extremo".

## Pruebas

### Caso normal

Entrada:

- Escenas:
  - Inicio misterioso: nivel 3
  - Aparición del fantasma: nivel 7
  - Persecución final: nivel 10

Resultado esperado:

- Inicio misterioso: Tranquilo
- Aparición del fantasma: Tensión
- Persecución final: Terror extremo

### Caso borde

Entrada:

- Escena:
  - Susurro oscuro: nivel 5

Resultado esperado:

- Susurro oscuro: Tensión

## Explicacion final

La solución funciona porque simula el cambio de estado de una película mientras avanza por sus escenas. Utiliza condiciones para determinar el nivel de terror actual y almacena cada cambio en un historial, permitiendo observar la evolución del estado de la película.