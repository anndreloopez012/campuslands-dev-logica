# Solución Ejercicio 06: Secuencia de Fibonacci

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que genere los primeros `n` números de la secuencia de Fibonacci.

La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores. Comienza con 0 y 1. La fórmula de recurrencia es: `F(n) = F(n-1) + F(n-2)`, con los valores iniciales `F(0) = 0` y `F(1) = 1`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `generarFibonacci` que recibe un número `n` (la cantidad de términos a generar). He elegido un enfoque iterativo, ya que es más eficiente en uso de memoria y evita problemas de desbordamiento de pila (stack overflow) que pueden ocurrir con la recursividad para valores grandes de `n`.

El algoritmo es el siguiente:

1.  **Validación de Entradas**:
    *   La función primero verifica si `n` es un número negativo, en cuyo caso devuelve un error, ya que no se puede generar una cantidad negativa de términos.

2.  **Casos Base**:
    *   Si `n` es 0, se devuelve un arreglo vacío.
    *   Si `n` es 1, se devuelve un arreglo con el primer término: `[0]`.

3.  **Cálculo Iterativo**:
    *   Se inicializa un arreglo `secuencia` con los dos primeros términos: `[0, 1]`.
    *   Se utiliza un bucle `while` que se ejecuta mientras la longitud de la `secuencia` sea menor que `n`.
    *   En cada iteración, se calcula el siguiente término sumando los dos últimos elementos de la secuencia.
    *   El nuevo término se añade al final del arreglo `secuencia`.

4.  **Resultado**: Una vez que el bucle termina, el arreglo `secuencia` contiene los `n` primeros números de Fibonacci, y la función lo devuelve.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Generar los primeros 10 términos, un caso estándar.
*   Casos base como generar 1 y 0 términos.
*   Un intento de generar la secuencia para un número negativo para probar la validación.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-06/resoluciones/evelyn-barrios/evelyn-barrios.js
```