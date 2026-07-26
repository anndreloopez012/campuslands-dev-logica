# Ejercicio 079: Validaciones Numéricas en Fórmulas Químicas

## ¿Cómo pensé el problema?
1. Analicé las entradas: un conjunto de valores numéricos que representan las cantidades de átomos de los elementos en una fórmula química.
2. Recorrí cada elemento del arreglo mediante un ciclo para verificar que correspondan estrictamente a números válidos y mayores a cero.
3. Retorné un objeto indicando si la estructura numérica es totalmente apta para cálculos estequiométricos.

## Reglas Aplicadas
* Validación de arreglos vacíos o nulos.
* Verificación de tipos de datos y rangos estrictos (valores positivos mayores a cero).

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-079/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista con cantidades atómicas válidas (ej. [2, 1, 4]).
* **Caso Borde:** Lista que incluye un cero para validar la regla de rechazo por valor no permitido.
