# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de destinos turísticos con su nombre y costo del viaje.

- Proceso:
  - Recorrer los destinos registrados.
  - Redondear cada costo a dos decimales.
  - Guardar el detalle de cada destino.
  - Sumar los costos redondeados.
  - Redondear el costo total.

- Salida:
  - Lista de destinos con costos ajustados.
  - Costo total del viaje con dos decimales.

## Reglas identificadas

1. Todos los costos deben manejarse con máximo dos decimales.
2. Cada costo individual debe redondearse antes de calcular el total.
3. El costo final del viaje debe mostrarse con precisión de dos decimales.

## Pruebas

### Caso normal

Entrada:

- Destinos:
  - París: 850.456
  - Roma: 720.789
  - Tokio: 1250.555

Resultado esperado:

- Detalle:
  - París: 850.46
  - Roma: 720.79
  - Tokio: 1250.56

- Costo total: 2821.81

### Caso borde

Entrada:

- Destinos:
  - Lima: 500

Resultado esperado:

- Detalle:
  - Lima: 500

- Costo total: 500

## Explicacion final

La solución funciona porque recorre la lista de destinos y aplica un proceso de redondeo para evitar errores de precisión en los costos. Después almacena los valores ajustados y acumula el precio total del viaje, entregando resultados con una cantidad fija de decimales.