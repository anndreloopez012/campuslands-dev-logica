# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de elementos de un proyecto de arquitectura 3D (por ejemplo `aprobado`, `pendiente`, `en revision`, `bloqueado`).
- Proceso: se compara cada estado contra una tabla de prioridades numerica y se selecciona el de mayor riesgo (menor numero de prioridad).
- Salida: un objeto con la accion a tomar, el motivo de esa accion y el item seleccionado.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa el mayor riesgo para el proyecto.
2. `pendiente` y `en revision` van despues, en ese orden, porque son tareas activas sin bloqueo.
3. `aprobado` es la prioridad mas baja: si todos los elementos estan aprobados no se requiere ninguna accion.
4. Una lista vacia o con valores no reconocidos no genera una accion valida.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.', item: 'bloqueado' }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: 'sin accion', motivo: 'no hay elementos para evaluar.', item: null }
```

## Explicacion final

La solucion usa un objeto de mapeo (`PRIORIDADES`) en lugar de condicionales encadenados, lo que hace mas facil agregar o reordenar estados sin tocar la logica principal. Se recorre la lista una sola vez guardando el estado con la prioridad numerica mas baja encontrada hasta el momento. Los casos borde (lista vacia y estados no reconocidos) se manejan de forma explicita para evitar resultados indefinidos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.