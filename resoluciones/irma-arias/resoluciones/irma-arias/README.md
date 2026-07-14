
# Resolución Lógica 035 - Irma Arias

## Pensamiento del problema
Para resolver este reto, primero identifiqué las prioridades. El mayor riesgo en un proyecto de dibujo es un archivo "bloqueado", por lo que debe ser la primera condición (`if`) en mi código. Luego, evalué la prioridad de las tareas pendientes.

## Reglas aplicadas
1. **Prioridad Crítica:** Si existe un estado "bloqueado", se detiene todo para atenderlo.
2. **Prioridad Alta:** Si no hay bloqueados, se busca la primera tarea con prioridad "alta" que no esté aprobada.
3. **Validación:** Se verifica si el arreglo está vacío para evitar errores.

## Ejecución
Ejecuta el archivo con: `node irma-arias.js`

## Casos probados
1. **Caso Normal:** Lista con una tarea bloqueada y otra pendiente. (Resultado: Prioriza el bloqueado).
2. **Caso Borde:** Lista con una tarea ya aprobada. (Resultado: Informa que no hay acciones urgentes).