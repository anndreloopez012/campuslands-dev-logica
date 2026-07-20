# Solución Ejercicio 21: Transposición de una Matriz

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que calcule la transpuesta de una matriz dada.

La transposición de una matriz es una operación que consiste en intercambiar sus filas por sus columnas. La primera fila de la matriz original se convierte en la primera columna de la matriz transpuesta, la segunda fila en la segunda columna, y así sucesivamente.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `transponerMatriz` que recibe una matriz (un arreglo de arreglos) como argumento.

El algoritmo es el siguiente:

1.  **Validación de Entradas**:
    *   La función primero verifica si la matriz de entrada está vacía o si sus filas tienen longitudes inconsistentes, en cuyo caso devuelve un error.

2.  **Inicialización de la Matriz Transpuesta**:
    *   Se determinan las dimensiones de la matriz original (número de filas y columnas).
    *   Se crea una nueva matriz vacía (`transpuesta`) con las dimensiones intercambiadas: tendrá tantas filas como columnas tenía la original, y cada fila se inicializa como un arreglo vacío.

3.  **Proceso de Transposición**:
    *   Se utilizan dos bucles anidados para recorrer la matriz original.
    *   El bucle exterior recorre las filas de la matriz original.
    *   El bucle interior recorre las columnas de la matriz original.
    *   En cada paso, el elemento `matriz[i][j]` se asigna a `transpuesta[j][i]`, efectuando así el intercambio de fila por columna.

4.  **Resultado**: La función devuelve la nueva matriz transpuesta.

Este método es una implementación directa y clara del concepto matemático de transposición.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Una matriz cuadrada (mismo número de filas y columnas).
*   Una matriz rectangular.
*   Una matriz con una sola fila.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-21/resoluciones/evelyn-barrios/evelyn-barrios.js
```