
# Resolución Ejercicio 043 - Torneo de Esports

## Pensamiento del problema
Para resolver este reto, identifiqué que el sistema debe funcionar como un filtro de prioridades. Primero se descartan los elementos críticos ("bloqueados") y, dependiendo de la urgencia ("prioridad alta"), se gestionan los elementos secundarios.

## Reglas aplicadas
1. **Seguridad primero:** La existencia de un "bloqueado" siempre detiene el flujo para revisión.
2. **Jerarquía de urgencia:** Si el sistema está sano (sin bloqueos), se atiende lo pendiente solo si la prioridad es alta.
3. **Estado base:** Si no hay nada que atender, se reportan los "aprobados".

## Casos probados
1. **Caso del ejemplo:** `["aprobado", "pendiente", "bloqueado"], "alta"` -> Resultado esperado: `revisar bloqueado`.
2. **Caso borde:** `[]` -> Resultado: `esperando datos` (manejo de lista vacía).