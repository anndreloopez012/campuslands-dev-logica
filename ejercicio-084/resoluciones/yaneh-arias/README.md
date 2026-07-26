# Ejercicio 084: Rangos y Máximos en Inventario de Motos

## ¿Cómo pensé el problema?
1. Analicé las entradas: un conjunto de precios correspondientes a los modelos de motos en inventario.
2. Recorrí el arreglo iterativamente para identificar el precio mínimo y el precio máximo de forma segura.
3. Calculé el rango restando el valor mínimo al valor máximo para conocer la dispersión de precios del inventario.

## Reglas Aplicadas
* Validación de listas de precios vacías para prevenir fallos de ejecución.
* Control de extremos numéricos mediante un ciclo de búsqueda eficiente.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-084/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista con cinco precios variados de motos.
* **Caso Borde:** Lista con un solo elemento para comprobar el comportamiento cuando el rango es cero.
