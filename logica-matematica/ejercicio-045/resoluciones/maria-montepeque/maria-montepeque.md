# Plantilla de solucion

## Analisis

- Entrada: una lista de ordenes de reparacion de un taller mecanico, cada una con `vehiculo`, `costo` y `tiempoHoras`. Tambien un costo minimo aceptable y un limite de horas diarias.
- Proceso: separar las ordenes en aceptadas o rechazadas segun el costo minimo, sumar las horas de las ordenes aceptadas, comparar esa suma contra el limite diario y obtener el costo mas bajo entre las aceptadas.
- Salida: un objeto con las ordenes aceptadas, las rechazadas, el total de horas, si se esta dentro del limite y el costo minimo entre las aceptadas.

## Reglas identificadas

1. Una orden solo se acepta si su costo es mayor o igual al costo minimo definido (`costoMinimo`).
2. Las horas de las ordenes aceptadas se suman; si el total supera el limite diario (`limiteHoras`), el taller queda fuera del limite.
3. El costo minimo entre las ordenes aceptadas se calcula solo si existe al menos una orden aceptada; de lo contrario es `null`.

## Pruebas

### Caso normal

Entrada:

```text
[
  { vehiculo: "Toyota Corolla", costo: 120, tiempoHoras: 2 },
  { vehiculo: "Honda Civic", costo: 30, tiempoHoras: 1 },
  { vehiculo: "Nissan Sentra", costo: 200, tiempoHoras: 4 },
  { vehiculo: "Mazda 3", costo: 80, tiempoHoras: 3 }
]
```

Resultado esperado:

```text
ordenesAceptadas: Toyota Corolla, Nissan Sentra, Mazda 3
ordenesRechazadas: Honda Civic
horasTotales: 9
dentroDelLimite: false
costoMinimoOrden: 80
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
ordenesAceptadas: []
ordenesRechazadas: []
horasTotales: 0
dentroDelLimite: true
costoMinimoOrden: null
```

## Explicacion final

La solucion separa el problema en tres pasos claros: filtrar por costo minimo, acumular horas y comparar contra el limite, y calcular el costo minimo entre lo aceptado. Al usar `reduce` y `Math.min` sobre las ordenes ya filtradas se evita mezclar reglas dentro de un mismo ciclo, y el caso de lista vacia se maneja de forma explicita al inicio para que el taller no falle si un dia no llegan ordenes.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.