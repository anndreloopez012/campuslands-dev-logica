# Solución Ejercicio 13: Algoritmo de Luhn

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es implementar el Algoritmo de Luhn (también conocido como fórmula de módulo 10) para validar una secuencia de dígitos, como un número de tarjeta de crédito.

El algoritmo verifica la validez de un número a través de una suma de comprobación (checksum).

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `validarLuhn` que recibe un número o una cadena de texto con los dígitos.

El algoritmo sigue estos pasos:

1.  **Preparación**: La función primero convierte la entrada a una cadena de texto para poder iterar sobre sus dígitos fácilmente.

2.  **Iteración y Suma**:
    *   Se itera sobre los dígitos del número de derecha a izquierda.
    *   Se utiliza un contador para saber si estamos en una posición par o impar desde la derecha.
    *   **Para los dígitos en posiciones impares** (el primero, tercero, etc., desde la derecha): se suman directamente al total.
    *   **Para los dígitos en posiciones pares**: se duplican. Si el resultado de la duplicación es un número de dos dígitos (ej: 7 * 2 = 14), se suman los dígitos de ese resultado (1 + 4 = 5). Una forma sencilla de hacer esto es restar 9 si el valor duplicado es mayor que 9.

3.  **Verificación Final**:
    *   Una vez sumados todos los valores procesados, se comprueba si el total es divisible por 10 (es decir, `total % 10 === 0`).
    *   Si lo es, el número es válido y la función devuelve `true`. De lo contrario, devuelve `false`.

Este método es una implementación directa y eficiente del algoritmo estándar.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número de tarjeta de crédito válido.
*   Un número de tarjeta de crédito inválido.
*   Un número simple para verificar la lógica.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-13/resoluciones/evelyn-barrios/evelyn-barrios.js
```