# Solución Ejercicio 056 - Matrices Simples

**Autor:** Evelyn Barios

## 1. Análisis del Problema

El ejercicio 056, con temática de "animación 3D" y "matrices simples", pide crear una solución que procese datos representados como una matriz. Dado que el ejemplo del `README.md` principal es genérico, interpreté el problema como la necesidad de manipular los vértices de un objeto 3D.

En animación 3D, una operación común es la transformación de escala, que modifica el tamaño de un objeto. Un objeto 3D puede ser representado por una matriz de vértices, donde cada fila contiene las coordenadas `(x, y, z)` de un punto.

Mi solución se enfoca en:
1.  Recibir una matriz de vértices y un factor de escala.
2.  Aplicar la escala a cada vértice.
3.  Calcular el centroide (el punto promedio geométrico) del objeto antes y después de la transformación.

## 2. Reglas Aplicadas

-   **Entradas**: La función principal recibe un objeto con dos propiedades:
    -   `vertices`: una matriz (arreglo de arreglos) donde cada sub-arreglo representa un vértice con coordenadas `[x, y, z]`.
    -   `escala`: un número que representa el factor por el cual se escalará el objeto.
-   **Proceso**:
    1.  **Escalado de Vértices**: Se crea una nueva matriz donde cada coordenada de cada vértice se multiplica por el factor de `escala`.
    2.  **Cálculo de Centroide**: Se calcula el punto central del objeto sumando todas las coordenadas `x`, `y`, y `z` de los vértices y dividiendo cada suma por el número total de vértices. Este cálculo se realiza tanto para los vértices originales como para los escalados.
-   **Salidas**: La función devuelve un objeto con:
    -   `centroideOriginal`: Las coordenadas del centroide antes de la escala.
    -   `centroideEscalado`: Las coordenadas del centroide después de la escala.
    -   `explicacion`: Un texto breve que describe la operación realizada.

## 3. Cómo Ejecutar la Solución

1.  Abre una terminal.
2.  Navega a la carpeta donde se encuentra el archivo `evelyn-barios.js`.
3.  Ejecuta el script usando Node.js con el siguiente comando:

    ```bash
    node evelyn-barios.js
    ```

La salida en la consola mostrará los resultados de los dos casos de prueba definidos en el archivo.

## 4. Casos de Prueba

### Caso de Prueba 1: Normal
-   **Entrada**: Un cubo simple de 8 vértices y un factor de escala de `2`.
-   **Resultado Esperado**: El centroide original `[0.5, 0.5, 0.5]` se moverá a `[1, 1, 1]` después de duplicar el tamaño del cubo.

### Caso de Prueba 2: Borde
-   **Entrada**: Un objeto con un solo vértice `[10, 20, 30]` y un factor de escala de `0`.
-   **Resultado Esperado**: El objeto colapsa en el origen `[0, 0, 0]`. El centroide original es el propio punto, y el escalado es el origen. Esto prueba la lógica con un conjunto de datos mínimo y un factor de escala que representa un caso límite.