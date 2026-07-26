# Ejercicio 080: Simulaciones con Fórmulas en Comida Urbana

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista con los pedidos base de comida urbana, el factor de crecimiento porcentual y el número de ciclos a simular.
2. Utilicé ciclos anidados para recorrer los pedidos y aplicar una fórmula de proyección compuesta a lo largo de cada ciclo temporal.
3. Almacené los resultados de cada etapa en un objeto estructurado, asegurando un formato claro y con control de precisión decimal.

## Reglas Aplicadas
* Validación de arreglos de entrada vacíos o ciclos negativos.
* Uso de funciones matemáticas nativas para potencias y crecimiento acumulativo.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-080/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Simulación con 3 puestos de comida y un factor de crecimiento del 5% durante 3 ciclos.
* **Caso Borde:** Lista de pedidos vacía para comprobar la respuesta segura del sistema.
