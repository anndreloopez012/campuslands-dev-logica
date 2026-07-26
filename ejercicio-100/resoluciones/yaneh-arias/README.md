# Ejercicio 100: Simulaciones con Fórmulas en Comida Urbana

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista con las cantidades de productos por pedido, el tiempo base de preparación por unidad y un factor multiplicador por la demanda del entorno urbano.
2. Apliqué un ciclo acumulador iterando sobre cada lote de pedidos para calcular el tiempo estimado mediante la fórmula de simulación.
3. Determiné el tiempo total y el promedio por pedido con control de precisión decimal.

## Reglas Aplicadas
* Validación de arreglos de pedidos vacíos y factores de demanda mayores a cero.
* Uso de fórmulas iterativas para simular escenarios operativos reales.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-100/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Simulación con cuatro lotes de pedidos, tiempo base de 4 minutos y factor de demanda 1.2.
* **Caso Borde:** Simulación con un único pedido y factor estándar para verificar el comportamiento mínimo.
