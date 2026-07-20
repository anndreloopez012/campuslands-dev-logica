# Solución Ejercicio 12: Conversor de Números Romanos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que convierta una cadena de texto que representa un número romano (ej: "MCMXCIV") a su equivalente en número entero (ej: 1994).

La clave para resolver este problema es entender la regla de sustracción de los números romanos: cuando un símbolo de menor valor aparece antes que uno de mayor valor, se resta (ej: IV = 4, IX = 9). En todos los demás casos, los valores se suman.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `convertirRomanoAEntero` que recibe la cadena del número romano.

El algoritmo es el siguiente:

1.  **Mapa de Valores**: Se crea un objeto o mapa que asocia cada símbolo romano con su valor entero (`I: 1`, `V: 5`, `X: 10`, etc.).

2.  **Iteración y Lógica de Conversión**:
    *   Se inicializa una variable `resultado` en 0.
    *   Se itera a través de la cadena de texto del número romano.
    *   En cada posición, se compara el valor del símbolo actual con el del siguiente.
    *   **Si el valor actual es menor que el siguiente**: Se aplica la regla de sustracción, restando el valor actual del `resultado`.
    *   **Si el valor actual es mayor o igual que el siguiente (o es el último símbolo)**: Se aplica la regla de adición, sumando el valor actual al `resultado`.

3.  **Resultado**: Una vez que el bucle ha recorrido toda la cadena, la variable `resultado` contiene el número entero equivalente, y la función lo devuelve.

Este método es eficiente y maneja correctamente todas las reglas de la numeración romana.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un número simple sin sustracciones (III).
*   Un número con sustracciones (IV).
*   Un número complejo que combina ambas reglas (MCMXCIV).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-12/resoluciones/evelyn-barrios/evelyn-barrios.js
```