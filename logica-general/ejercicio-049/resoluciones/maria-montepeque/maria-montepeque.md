# Plantilla de solucion

## Analisis

- Entrada: una lista de estados (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se busca el estado de mayor prioridad presente en la lista usando un mapeo numerico.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. Si no hay `bloqueado`, se atiende `pendiente`.
3. Si solo hay `aprobado`, no se requiere accion urgente.

## Pruebas

### Caso normal

Entrada: `["aprobado", "pendiente", "bloqueado"]`

Resultado esperado: `{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }`

### Caso borde

Entrada: `[]`

Resultado esperado: `{ accion: "sin accion", motivo: "no hay items para evaluar." }`

## Explicacion final

Se usa un objeto de mapeo numerico (`PRIORIDAD`) en lugar de condicionales encadenados para determinar que estado tiene mayor urgencia. Esto hace la logica mas clara y facil de extender si se agregan nuevos estados. El caso de lista vacia y el caso de estados no reconocidos se manejan explicitamente para evitar resultados indefinidos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.