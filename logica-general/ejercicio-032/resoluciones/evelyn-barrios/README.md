# Solución Ejercicio 32: Comparación de Opciones

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es desarrollar una función que, basándose en una `regla` escrita en lenguaje natural, determine qué acción se debe tomar sobre una lista de `items`. La función debe ser capaz de identificar palabras clave en la regla para devolver una acción y un motivo específicos.

**Entradas:**
*   `items`: Un array de strings que representa los elementos a procesar.
*   `prioridad`: Un string que indica la urgencia.
*   `regla`: Un string con la instrucción a interpretar.

**Salida:**
*   Un objeto que contiene una `accion` y un `motivo` que explican la decisión tomada.

## 2. Diseño de la Solución

Para resolver este problema, he creado la función `evaluarDecision`, que sigue un flujo lógico claro y escalable:

1.  **Normalización de la Regla**: Para evitar problemas con mayúsculas y minúsculas (ej. "Bloqueados" vs "bloqueados"), la primera acción es convertir toda la `regla` a minúsculas. Esto asegura que la comparación sea consistente.

2.  **Búsqueda de Palabras Clave**: Utilizo el método `includes()` para buscar palabras clave específicas dentro de la regla normalizada. He definido una jerarquía simple:
    *   Primero busco la palabra "bloqueado". Si se encuentra, la función retorna inmediatamente la acción correspondiente.
    *   Si no encuentra "bloqueado", busca la palabra "aprobado" para manejar otro posible caso.

3.  **Acción por Defecto**: Si después de todas las verificaciones no se encuentra ninguna palabra clave conocida, la función devuelve un objeto de acción "ninguna", indicando que la regla no contenía una instrucción procesable.

Este enfoque es robusto y fácil de extender. Si en el futuro se necesitaran más reglas, simplemente se añadirían más bloques `if` para buscar nuevas palabras clave.

## 3. Pruebas Implementadas

*   **Caso Principal (del ejemplo):**
    *   **Entrada:** `regla: "revisar bloqueados primero"`
    *   **Resultado:** `{ accion: 'revisar bloqueado', motivo: 'La regla prioriza riesgos antes de tareas normales.' }`
    *   Valida que la detección de "bloqueado" funciona correctamente.

*   **Caso Alternativo (palabra clave "aprobado"):**
    *   **Entrada:** `regla: "archivar todo lo aprobado"`
    *   **Resultado:** `{ accion: 'archivar aprobados', motivo: 'La regla indica procesar los elementos ya finalizados.' }`
    *   Demuestra que la función puede manejar múltiples reglas.

*   **Caso por Defecto (sin palabra clave):**
    *   **Entrada:** `regla: "ordenar por fecha"`
    *   **Resultado:** `{ accion: 'ninguna', motivo: 'La instrucción no contiene una acción prioritaria conocida.' }`
    *   Asegura que la función se comporta de manera predecible cuando la regla no es específica.