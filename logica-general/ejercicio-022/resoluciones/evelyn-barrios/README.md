# Solución Ejercicio 22: Motor de Búsqueda con Ranking de Relevancia

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es desarrollar una función de búsqueda que, dada una lista de elementos y un término de búsqueda (query), devuelva una lista de resultados que coincidan. La clave del reto es que los resultados no solo deben ser filtrados, sino también ordenados por relevancia: las coincidencias exactas deben aparecer primero que las coincidencias parciales.

Esta funcionalidad es la base de cualquier buscador en una aplicación, mejorando significativamente la experiencia del usuario.

## 2. Diseño de la Solución

Para resolver este problema, diseñé una función `buscarYRankear` que implementa un proceso de dos fases: Filtrado y Ordenamiento (Ranking).

El algoritmo es el siguiente:

1.  **Validación de Entrada**: La función primero verifica si el término de búsqueda (`query`) está vacío o es nulo. Si es así, no tiene sentido realizar una búsqueda, por lo que devuelve un arreglo vacío.

2.  **Fase de Filtrado**: Se utiliza el método `Array.prototype.filter()` para recorrer la lista de `items`. Se crea un nuevo arreglo que contiene solo los elementos cuyo nombre (`item.nombre`) incluye el término de búsqueda. Para que la búsqueda no distinga entre mayúsculas y minúsculas, tanto el nombre del item como el query se convierten a minúsculas antes de la comparación.

3.  **Fase de Ordenamiento (Ranking)**: Sobre la lista ya filtrada, se aplica el método `Array.prototype.sort()`. Aquí reside la lógica de ranking:
    *   Se le pasa una función de comparación que recibe dos elementos (`a` y `b`).
    *   Se asigna un "puntaje de relevancia" a cada elemento. Una coincidencia exacta (ej: buscar "libro" y encontrar "Libro") recibe un puntaje más alto que una coincidencia parcial (ej: encontrar "libro de historia").
    *   La función de `sort` utiliza estos puntajes para ordenar los elementos de mayor a menor relevancia. Si dos elementos tienen la misma relevancia (ambos son coincidencias parciales), se mantienen en su orden relativo o se ordenan alfabéticamente para consistencia.

Este enfoque en dos pasos es eficiente y separa claramente las responsabilidades de encontrar y ordenar, lo que hace que el código sea más fácil de entender y mantener.

## 3. Pruebas Implementadas

Para validar el motor de búsqueda, se crearon los siguientes casos de prueba:
*   Una búsqueda donde existen tanto coincidencias exactas como parciales, para verificar el ranking.
*   Una búsqueda que solo produce coincidencias parciales.
*   Una búsqueda sin resultados.
*   Una búsqueda con un query vacío para probar la validación de entrada.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-022/resoluciones/evelyn-barrios/evelyn-barrios.js
```