# Solución Ejercicio 16: Clasificador de Números (Perfecto, Abundante, Deficiente)

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que clasifique un número entero positivo en una de tres categorías, basándose en la suma de sus divisores propios (todos sus divisores excepto él mismo):

*   **Número Perfecto**: Si la suma de sus divisores propios es igual al número.
*   **Número Abundante**: Si la suma de sus divisores propios es mayor que el número.
*   **Número Deficiente**: Si la suma de sus divisores propios es menor que el número.

Por ejemplo, 12 es un número abundante porque la suma de sus divisores (1+2+3+4+6=16) es mayor que 12.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `clasificarNumero` que reutiliza la lógica de suma de divisores del ejercicio anterior.

El algoritmo es el siguiente:

1.  **Validación de Entradas**:
    *   La función primero verifica si el número es un entero positivo. Si no lo es, devuelve un mensaje de error.

2.  **Cálculo de la Suma de Divisores**:
    *   Se calcula la suma de los divisores propios del número. Para optimizar, la búsqueda de divisores se realiza solo hasta la raíz cuadrada del número.
    *   Se inicializa una variable `suma` en 1 (ya que 1 es divisor de todos los números).
    *   Se itera desde 2 hasta la raíz cuadrada del número. Si se encuentra un divisor `i`, se suman tanto `i` como su par `numero / i`.

3.  **Clasificación y Resultado**:
    *   Una vez calculada la `suma`, se compara con el `numero` original.
    *   Si `suma > numero`, se devuelve "Abundante".
    *   Si `suma < numero`, se devuelve "Deficiente".
    *   Si `suma === numero`, se devuelve "Perfecto".

Este enfoque es modular y eficiente, construyendo sobre conceptos ya resueltos.

## 3. Pruebas Implementadas

Para validar la función, se han creado casos de prueba para cada una de las tres categorías:
*   Un número perfecto (28).
*   Un número abundante (12).
*   Un número deficiente (10).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-16/resoluciones/evelyn-barrios/evelyn-barrios.js
```