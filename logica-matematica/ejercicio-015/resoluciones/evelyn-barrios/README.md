# Solución Ejercicio 15: Verificador de Números Perfectos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que determine si un número entero dado es un Número Perfecto.

Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios positivos (todos sus divisores excepto él mismo).

Por ejemplo, 6 es un número perfecto porque sus divisores propios son 1, 2 y 3, y `1 + 2 + 3 = 6`. Otro ejemplo es 28, cuyos divisores propios son 1, 2, 4, 7 y 14, y `1 + 2 + 4 + 7 + 14 = 28`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `esNumeroPerfecto` que recibe un número como argumento.

El algoritmo para encontrar la suma de los divisores está optimizado para ser eficiente:

1.  **Validación de Entradas**:
    *   La función primero verifica si el número es menor o igual a 1. Por definición, los números perfectos son positivos y mayores que 1.

2.  **Cálculo de la Suma de Divisores**:
    *   Se inicializa una variable `suma` en 1, ya que 1 es un divisor propio para todos los números mayores que 1.
    *   Se itera desde 2 hasta la raíz cuadrada del número. Esta es una optimización clave: si encontramos un divisor `i`, entonces `numero / i` también es un divisor.
    *   En cada iteración, si `i` divide al número sin dejar residuo, se suman tanto `i` como `numero / i` a la `suma`.
    *   Se tiene en cuenta el caso especial de que el número sea un cuadrado perfecto (ej: 36, donde `i` y `numero / i` serían ambos 6), para no sumar el mismo divisor dos veces.

3.  **Comparación y Resultado**:
    *   Una vez que el bucle termina, se compara la `suma` de los divisores propios con el número original.
    *   Si son iguales, la función devuelve `true`; de lo contrario, devuelve `false`.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número perfecto conocido (28).
*   Un número que no es perfecto (12).
*   El primer número perfecto (6).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-15/resoluciones/evelyn-barrios/evelyn-barrios.js
```