# Solución Ejercicio 11: Verificador de Números Palíndromos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que determine si un número entero dado es un palíndromo.

Un número palíndromo es aquel que se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo, 121, 3443 y 8 son números palíndromos.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `esNumeroPalindromo` que recibe un número como argumento. El enfoque se basa en revertir el número matemáticamente y luego compararlo con el original.

El algoritmo es el siguiente:

1.  **Validación de Entradas**:
    *   La función primero verifica si el número es negativo. Por convención, los números negativos no se consideran palíndromos.

2.  **Proceso de Reversión**:
    *   Se guarda una copia del número original para la comparación final.
    *   Se inicializa una variable `numeroRevertido` en 0.
    *   Se utiliza un bucle `while` que se ejecuta mientras el número a procesar sea mayor que 0.
    *   En cada iteración, se extrae el último dígito (`numero % 10`).
    *   Este dígito se añade al `numeroRevertido`, que se multiplica por 10 en cada paso para "hacer espacio" para el nuevo dígito.
    *   Se elimina el último dígito del número original usando `Math.floor(numero / 10)`.

3.  **Comparación y Resultado**:
    *   Una vez que el bucle termina, se compara el `numeroRevertido` con la copia del número original.
    *   Si son iguales, la función devuelve `true`; de lo contrario, devuelve `false`.

Este método es eficiente y realiza la comprobación utilizando únicamente operaciones aritméticas.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número palíndromo (121).
*   Un número que no es palíndromo (123).
*   Un número de un solo dígito, que siempre es palíndromo.
*   Un número negativo.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-11/resoluciones/evelyn-barrios/evelyn-barrios.js
```