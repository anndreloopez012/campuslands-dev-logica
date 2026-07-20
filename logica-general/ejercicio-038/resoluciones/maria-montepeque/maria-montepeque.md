# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de turnos (`items`), la prioridad general (`prioridad`) y la regla de negocio (`regla`) que indica que se revisa primero.
- Proceso: se recorre la lista y se compara cada estado contra un mapa de prioridad numerica; se conserva el estado con el numero mas bajo (mas urgente).
- Salida: un objeto con la accion a tomar (`revisar <estado>`) y el motivo de esa decision.

## Reglas identificadas

1. `bloqueado` es el estado mas urgente, luego `pendiente`, luego `aprobado`.
2. Si la lista esta vacia, no hay nada que revisar y se debe indicar explicitamente.
3. Si ningun estado de la lista es reconocido, tampoco hay una accion valida que tomar.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero
```

Resultado esperado:

```text
{ accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }
```

### Caso borde

Entrada:

```text
items: []
```

Resultado esperado:

```text
{ accion: 'sin turnos que revisar', motivo: 'la lista de turnos esta vacia.' }
```

## Explicacion final

Se uso un objeto de mapeo (`PRIORIDAD_ESTADOS`) en lugar de una cadena de condicionales porque asignar un numero de prioridad a cada estado hace la comparacion mas directa y facil de extender si se agregan nuevos estados. El recorrido guarda el estado con el numero de prioridad mas bajo encontrado hasta el momento, que representa la mayor urgencia. Se manejan explicitamente dos casos borde: lista vacia y estados no reconocidos, para que la funcion nunca falle silenciosamente ni entregue un resultado ambiguo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.