# Ejercicio 078: Normalización de Puntajes en Soldadura

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista con los puntajes de calidad obtenidos en las pruebas de soldadura.
2. Identifiqué los valores mínimo y máximo de la lista para establecer el rango de escala.
3. Apliqué la fórmula de normalización Min-Max ( / (max - min)$) para transformar cada valor en una escala estandarizada entre 0 y 1, manejando el caso especial de división por cero si todos los puntajes son iguales.

## Reglas Aplicadas
* Validación de listas vacías para prevenir errores de ejecución.
* Control del caso límite donde el valor máximo es igual al mínimo.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-078/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista con puntajes variados de calidad de soldadura.
* **Caso Borde:** Lista con puntajes totalmente idénticos para verificar la estabilidad del algoritmo.
