# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `clientesPorHora` (números), un `precioPromedio` por cliente y un `factorPropina` (decimal, ej: 0.10).
* **Proceso**: Sumatoria del total de clientes, cálculo de la venta base, cálculo de propinas, obtención del total recaudado y clasificación según rangos de rendimiento.
* **Salida**: Un objeto que contiene el `total_recaudado` (formateado a 2 decimales), la `clasificacion` de la jornada y una `explicacion` resumen.

## Reglas identificadas

1. **Totalización**: La cantidad total de clientes es la suma de todos los elementos del arreglo `clientesPorHora`.
2. **Cálculo Financiero**: El total recaudado resulta de sumar la venta base ($Clientes \times Precio$) más el monto de las propinas ($VentaBase \times Factor$).
3. **Clasificación**: Se etiqueta como "Exitoso" si total > 1000, "Rentable" si total > 500, y "En proceso" para valores menores o iguales a 500.

## Pruebas

### Caso normal

* **Entrada**: `[10, 15, 20], 25, 0.10`
* **Resultado esperado**: `{ total_recaudado: "1237.50", clasificacion: "Exitoso", explicacion: "Jornada con 45 clientes. Venta base: $1125, más propinas." }`

### Caso borde

* **Entrada**: `[1], 5, 0`
* **Resultado esperado**: `{ total_recaudado: "5.00", clasificacion: "En proceso", explicacion: "Jornada con 1 clientes. Venta base: $5, más propinas." }`

## Explicacion final

La solución es altamente efectiva porque centraliza el procesamiento de datos en una sola función lineal. El uso de `.reduce()` permite manejar cualquier volumen de horas registradas sin cambiar la lógica base, garantizando escalabilidad. Al aplicar los cálculos financieros de manera secuencial y terminar con una clasificación basada en umbrales claros, el sistema proporciona una lectura inmediata del éxito de la jornada, eliminando la ambigüedad en la interpretación de los números obtenidos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo de ejemplo (Caso normal)**:
* Total clientes: $10+15+20 = 45$.
* Venta base: $45 \times 25 = 1125$.
* Propinas: $1125 \times 0.10 = 112.5$.
* Total: $1125 + 112.5 = 1237.5$.
* Clasificación: $1237.5 > 1000 \rightarrow$ "Exitoso".