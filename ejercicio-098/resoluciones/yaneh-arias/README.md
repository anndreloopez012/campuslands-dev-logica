# Ejercicio 098: Normalización de Puntajes en Soldadura

## ¿Cómo pensé el problema?
1. Analicé las entradas: un conjunto de puntajes de control de calidad de soldaduras y el rango objetivo (por ejemplo, entre 0 y 1).
2. Localicé el valor mínimo y máximo de la muestra para determinar la escala base.
3. Apliqué la fórmula matemática de normalización (Min-Max Scaling) a cada elemento de la lista para llevarlos proporcionalmente al nuevo rango.

## Reglas Aplicadas
* Validación de listas de puntajes vacías.
* Control de división por cero en caso de que todos los puntajes de la muestra sean idénticos.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-098/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista de cuatro puntajes normalizados en la escala de [0, 1].
* **Caso Borde:** Lista con un solo elemento para verificar el manejo seguro de denominadores cero.
