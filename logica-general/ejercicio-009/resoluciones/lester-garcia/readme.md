# Plantilla de solucion

## Analisis

- Entrada:
  - Nombre de la película.
  - Estado actual de la película.

- Proceso:
  - Leer el nombre de la película.
  - Leer el estado actual.
  - Comparar el estado con los estados permitidos.
  - Mostrar un mensaje según el estado correspondiente.

- Salida:
  - Un mensaje indicando el estado de la película.

## Reglas identificadas

1. La película puede estar en estado **Disponible**.
2. La película puede estar en estado **Prestada**.
3. La película puede estar en estado **En mantenimiento**.

## Pruebas

### Caso normal

Entrada:

Película: El Conjuro

Estado: Disponible

Resultado esperado:

Película: El Conjuro

Estado: Disponible para préstamo.

### Caso borde

Entrada:

Película: El Conjuro

Estado: Perdida

Resultado esperado:

Película: El Conjuro

Estado no válido.

## Explicacion final

La solución funciona porque simula los posibles estados de una película utilizando una estructura `switch`. Cada estado tiene una acción específica: si la película está disponible puede prestarse, si está prestada se informa al usuario y si está en mantenimiento no puede utilizarse. Además, se contempla un caso por defecto para detectar estados no válidos, haciendo que el comportamiento sea claro, ordenado y verificable.