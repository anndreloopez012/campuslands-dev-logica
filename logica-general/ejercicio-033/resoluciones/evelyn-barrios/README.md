# Solución Ejercicio 33: Análisis de Calificaciones

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es crear una función que reciba una lista de calificaciones y una nota mínima para aprobar. A partir de estos datos, debe generar un objeto con un resumen estadístico que incluya el promedio, la nota más alta, la más baja, y el conteo de aprobados y reprobados.

**Entradas:**
*   `calificaciones`: Un array de números.
*   `notaAprobatoria`: Un número que sirve como umbral para determinar si una calificación es aprobatoria.

**Salida:**
*   Un objeto con las propiedades: `promedio`, `maxima`, `minima`, `aprobados` y `reprobados`.
*   Si la lista de calificaciones está vacía, debe devolver `null`.

## 2. Diseño de la Solución

La función `analizarCalificaciones` se diseñó para ser eficiente, calculando todas las métricas en un único recorrido del array de calificaciones.

1.  **Validación Inicial**: Lo primero es comprobar si el array `calificaciones` está vacío. Si lo está, la función termina y devuelve `null` para evitar errores de cálculo (como la división por cero).

2.  **Inicialización de Acumuladores**: Se declaran variables para almacenar los resultados parciales:
    *   `sumaTotal`: para calcular el promedio.
    *   `maxima` y `minima`: para encontrar los extremos. Se inicializan con el primer valor del array.
    *   `aprobados` y `reprobados`: para contar cada caso.

3.  **Recorrido Único**: Se utiliza un bucle `for` que itera sobre cada calificación. En cada paso:
    *   Se actualiza la `sumaTotal`.
    *   Se compara la calificación actual con `maxima` y `minima` para mantener los valores correctos.
    *   Se usa un condicional para incrementar el contador de `aprobados` o `reprobados` según la `notaAprobatoria`.

4.  **Cálculo y Ensamblaje Final**: Una vez terminado el bucle, se calcula el `promedio` y se construye el objeto de resultado con todas las métricas obtenidas.

Este método es óptimo porque evita recorrer el array múltiples veces, manteniendo la complejidad en O(n).

## 3. Pruebas Implementadas

*   **Caso Normal:**
    *   **Entrada:** `calificaciones: [85, 92, 48, 60, 75, 59]`, `notaAprobatoria: 60`
    *   **Resultado:** `{ promedio: 69.83, maxima: 92, minima: 48, aprobados: 4, reprobados: 2 }`
    *   Verifica que todos los cálculos y conteos funcionen correctamente.

*   **Caso Borde (Lista Vacía):**
    *   **Entrada:** `calificaciones: []`, `notaAprobatoria: 60`
    *   **Resultado:** `null`
    *   Asegura que la validación inicial previene errores con entradas vacías.