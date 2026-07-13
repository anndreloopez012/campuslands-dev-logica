# Solución Ejercicio 24: Ordenamiento Multi-Criterio

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es implementar una función que ordene un arreglo de objetos basándose en múltiples criterios. Específicamente, se debe ordenar una lista de productos primero por su `categoria` en orden alfabético y, si dos productos pertenecen a la misma categoría, se deben ordenar por su `precio` de menor a mayor.

Esta es una tarea esencial para presentar datos de manera organizada y legible en interfaces de usuario, como tablas de productos o listados de inventario.

## 2. Diseño de la Solución

Para resolver este problema, la herramienta idónea es el método `Array.prototype.sort()`, al cual se le proporciona una función de comparación personalizada que puede manejar la lógica de ordenamiento jerárquico.

El algoritmo de la función `ordenarProductosMultiCriterio` es el siguiente:

1.  **Función de Comparación**: La lógica principal reside dentro de la función de callback que se pasa a `.sort()`. Esta función recibe dos objetos (`a` y `b`) del arreglo y debe devolver:
    *   Un número negativo si `a` debe ir antes que `b`.
    *   Un número positivo si `b` debe ir antes que `a`.
    *   Cero si son iguales en términos de orden.

2.  **Criterio Primario (Categoría)**:
    *   Primero, se comparan las `categoria` de los dos productos. Para una comparación de texto alfabética y segura, se utiliza el método `localeCompare()`, que maneja correctamente diferentes idiomas y caracteres.
    *   Si `a.categoria.localeCompare(b.categoria)` devuelve un valor distinto de cero, significa que las categorías son diferentes. En este caso, se retorna ese valor directamente, y el ordenamiento para ese par de elementos termina ahí.

3.  **Criterio Secundario (Precio)**:
    *   Si el resultado de la comparación de categorías es cero (es decir, ambos productos son de la misma categoría), se procede a evaluar el segundo criterio.
    *   Se resta el precio de `a` del precio de `b` (`a.precio - b.precio`). Esta simple operación matemática devuelve un número negativo, positivo o cero, cumpliendo exactamente con los requisitos de la función `sort` para ordenar números de menor a mayor.

4.  **Inmutabilidad**: Es importante destacar que `.sort()` modifica el arreglo original. Para seguir las buenas prácticas de no mutar los datos de entrada, la solución primero crea una copia del arreglo usando el operador de propagación (`[...productos]`) y luego aplica el ordenamiento sobre esa copia.

## 3. Pruebas Implementadas

Para validar la función, se ha utilizado un conjunto de datos que incluye:
*   Varios productos de la misma categoría (`Electronica`) con diferentes precios para probar el ordenamiento secundario.
*   Productos de diferentes categorías para probar el ordenamiento primario.
*   Un caso con un arreglo vacío para asegurar que no hay errores.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-024/resoluciones/evelyn-barrios/evelyn-barrios.js
```