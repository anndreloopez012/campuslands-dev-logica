# Solución Ejercicio 10: Suma de Dígitos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que tome un número entero y calcule la suma de todos sus dígitos individuales. Por ejemplo, para el número 123, la suma sería `1 + 2 + 3 = 6`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `sumarDigitos` que recibe un número como argumento. El enfoque se basa en descomponer el número utilizando operaciones aritméticas básicas.

El algoritmo es el siguiente:

1.  **Manejo de Negativos**: Primero, se toma el valor absoluto del número de entrada usando `Math.abs()`. Esto asegura que el algoritmo funcione correctamente tanto para números positivos como negativos (ej: la suma de dígitos de -123 es la misma que la de 123).

2.  **Inicialización**: Se inicializa una variable `suma` en 0, que acumulará el total.

3.  **Descomposición Iterativa**:
    *   Se utiliza un bucle `while` que se ejecuta mientras el número sea mayor que 0.
    *   **Obtener el último dígito**: Dentro del bucle, se usa el operador módulo (`% 10`) para extraer el último dígito del número.
    *   **Acumular la suma**: Este dígito se suma a la variable `suma`.
    *   **Eliminar el último dígito**: Se actualiza el número dividiéndolo por 10 y truncando el resultado con `Math.floor()` para eliminar el dígito que ya hemos procesado.

4.  **Resultado**: Cuando el bucle termina (porque el número se ha reducido a 0), la variable `suma` contiene el resultado final, y la función lo devuelve.

Este método es puramente matemático, eficiente y no requiere convertir el número a una cadena de texto.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número positivo de varios dígitos.
*   Un número negativo.
*   Un número de un solo dígito.
*   El número 0.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-10/resoluciones/evelyn-barrios/evelyn-barrios.js
```