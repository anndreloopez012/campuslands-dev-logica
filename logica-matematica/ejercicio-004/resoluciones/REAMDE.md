# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto contiene el `modelo` y la cilindrada (`cc`) de la moto.
- Proceso: Identificar el valor máximo de cilindrada mediante una comparación acumulativa y filtrar elementos que caen dentro de un rango específico [250cc, 600cc].
- Salida: Un objeto que detalla el modelo de mayor cilindrada y cuántas motos cumplen con el rango de cilindrada media.

## Reglas identificadas

1. Identificación del máximo: Comparar la cilindrada (`cc`) de cada moto para encontrar la más alta.
2. Definición de rango: Solo considerar motos cuya cilindrada sea mayor o igual a 250cc y menor o igual a 600cc.
3. Validación: Si el inventario está vacío, retornar un mensaje informativo.

## Pruebas

### Caso normal

Entrada:
[{ modelo: "MT-03", cc: 321 }, { modelo: "Ninja 650", cc: 649 }, { modelo: "CB500F", cc: 471 }]

Resultado esperado:
{ modeloMasPotente: "Kawasaki Ninja 650", cantidadEnRango: 2 }

### Caso borde

Entrada:
[{ modelo: "Scooter", cc: 125 }]

Resultado esperado:
{ modeloMasPotente: "Scooter", cantidadEnRango: 0 }

## Explicacion final

La solución emplea `reduce` para encontrar el valor máximo de manera eficiente en una sola pasada. Posteriormente, se utiliza `filter` para extraer las motos dentro del rango permitido. Esta aproximación es óptima ya que separa la lógica de búsqueda de valor extremo de la lógica de filtrado de rangos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.