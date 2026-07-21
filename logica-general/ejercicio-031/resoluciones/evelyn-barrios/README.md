# Solución Ejercicio 31: Organización de Listas

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es crear una función que interprete una regla escrita en lenguaje natural para determinar qué acción prioritaria se debe tomar sobre una lista de ítems. La función debe ser capaz de identificar palabras clave dentro de la regla para tomar una decisión.

**Entradas:**
*   `items`: Un array de strings (ej: `["aprobado", "pendiente", "bloqueado"]`).
*   `prioridad`: Un string que indica la urgencia (ej: `alta`).
*   `regla`: Un string con la instrucción a interpretar (ej: `revisar bloqueados primero`).

**Salida:**
*   Un objeto con una `accion` y un `motivo`.

## 2. Diseño de la Solución

La función `procesarRegla` implementa una lógica de análisis de texto simple y directa para cumplir con el objetivo.

1.  **Validación de la Regla**: Primero, la función se asegura de que la `regla` sea un string válido y no esté vacío. Si no lo es, devuelve una acción por defecto indicando el problema.
2.  **Normalización**: Para que la búsqueda de palabras clave no sea sensible a mayúsculas y minúsculas (por ejemplo, "Bloqueado" vs "bloqueado"), la regla se convierte completamente a minúsculas.
3.  **Búsqueda de Palabras Clave**: Se utiliza el método `includes()` para verificar si la regla contiene las palabras "bloqueado" o "bloqueados". Esta es la condición principal del reto.
4.  **Decisión de Acción**:
    *   Si se encuentra alguna de las palabras clave, la función retorna el objeto de acción específico para "revisar bloqueado".
    *   Si no se encuentra ninguna palabra clave relevante, retorna un objeto de acción "ninguna", indicando que la regla no activó una tarea prioritaria conocida.

Este enfoque es robusto porque se centra en identificar la intención del usuario a través de palabras clave, un método común en el procesamiento de lenguaje natural.

## 3. Pruebas Implementadas

Para asegurar que la solución es correcta, se probaron los siguientes casos:

*   **Caso Normal (el del ejemplo):**
    *   **Entrada:** `regla: "revisar bloqueados primero"`
    *   **Resultado Esperado:** `{ accion: 'revisar bloqueado', motivo: 'La regla prioriza riesgos antes de tareas normales.' }`
    *   Este caso valida que la lógica principal de detección de palabras clave funciona.

*   **Caso Borde (regla no prioritaria):**
    *   **Entrada:** `regla: "organizar por fecha de entrega"`
    *   **Resultado Esperado:** `{ accion: 'ninguna', motivo: 'La regla no contiene una acción prioritaria conocida.' }`
    *   Este caso prueba que la función no genera falsos positivos y devuelve la acción por defecto correctamente.

*   **Caso Borde (regla vacía):**
    *   **Entrada:** `regla: ""`
    *   **Resultado Esperado:** `{ accion: 'ninguna', motivo: 'La regla está vacía o es inválida.' }`
    *   Valida el manejo de entradas incorrectas.