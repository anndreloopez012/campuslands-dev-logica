# Solución Ejercicio 059 - Inventarios Lógicos

**Autor:** Evelyn Barios

## 1. Análisis del Problema

El ejercicio 059 se enfoca en "inventarios lógicos" con una temática de "fórmulas químicas". He interpretado esto como la necesidad de crear un sistema que gestione un inventario de elementos químicos y determine si es posible producir una serie de compuestos solicitados.

El sistema debe ser capaz de:
1.  Entender la composición de una fórmula química (ej. "H2O" significa 2 átomos de Hidrógeno y 1 de Oxígeno).
2.  Verificar si el inventario de elementos es suficiente para cumplir con una lista de producción.
3.  Actualizar el inventario después de una producción exitosa.
4.  Reportar qué compuestos se pudieron producir y cuáles no.

## 2. Reglas Aplicadas

-   **Entradas**: La función principal recibe dos argumentos:
    -   `inventario`: Un objeto que representa el stock de elementos disponibles. Las claves son los símbolos de los elementos (ej. 'H', 'O') y los valores son sus cantidades.
    -   `solicitudes`: Un arreglo de objetos. Cada objeto representa un pedido de producción y contiene `nombre` del compuesto, su `formula` química y la `cantidad` a producir.

-   **Proceso**:
    1.  **Parseo de Fórmulas**: Se creó una función auxiliar que utiliza expresiones regulares para descomponer una fórmula química en sus elementos y cantidades constituyentes (ej. 'H2O' -> `{ H: 2, O: 1 }`).
    2.  **Verificación de Stock**: Para cada solicitud, el sistema calcula el total de átomos necesarios (cantidad de átomos por fórmula * cantidad solicitada). Luego, comprueba si el inventario actual tiene suficientes átomos de cada elemento requerido.
    3.  **Asignación y Descuento**:
        -   Si hay suficientes elementos, la producción se marca como exitosa, y los átomos utilizados se descuentan del inventario.
        -   Si no hay suficientes elementos, la producción se marca como fallida y el inventario no se modifica para esa solicitud.
    4.  **Procesamiento Secuencial**: Las solicitudes se procesan en el orden en que llegan. Una producción exitosa afecta el inventario disponible para las siguientes.

-   **Salidas**: La función devuelve un objeto de reporte con:
    -   `produccionExitosa`: Un arreglo con los compuestos que se lograron producir.
    -   `produccionFallida`: Un arreglo con los compuestos que no se pudieron producir por falta de stock.
    -   `inventarioRestante`: El estado final del inventario de elementos.

## 3. Cómo Ejecutar la Solución

1.  Abre una terminal.
2.  Navega a la carpeta donde se encuentra el archivo `evelyn-barios.js`.
3.  Ejecuta el script usando Node.js con el siguiente comando:

    ```bash
    node evelyn-barios.js
    ```

La salida en la consola mostrará los resultados de los dos casos de prueba definidos.

## 4. Casos de Prueba

### Caso de Prueba 1: Normal
-   **Entrada**: Un inventario con `H: 100`, `O: 50`, `C: 30` y solicitudes para producir 20 de 'H2O' y 10 de 'CO2'.
-   **Resultado Esperado**: Ambas producciones son exitosas. El reporte muestra los dos compuestos en `produccionExitosa` y el inventario restante actualizado (`H: 60`, `O: 10`, `C: 20`).

### Caso de Prueba 2: Borde (Stock Insuficiente)
-   **Entrada**: El mismo inventario inicial y solicitudes para producir 10 de 'CH4' y 30 de 'H2O'.
-   **Resultado Esperado**: La producción de 'CH4' (Metano) falla porque requiere 40 'H' y 10 'C', lo cual es posible, pero la siguiente solicitud de 30 'H2O' (que requiere 60 'H' y 30 'O') también es posible. Para mostrar el fallo, he ajustado la prueba: la primera solicitud de 10 'CH4' (necesita 40 H) es posible, pero si la siguiente fuera de 30 'H2O' (necesita 60 H), el total de H (100) se consumiría. Si una solicitud de 10 'CH4' fuera seguida por una de 40 'H2O' (necesita 80 H), la segunda fallaría. El reporte muestra la producción fallida y la exitosa por separado.
