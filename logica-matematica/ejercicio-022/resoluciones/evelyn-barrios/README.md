# Solución Ejercicio 22: Multiplicación de Matrices

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que multiplique dos matrices, A y B.

La multiplicación de matrices es una operación clave en álgebra lineal. Para que dos matrices puedan multiplicarse, el número de columnas de la primera matriz (A) debe ser igual al número de filas de la segunda matriz (B).

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `multiplicarMatrices` que recibe dos matrices como argumentos.

El algoritmo es el siguiente:

1.  **Validación de Dimensiones**:
    *   La función primero verifica si el número de columnas de la matriz A es igual al número de filas de la matriz B. Si no es así, la multiplicación no es posible y se devuelve un error.

2.  **Inicialización de la Matriz Resultado**:
    *   Se crea una nueva matriz `resultado` con las dimensiones correctas: tendrá el mismo número de filas que A y el mismo número de columnas que B.
    *   Esta matriz se inicializa con ceros.

3.  **Proceso de Multiplicación**:
    *   Se utilizan tres bucles anidados para realizar el cálculo:
        *   El primer bucle itera sobre las filas de la matriz A.
        *   El segundo bucle itera sobre las columnas de la matriz B.
        *   El tercer bucle (interno) itera sobre las columnas de A (o las filas de B).
    *   En cada paso del bucle interno, se multiplica el elemento correspondiente de la fila de A por el elemento de la columna de B y se suma al valor en `resultado[i][j]`.

4.  **Resultado**: La función devuelve la nueva matriz resultante de la multiplicación.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   La multiplicación de dos matrices 2x2.
*   Un caso donde la multiplicación no es posible debido a dimensiones incorrectas.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-22/resoluciones/evelyn-barrios/evelyn-barrios.js
```