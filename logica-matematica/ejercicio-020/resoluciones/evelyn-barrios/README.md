# Solución Ejercicio 20: Estadísticas Básicas (Media, Mediana, Moda)

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que reciba un arreglo de números y calcule tres medidas de tendencia central:

*   **Media (Promedio)**: La suma de todos los números dividida por la cantidad de números.
*   **Mediana**: El valor central de un conjunto de números ordenados. Si el conjunto tiene un número par de datos, es el promedio de los dos valores centrales.
*   **Moda**: El número que aparece con mayor frecuencia en el conjunto de datos.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `calcularEstadisticas` que devuelve un objeto con las tres medidas.

El algoritmo para cada cálculo es el siguiente:

1.  **Media**:
    *   Se utiliza el método `reduce` para sumar todos los números del arreglo.
    *   Se divide la suma total por la longitud del arreglo.

2.  **Mediana**:
    *   Primero, se crea una copia ordenada del arreglo de números.
    *   Se encuentra el índice central.
    *   Si el número de elementos es impar, la mediana es el número en el índice central.
    *   Si es par, la mediana es el promedio de los dos números centrales.

3.  **Moda**:
    *   Se utiliza un mapa de frecuencias (un objeto) para contar las apariciones de cada número.
    *   Se itera sobre este mapa para encontrar el número (o números) con la frecuencia más alta. La solución maneja el caso de que haya múltiples modas.

4.  **Resultado**: La función principal `calcularEstadisticas` orquesta estas tres operaciones y devuelve un único objeto con los resultados.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un conjunto de datos estándar.
*   Un conjunto con un número par de elementos para probar la lógica de la mediana.
*   Un conjunto con múltiples modas.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-20/resoluciones/evelyn-barrios/evelyn-barrios.js
```