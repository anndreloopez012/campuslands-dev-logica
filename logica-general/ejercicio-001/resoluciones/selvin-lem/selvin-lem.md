# Resolucion - Logica general 001

## Como pensé el problema
Identifiqué las entradas (items, prioridad, regla) y la salida (accion + motivo).
La regla clave es de riesgo: bloqueado se revisa antes que pendiente, y pendiente antes que aprobado.

## Reglas aplicadas
- Orden de riesgo: bloqueado > pendiente > aprobado.
- Si la lista está vacía, se retorna "sin datos".
- Si no hay coincidencia con estados conocidos, se retorna "sin accion".

## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo: ["aprobado", "aprobado"] → sin accion.