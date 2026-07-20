# Solución Ejercicio 02: Teorema de Pitágoras

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es calcular la longitud de la hipotenusa (el lado más largo) de un triángulo rectángulo, dados los dos lados más cortos (los catetos).

Para resolverlo, se debe aplicar el Teorema de Pitágoras, una de las fórmulas fundamentales de la geometría, que establece que la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.

La fórmula es: `a² + b² = c²`, donde `a` y `b` son los catetos y `c` es la hipotenusa. Por lo tanto, `c = √(a² + b²)`.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `calcularHipotenusa` que recibe las longitudes de los dos catetos como argumentos.

El algoritmo es el siguiente:

1.  **Validación de Entradas**: La función primero verifica que ambos catetos sean números positivos. Un lado de un triángulo no puede tener una longitud negativa o cero. Si la validación falla, devuelve un mensaje de error.

2.  **Cálculo**:
    *   Se eleva al cuadrado el valor de cada cateto usando el operador de exponenciación `** 2`.
    *   Se suman los resultados de los cuadrados.
    *   Se calcula la raíz cuadrada de la suma total usando `Math.sqrt()`.

3.  **Resultado**: La función devuelve el valor calculado de la hipotenusa.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un caso clásico del triángulo pitagórico (3, 4) cuyo resultado debe ser 5.
*   Un caso con números decimales para asegurar la precisión.
*   Un caso con una entrada inválida (un número negativo) para probar la validación.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-02/resoluciones/evelyn-barrios/evelyn-barrios.js
```