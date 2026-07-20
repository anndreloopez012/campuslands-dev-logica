# Solución Ejercicio 03: Área de un Círculo

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es calcular el área de un círculo a partir de la longitud de su radio.

Para resolverlo, se debe aplicar la fórmula matemática para el área de un círculo, que es una de las más conocidas en geometría.

La fórmula es: `A = π * r²`, donde `r` es el radio del círculo y `π` (Pi) es una constante matemática (~3.14159).

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `calcularAreaCirculo` que recibe el radio como único argumento.

El algoritmo es el siguiente:

1.  **Validación de Entradas**: La función primero verifica que el radio sea un número positivo. Una medida geométrica como el radio no puede ser negativa o cero. Si la validación falla, devuelve un mensaje de error claro.

2.  **Cálculo**:
    *   Se utiliza la constante `Math.PI` de JavaScript para obtener un valor preciso de π.
    *   Se eleva el radio al cuadrado usando el operador de exponenciación `** 2`.
    *   Se multiplican ambos valores para obtener el área.

3.  **Resultado**: La función devuelve el valor calculado del área. Para mejorar la legibilidad del resultado, se redondea a dos decimales usando `toFixed(2)`.

Este enfoque es directo, utiliza las herramientas matemáticas incorporadas en JavaScript para mayor precisión y es fácil de entender.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un caso con un radio simple (ej: 1) para una fácil verificación.
*   Un caso con un radio más grande para ver el cálculo en acción.
*   Un caso con una entrada inválida (un radio negativo) para probar la validación.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-03/resoluciones/evelyn-barrios/evelyn-barrios.js
```