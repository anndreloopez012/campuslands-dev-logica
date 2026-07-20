# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de ilustraciones con título, cantidad de capas y resolución.

- Proceso:
  - Recorrer cada ilustración.
  - Verificar que tenga al menos una capa.
  - Comprobar que la resolución sea igual o superior a 1080.
  - Asignar un estado según las reglas del estudio.

- Salida:
  - Lista de ilustraciones con su estado de aprobación.

## Reglas identificadas

1. Una ilustración sin capas es rechazada.
2. Si la resolución es menor a 1080, requiere mejoras.
3. Si cumple ambas condiciones, la ilustración es aprobada.

## Pruebas

### Caso normal

Entrada:

- Paisaje: 5 capas, resolución 1920
- Retrato: 3 capas, resolución 720

Resultado esperado:

- Paisaje: Aprobada
- Retrato: Requiere mejoras

### Caso borde

Entrada:

- Boceto: 0 capas, resolución 1080

Resultado esperado:

- Boceto: Rechazada

## Explicacion final

La solución funciona porque aplica las reglas de negocio a cada ilustración mediante condiciones. Evalúa primero la cantidad de capas y luego la resolución, asignando el estado correspondiente según los requisitos establecidos.