# Solución Ejercicio 07: Criba de Eratóstenes

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que encuentre todos los números primos hasta un número entero `n` dado.

A diferencia de verificar un solo número, aquí necesitamos generar una lista de todos los primos en un rango. Para esta tarea, el algoritmo de la Criba de Eratóstenes es mucho más eficiente que llamar repetidamente a una función `esNumeroPrimo`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `cribaDeEratostenes` que recibe un número `n` como límite superior.

El algoritmo funciona de la siguiente manera:

1.  **Inicialización**:
    *   Se crea un arreglo booleano `esPrimo` de tamaño `n + 1`.
    *   Se inicializan todos sus valores a `true`, asumiendo que todos los números son primos al principio.
    *   Se marcan explícitamente el 0 y el 1 como no primos (`false`).

2.  **Proceso de "Tachado"**:
    *   Se itera desde `p = 2` hasta la raíz cuadrada de `n`. La raíz cuadrada es una optimización clave, ya que cualquier número compuesto `c` tendrá al menos un factor primo menor o igual a `√c`.
    *   Si en la iteración actual, `esPrimo[p]` sigue siendo `true`, significa que `p` es un número primo.
    *   Para cada primo `p` encontrado, se procede a "tachar" (marcar como `false`) todos sus múltiplos en el arreglo, comenzando desde `p * p`.

3.  **Recolección de Resultados**:
    *   Una vez que el proceso de tachado ha finalizado, se recorre el arreglo `esPrimo` una última vez.
    *   Todos los números `i` cuyo valor `esPrimo[i]` sea `true` se añaden a un nuevo arreglo de resultados.

4.  **Resultado**: La función devuelve el arreglo que contiene todos los números primos encontrados hasta `n`.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Generar los primos hasta 30, un caso estándar fácil de verificar.
*   Un caso con un número pequeño para probar los límites.
*   Un caso con una entrada inválida (menor que 2).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-07/resoluciones/evelyn-barrios/evelyn-barrios.js
```