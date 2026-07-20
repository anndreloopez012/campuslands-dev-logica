# Solucion - Ejercicio 050

## Analisis

- Entrada: una lista de estados de reservas de viaje (`bloqueado`, `pendiente`, `aprobado`, `cancelado`).
- Proceso: se identifica el estado de mayor prioridad presente en la lista usando un mapa numerico de prioridades.
- Salida: un objeto con la accion a tomar (`revisar <estado>`) y el motivo de esa decision.

## Reglas identificadas

1. Los estados `bloqueado` se revisan primero por representar un riesgo.
2. Si no hay bloqueados, se revisan los `pendiente`.
3. Si no hay bloqueados ni pendientes, se revisan los `aprobado`.
4. Si solo quedan `cancelado`, se indica que ya no hay reservas activas por revisar.
5. Una lista vacia no tiene reserva que revisar.
6. Un estado que no pertenece a las categorias conocidas se reporta como invalido.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin reservas para revisar", motivo: "la lista de reservas esta vacia." }
```

## Explicacion final

Se usa un objeto de mapeo numerico (`PRIORIDAD`) en lugar de condicionales encadenados para determinar que estado tiene mayor urgencia. `reduce` recorre la lista una sola vez y se queda con el estado de menor valor numerico, que representa la mayor prioridad. Los mensajes de motivo se guardan en un objeto aparte (`MOTIVOS`) para mantener la logica de decision separada del texto explicativo. Se valida primero la lista vacia y los estados desconocidos antes de calcular la prioridad, evitando resultados incorrectos con datos invalidos.