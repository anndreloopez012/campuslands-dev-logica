# Plantilla de solucion

## Analisis

- Entrada:
  - Lista de instrucciones necesarias para realizar un viaje.
  - Lista de actividades que ya fueron realizadas.

- Proceso:
  - Recorrer cada instrucción del itinerario.
  - Comparar si la actividad existe en la lista de realizadas.
  - Asignar un estado de completada o pendiente.

- Salida:
  - Lista de actividades con su estado actual.

## Reglas identificadas

1. Una actividad se considera completada si aparece en la lista de realizadas.
2. Una actividad que no ha sido realizada debe marcarse como pendiente.
3. Todas las instrucciones del viaje deben ser evaluadas.

## Pruebas

### Caso normal

Entrada:

- Instrucciones:
  - Reservar hotel
  - Comprar boletos
  - Preparar equipaje
  - Realizar check-in

- Actividades realizadas:
  - Reservar hotel
  - Preparar equipaje

Resultado esperado:

- Reservar hotel: Completada
- Comprar boletos: Pendiente
- Preparar equipaje: Completada
- Realizar check-in: Pendiente

### Caso borde

Entrada:

- Instrucciones:
  - Comprar seguro de viaje

- Actividades realizadas:
  - Ninguna

Resultado esperado:

- Comprar seguro de viaje: Pendiente

## Explicacion final

La solución funciona porque compara cada instrucción del itinerario con las actividades realizadas. Mediante un ciclo y una condición determina el estado de cada tarea, permitiendo identificar qué pasos del viaje ya fueron completados y cuáles faltan.