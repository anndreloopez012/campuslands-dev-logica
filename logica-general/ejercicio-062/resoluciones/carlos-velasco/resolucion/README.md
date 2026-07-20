# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `equipo` que contiene `partidosJugados`, `partidosGanados`, `partidosEmpatados`, `golesFavor` y `golesContra`.
* **Proceso**: Verificación de integridad de datos mediante validación de valores positivos y comprobación de coherencia aritmética entre partidos jugados y resultados.
* **Salida**: Un objeto que indica `valido` (booleano) y un `mensaje` explicativo sobre el estado del registro.

## Reglas identificadas

1. **Validez de Goles**: Tanto los goles a favor como los goles en contra deben ser mayores o iguales a 0.
2. **Consistencia de Partidos**: La suma de los `partidosGanados` y `partidosEmpatados` no puede ser mayor que el total de `partidosJugados`.
3. **Reporte de Integridad**: Si alguna condición no se cumple, el sistema debe bloquear el registro y notificar el error específico.

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Los Galácticos", partidosJugados: 5, partidosGanados: 3, partidosEmpatados: 1, golesFavor: 10, golesContra: 2 }`
* **Resultado esperado**: `{ valido: true, mensaje: "Registro de equipo validado correctamente." }`

### Caso borde

* **Entrada**: `{ nombre: "Equipo Fantasma", partidosJugados: 2, partidosGanados: 5, partidosEmpatados: 0, golesFavor: 5, golesContra: 0 }`
* **Resultado esperado**: `{ valido: false, mensaje: "La suma de resultados excede los partidos jugados." }`

## Explicacion final

La solución funciona mediante la técnica de "guard clauses" (cláusulas de guarda). Al validar primero los datos imposibles (valores negativos) y luego la coherencia lógica de las estadísticas, el código asegura que solo los datos físicamente posibles avancen en el sistema. Esta aproximación es eficiente porque detiene la ejecución inmediatamente al encontrar el primer error, evitando procesamientos adicionales y entregando un feedback claro y específico al usuario sobre qué parte del registro está fallando.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de goles negativos**: `golesFavor < 0 || golesContra < 0`
* **Condición de coherencia de partidos**: `(partidosGanados + partidosEmpatados) > partidosJugados`