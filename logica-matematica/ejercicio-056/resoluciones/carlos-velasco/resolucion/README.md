# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `servicios` (objetos con la propiedad `costo`), un porcentaje de `descuento` (decimal) y un porcentaje de `impuesto` (decimal).
* **Proceso**: Sumatoria de costos de servicios, aplicación de descuento condicional por volumen (>3 servicios), cálculo de impuestos y categorización según el costo total final.
* **Salida**: Un objeto que contiene el `costo_final` (con formato de 2 decimales), la `clasificacion` (Básico, Estándar, o Premium) y una `explicacion` del cálculo.

## Reglas identificadas

1. Si la cantidad de servicios es superior a 3, se aplica el descuento sobre el subtotal acumulado.
2. El impuesto se calcula sobre el valor resultante después de aplicar el descuento.
3. La clasificación se basa en rangos: "Premium" (> 1000), "Estándar" (> 500) y "Básico" (<= 500).

## Pruebas

### Caso normal

* **Entrada**: `[{costo: 300}, {costo: 200}, {costo: 300}, {costo: 300}], 0.10, 0.05`
* **Resultado esperado**: `{ costo_final: "1039.50", clasificacion: "Premium", ... }`

### Caso borde

* **Entrada**: `[{costo: 100}], 0.10, 0.05`
* **Resultado esperado**: `{ costo_final: "105.00", clasificacion: "Básico", ... }`

## Explicacion final

La solución funciona gracias a la combinación de métodos funcionales de JavaScript como `.reduce()`, que permite un cálculo ágil de totales sin bucles explícitos. La lógica de negocio está claramente separada en etapas: primero se acumula, luego se aplican los incentivos por volumen y, finalmente, se calculan las cargas fiscales. Esto garantiza que el cálculo sea preciso y que la categorización refleje correctamente la escala del proyecto.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (4 servicios de 300, desc 10%, imp 5%)**:
* Subtotal: $300+200+300+300 = 1100$.
* Descuento (10%): $1100 \times 0.10 = 110 \rightarrow 1100 - 110 = 990$.
* Impuesto (5%): $990 \times 0.05 = 49.5 \rightarrow 990 + 49.5 = 1039.5$.
* Clasificación: $1039.5 > 1000$, por tanto es "Premium".
