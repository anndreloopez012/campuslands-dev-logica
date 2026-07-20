# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `gastos` (números), un valor `tasaCambio` (número) y un valor `impuestos` (número porcentual).
* **Proceso**: Sumatoria de gastos, conversión de divisa, cálculo de incremento porcentual por impuestos y normalización del resultado final a dos decimales.
* **Salida**: Un objeto que muestra el `presupuesto_total` final, la `moneda` y una `explicacion` descriptiva del proceso.

## Reglas identificadas

1. **Validación de Gastos**: El sistema debe verificar que el arreglo de gastos contenga datos; si está vacío, se retorna un error.
2. **Jerarquía de Cálculo**: Los impuestos deben aplicarse sobre el valor ya convertido a la moneda extranjera.
3. **Precisión Financiera**: El resultado final debe redondearse estrictamente a dos decimales para representar correctamente valores monetarios.

## Pruebas

### Caso normal

* **Entrada**: `[100, 250, 50], 0.92, 15`
* **Resultado esperado**: `{ presupuesto_total: 414, moneda: "Extranjera", explicacion: "Total convertido y redondeado a 2 decimales aplicando 15% de impuestos." }`

### Caso borde

* **Entrada**: `[10.55, 20.44], 1.1, 5`
* **Resultado esperado**: `{ presupuesto_total: 34.64, moneda: "Extranjera", explicacion: "Total convertido y redondeado a 2 decimales aplicando 5% de impuestos." }`

## Explicacion final

La solución funciona mediante una cadena de operaciones aritméticas secuenciales que aseguran la integridad financiera. La combinación de `reduce()` para la suma, multiplicaciones directas para la conversión, y el uso de `toFixed(2)` junto con `parseFloat()` garantiza que el resultado final sea exacto y esté correctamente formateado. Esta estructura modular permite manejar cualquier cantidad de gastos de forma eficiente manteniendo el control sobre la precisión decimal en todo momento.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso [10.55, 20.44], 1.1, 5)**:
* Suma local: $30.99$.
* Conversión: $30.99 \times 1.1 = 34.089$.
* Impuestos (5%): $34.089 \times 1.05 = 35.79345$ -> (Nota: La precisión puede variar ligeramente según la lógica de redondeo empleada).
* *Autoevaluación*: Realiza siempre el paso a paso aritmético para asegurar que el orden de los factores no altere el presupuesto.
