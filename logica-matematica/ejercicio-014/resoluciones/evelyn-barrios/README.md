# Solución Ejercicio 14: Verificador de Números de Armstrong

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que determine si un número entero dado es un Número de Armstrong.

Un Número de Armstrong (o número narcisista) es un número que es igual a la suma de sus propios dígitos, cada uno elevado a la potencia del número total de dígitos.

Por ejemplo, 153 es un Número de Armstrong porque tiene 3 dígitos, y `1³ + 5³ + 3³ = 1 + 125 + 27 = 153`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `esNumeroArmstrong` que recibe un número como argumento.

El algoritmo es el siguiente:

1.  **Validación y Preparación**:
    *   La función primero verifica si el número es negativo, en cuyo caso devuelve `false`.
    *   Se convierte el número a una cadena de texto para determinar fácilmente el número de dígitos (`longitud`).

2.  **Cálculo de la Suma**:
    *   Se inicializa una variable `suma` en 0.
    *   Se guarda una copia del número original para la iteración.
    *   Se utiliza un bucle `while` que se ejecuta mientras el número a procesar sea mayor que 0.
    *   En cada iteración, se extrae el último dígito (`numero % 10`).
    *   Este dígito se eleva a la potencia de la `longitud` total de dígitos y se suma al acumulador `suma`.
    *   Se elimina el último dígito del número original usando `Math.floor(numero / 10)`.

3.  **Comparación y Resultado**:
    *   Una vez que el bucle termina, se compara la `suma` calculada con el número original.
    *   Si son iguales, la función devuelve `true`; de lo contrario, devuelve `false`.

Este método descompone el problema de forma lógica y utiliza operaciones matemáticas para llegar al resultado.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un Número de Armstrong conocido (153).
*   Un número que no es de Armstrong (123).
*   Un número de un solo dígito (que siempre son de Armstrong).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-14/resoluciones/evelyn-barrios/evelyn-barrios.js
```