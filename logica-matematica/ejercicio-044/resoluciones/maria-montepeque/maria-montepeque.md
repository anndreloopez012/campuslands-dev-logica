# Ejercicio 044 - Rangos y maximos: inventario de motos

## Analisis

- Entrada: una lista de motos (cada una con `modelo`, `precio` y `stock`) y un rango de precio definido por `precioMin` y `precioMax`.
- Proceso: filtrar las motos cuyo precio esta dentro del rango (incluyendo los limites) y, dentro de ese subconjunto, encontrar la moto con mayor stock.
- Salida: un objeto con las motos que quedaron dentro del rango, la cantidad de motos encontradas, la moto con mayor stock y una clasificacion textual del resultado.

## Reglas identificadas

1. Una moto pertenece al rango si su precio es mayor o igual a `precioMin` y menor o igual a `precioMax`.
2. La moto con mayor stock se calcula solo entre las motos que quedaron dentro del rango, no sobre todo el inventario.
3. Si el inventario esta vacio, se clasifica como `inventario vacio`.
4. Si el inventario tiene datos pero ninguna moto cae en el rango, se clasifica como `sin motos en rango`.
5. Si hay al menos una moto en el rango, se clasifica como `inventario dentro de rango` y se calcula la de mayor stock.

## Pruebas

### Caso normal

Entrada:

```text
inventario: [
  { modelo: 'Yamaha FZ', precio: 8500, stock: 12 },
  { modelo: 'Honda CB1', precio: 9200, stock: 20 },
  { modelo: 'Suzuki GN', precio: 7800, stock: 5 },
  { modelo: 'Bajaj Pulsar', precio: 10500, stock: 15 }
]
precioMin: 7500
precioMax: 9500
```

Resultado esperado:

```text
motosEnRango: Yamaha FZ, Honda CB1, Suzuki GN
cantidadEnRango: 3
motoMayorStock: Honda CB1
clasificacion: inventario dentro de rango
```

### Caso borde

Entrada:

```text
inventario: (el mismo de arriba)
precioMin: 20000
precioMax: 30000
```

Resultado esperado:

```text
motosEnRango: []
cantidadEnRango: 0
motoMayorStock: null
clasificacion: sin motos en rango
```

Tambien se probo con `inventario: []`, que devuelve `clasificacion: 'inventario vacio'`.

## Explicacion final

La solucion separa el problema en dos pasos claros: primero filtrar por rango de precio y despues reducir ese subconjunto para encontrar el maximo stock. Usar `filter` seguido de `reduce` evita mezclar ambas condiciones en un solo ciclo y hace explicito que el maximo se calcula unicamente sobre las motos filtradas. Los casos de inventario vacio y sin coincidencias en rango se manejan de forma explicita y separada, evitando que `reduce` falle sobre un arreglo vacio.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.