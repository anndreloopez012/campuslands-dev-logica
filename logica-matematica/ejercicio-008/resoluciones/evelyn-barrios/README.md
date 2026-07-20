# Solución Ejercicio 08: Máximo Común Divisor (MCD)

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que calcule el Máximo Común Divisor (MCD) de dos números enteros positivos.

El MCD de dos números es el mayor número entero que los divide a ambos sin dejar residuo. Por ejemplo, el MCD de 48 y 18 es 6.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `maximoComunDivisor` que utiliza el **Algoritmo de Euclides**. Este método es extremadamente eficiente y elegante para calcular el MCD.

He elegido la versión iterativa del algoritmo por su claridad y para evitar cualquier riesgo de desbordamiento de pila (stack overflow) con números muy grandes.

El algoritmo funciona de la siguiente manera:

1.  **Validación de Entradas**: La función primero verifica que ambos números sean enteros positivos.

2.  **Algoritmo de Euclides (Iterativo)**:
    *   Se utiliza un bucle `while` que se ejecuta mientras el segundo número (`b`) no sea cero.
    *   En cada iteración, se guarda temporalmente el valor de `b`.
    *   El nuevo valor de `b` se convierte en el residuo de la división de `a` entre `b` (`a % b`).
    *   El nuevo valor de `a` se convierte en el valor temporal que guardamos.
    *   Este proceso se repite, reduciendo los números en cada paso.

3.  **Resultado**: Cuando el bucle termina (porque `b` es 0), el valor que queda en `a` es el Máximo Común Divisor.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un caso estándar como MCD(48, 18).
*   Un caso con números más grandes.
*   Un caso donde los números son primos entre sí (coprimos), cuyo MCD es 1.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-08/resoluciones/evelyn-barrios/evelyn-barrios.js
```