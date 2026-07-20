# Solución Ejercicio 17: Descomposición en Factores Primos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que, dado un número entero positivo, devuelva un arreglo con sus factores primos.

La descomposición en factores primos es el proceso de encontrar qué números primos se multiplican para dar el número original. Por ejemplo, la descomposición de 12 es `2 * 2 * 3`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `descomponerEnFactoresPrimos` que recibe un número como argumento.

El algoritmo es un método iterativo optimizado:

1.  **Validación de Entradas**:
    *   La función primero verifica si el número es menor o igual a 1, ya que la factorización prima se define para enteros mayores que 1.

2.  **Manejo del Factor 2**:
    *   Se trata por separado el factor 2. Mientras el número sea divisible por 2, se añade el 2 al arreglo de factores y se divide el número por 2. Esto nos permite luego iterar solo sobre números impares.

3.  **Manejo de Factores Impares**:
    *   Se itera desde 3 hasta la raíz cuadrada del número restante, incrementando de dos en dos (3, 5, 7, ...).
    *   Para cada iterador `i`, mientras el número sea divisible por `i`, se añade `i` a los factores y se divide el número por `i`.

4.  **Caso del Último Factor Primo**:
    *   Si después de los bucles el número restante es mayor que 2, significa que ese número restante es en sí mismo un factor primo (por ejemplo, al descomponer 14, después de dividir por 2 queda 7). Se añade al arreglo de factores.

5.  **Resultado**: La función devuelve el arreglo con todos los factores primos encontrados.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número con varios factores primos (360).
*   Un número primo, cuya descomposición es él mismo (29).
*   Un número con factores repetidos.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-17/resoluciones/evelyn-barrios/evelyn-barrios.js
```