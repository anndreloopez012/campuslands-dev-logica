# Solución Ejercicio 23: Cálculo de Determinante de una Matriz

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que calcule el determinante de una matriz cuadrada. El determinante es un valor escalar que proporciona información importante sobre la matriz y es fundamental en álgebra lineal.

La función debe ser capaz de manejar al menos matrices de 2x2 y 3x3.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `calcularDeterminante` que recibe una matriz como argumento.

El algoritmo sigue estos pasos:

1.  **Validación de Dimensiones**:
    *   La función primero verifica si la matriz es cuadrada (mismo número de filas y columnas). Si no lo es, o si no es de 2x2 o 3x3, devuelve un mensaje de error.

2.  **Cálculo para Matriz 2x2**:
    *   Si la matriz es de 2x2, se aplica la fórmula `ad - bc`.

3.  **Cálculo para Matriz 3x3**:
    *   Si la matriz es de 3x3, se aplica la **Regla de Sarrus**.
    *   Esta regla consiste en sumar los productos de las diagonales principales y restar los productos de las diagonales secundarias.

4.  **Resultado**: La función devuelve el valor numérico del determinante.

Este enfoque divide el problema según el tamaño de la matriz, aplicando la fórmula correcta en cada caso.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   El cálculo del determinante de una matriz 2x2.
*   El cálculo del determinante de una matriz 3x3.
*   Un caso con una matriz no cuadrada para probar la validación.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-23/resoluciones/evelyn-barrios/evelyn-barrios.js
```