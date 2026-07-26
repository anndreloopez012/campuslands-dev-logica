# Ejercicio 076: Presupuestos y Descuentos en Animación 3D

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista con los costos de los elementos del proyecto de animación 3D (como licencias, renderizado o modelado) y el porcentaje de descuento a aplicar.
2. Sumé todos los costos base para obtener un subtotal acumulado.
3. Calculé el monto del descuento y lo resté del subtotal para obtener el valor final a pagar, asegurando la precisión decimal.

## Reglas Aplicadas
* Validación de listas de costos vacías o porcentajes negativos.
* Uso de acumuladores iterativos y operaciones aritméticas de porcentajes.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-076/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista con tres costos de software/recursos y un descuento del 10%.
* **Caso Borde:** Lista vacía para validar el comportamiento seguro ante falta de datos.
