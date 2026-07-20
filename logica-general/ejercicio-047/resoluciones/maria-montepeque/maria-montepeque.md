# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de canciones de una playlist (`bloqueada`, `pendiente`, `aprobada`).
- Proceso: se valida que todos los estados sean reconocidos y se determina cual es el mas urgente de revisar segun un orden de prioridad.
- Salida: un objeto con la accion a tomar y el motivo que la justifica.

## Reglas identificadas

1. Si la playlist esta vacia, no hay ninguna accion que tomar.
2. Si aparece un estado que no pertenece a los estados validos, se reporta como inconsistencia antes de decidir cualquier otra accion.
3. Si todos los estados son validos, se revisa primero el mas riesgoso: `bloqueada` tiene prioridad sobre `pendiente`, y `pendiente` tiene prioridad sobre `aprobada`.

## Pruebas

### Caso normal

Entrada:

```text
["aprobada", "pendiente", "bloqueada"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueada", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin acciones", motivo: "la playlist no contiene canciones para revisar." }
```

## Explicacion final

La solucion usa un objeto de prioridades numericas en lugar de condicionales encadenados, lo que hace mas facil agregar o modificar estados sin reescribir la logica de comparacion. Antes de calcular la prioridad, se valida que la lista no este vacia y que todos los estados sean reconocidos, cubriendo asi los dos tipos de inconsistencia mas comunes: falta de datos y datos invalidos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.