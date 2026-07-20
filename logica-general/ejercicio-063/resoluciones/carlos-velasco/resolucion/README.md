# Plantilla de solucion

## Analisis

* **Entrada**: Un valor numérico `ping` (latencia en ms) y un string `estado` ("estable", "inestable", "caido").
* **Proceso**: Evaluación jerárquica de condiciones: primero se verifica la caída del sistema, luego se controla la estabilidad/latencia para determinar si se requiere una pausa, y finalmente se autoriza la continuación.
* **Salida**: Un objeto que indica la `accion` a tomar y el `motivo` técnico de la misma.

## Reglas identificadas

1. **Prioridad Crítica**: Si el `estado` es "caido", el sistema debe suspender la partida inmediatamente.
2. **Umbral de Estabilidad**: Si el `estado` es "inestable" o el `ping` supera los 150ms, el sistema debe activar una pausa técnica.
3. **Condición de Éxito**: Si no se cumplen las reglas anteriores, el sistema autoriza continuar la partida.

## Pruebas

### Caso normal

* **Entrada**: `40, "estable"`
* **Resultado esperado**: `{ accion: "Continuar Partida", motivo: "Condiciones óptimas para competir." }`

### Caso borde

* **Entrada**: `10, "caido"`
* **Resultado esperado**: `{ accion: "Suspender Partida", motivo: "Conexión interrumpida." }`

## Explicacion final

La solución es robusta gracias a la aplicación de **cláusulas de guarda (guard clauses)** en un orden lógico estricto. Al priorizar el estado de "caído" antes de evaluar el "ping", evitamos procesar datos de una conexión que ya no existe. Esta jerarquía garantiza que las decisiones críticas (suspensión) siempre predominen sobre las medidas preventivas (pausas), asegurando que la gestión del torneo sea siempre justa y protectora ante fallos técnicos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Ping 200, Estado estable)**:
* ¿Es "caido"? No.
* ¿Es "inestable" o `200 > 150`? Sí.
* Acción: "Activar Pausa Técnica".