# Resolución: Clasificación por Reglas (Videojuegos)

## Pensamiento Lógico
Para resolver este problema, establecí una **jerarquía de validación**. Las reglas no pueden aplicarse simultáneamente; primero debe validarse el estado crítico (suspendido), luego el estado inicial (nuevo) y finalmente el rendimiento (nivel para activos). Esto evita que un jugador con nivel alto pero cuenta suspendida sea clasificado erróneamente.

## Reglas Aplicadas
1. **Prioridad de Bloqueo:** Si `estado === "suspendido"`, la clasificación es `NO APTO`.
2. **Prioridad de Inicialización:** Si `estado === "nuevo"`, es `PRINCIPIANTE` sin importar su nivel.
3. **Clasificación Competitiva:** Si `estado === "activo"`, se evalúa el nivel (>= 80 es `ÉLITE`, de lo contrario `REGULAR`).

## Casos Probados
1. **Normal (Nivel 85, activo):** Devuelve ÉLITE.
2. **Caso Borde (Nivel 10, suspendido):** Devuelve NO APTO, confirmando que la regla de suspensión tiene prioridad sobre el nivel bajo.
3. **Caso Borde (Nivel 90, nuevo):** Devuelve PRINCIPIANTE, confirmando que la regla de cuenta nueva tiene prioridad sobre un nivel alto.