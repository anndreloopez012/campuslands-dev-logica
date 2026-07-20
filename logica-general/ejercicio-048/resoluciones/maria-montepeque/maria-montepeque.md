# Plantilla de solucion

## Analisis

- Entrada: una lista de escenas de una pelicula de ciencia ficcion, cada una con un estado ("aprobado", "pendiente" o "bloqueado").
- Proceso: se identifica el estado con mayor prioridad presente en la lista, siguiendo la regla de que los bloqueados se revisan primero, luego los pendientes y por ultimo los aprobados.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Si hay al menos una escena bloqueada, la accion es revisar el bloqueado, sin importar cuantas escenas pendientes o aprobadas existan.
2. Si no hay bloqueados pero hay pendientes, la accion es revisar el pendiente.
3. Si todas las escenas estan aprobadas, no se requiere ninguna accion.

## Pruebas

### Caso normal

Entrada:

```text
escenas: ["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
accion: "revisar bloqueado"
motivo: "la regla prioriza riesgos antes de tareas normales."
```

### Caso borde

Entrada:

```text
escenas: []
```

Resultado esperado:

```text
accion: "sin accion"
motivo: "no se recibieron escenas para evaluar."
```

## Explicacion final

La solucion usa un objeto de mapeo numerico (`PRIORIDAD_ESTADO`) para asignar un peso a cada estado en lugar de encadenar condicionales. Esto hace que agregar o modificar prioridades sea mas simple y evita bloques `if/else` anidados. Con `reduce` se recorre la lista una sola vez para encontrar el estado de mayor prioridad (el de menor valor numerico), y luego un `switch` traduce ese estado en la accion y el motivo correspondiente. El caso de lista vacia se valida al inicio para evitar errores al operar sobre un arreglo sin elementos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.