# Ejercicio 099: Validaciones Numéricas en Fórmulas Químicas

## ¿Cómo pensé el problema?
1. Analicé las entradas: un conjunto de valores numéricos que representan los subíndices de los elementos en una fórmula química.
2. Recorrí la estructura aplicando condiciones estrictas para verificar que cada valor sea un número entero estrictamente mayor a cero.
3. Determiné si el conjunto cumple con las restricciones químicas y estructurales necesarias.

## Reglas Aplicadas
* Validación de listas vacías.
* Verificación de tipos de datos, enteros y rangos positivos para cada subíndice.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-099/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Subíndices válidos ([2, 1, 4]).
* **Caso Borde:** Subíndices con un valor negativo ([2, -1, 3]) para comprobar el rechazo por regla numérica.
