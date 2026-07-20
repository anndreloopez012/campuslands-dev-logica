# Solución Ejercicio 19: Triángulo de Pascal

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que genere las primeras `n` filas del Triángulo de Pascal.

El Triángulo de Pascal es una disposición triangular de números donde cada número es la suma de los dos números directamente encima de él. Los bordes del triángulo están formados por unos.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `generarTrianguloPascal` que recibe el número de filas a generar.

El algoritmo es iterativo y construye el triángulo fila por fila:

1.  **Validación y Casos Base**:
    *   Si el número de filas es 0, se devuelve un arreglo vacío.
    *   Si es 1, se devuelve un arreglo con la primera fila: `[[1]]`.

2.  **Construcción del Triángulo**:
    *   Se inicializa el triángulo con la primera fila `[[1]]`.
    *   Se utiliza un bucle que itera desde la segunda fila hasta el número de filas solicitado.
    *   En cada iteración, se toma la `filaAnterior`.
    *   Se crea una `nuevaFila` que siempre empieza con 1.
    *   Se recorre la `filaAnterior` para calcular los valores intermedios. Cada nuevo valor es la suma de `filaAnterior[j]` y `filaAnterior[j + 1]`.
    *   La `nuevaFila` siempre termina con 1.
    *   La `nuevaFila` completa se añade al `triangulo`.

3.  **Resultado**: La función devuelve el arreglo de arreglos que representa el triángulo.

Este método es eficiente y fácil de seguir, ya que simula visualmente cómo se construiría el triángulo a mano.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Generar las primeras 5 filas.
*   Casos base como generar 1 y 0 filas.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-19/resoluciones/evelyn-barrios/evelyn-barrios.js
```