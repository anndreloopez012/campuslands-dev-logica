
# Ejercicio 021 - Clasificación por Reglas

## Pensamiento del problema
Para resolver este ejercicio, primero identifiqué que la prioridad debe ser jerárquica: los riesgos (bloqueados) tienen prioridad sobre las tareas pendientes.

## Reglas aplicadas
1. Si existe al menos un "bloqueado", se debe priorizar su revisión.
2. Si no hay bloqueados pero hay "pendientes", se revisan estos.
3. Si solo hay "aprobados" o la lista está vacía, no hay acciones de riesgo.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con: `node irma-arias.js`

## Casos probados
- Caso con bloqueados: Retorna la acción de revisar bloqueado.
- Caso solo con pendientes: Retorna la acción de revisar pendiente.
- Caso vacío: Retorna que no hay acciones.