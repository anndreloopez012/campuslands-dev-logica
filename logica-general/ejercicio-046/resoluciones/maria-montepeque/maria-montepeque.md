# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de autos hiperdeportivos (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se busca el estado con mayor prioridad de riesgo dentro de la lista, usando un mapa numerico de prioridades en lugar de condicionales encadenados.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Si existe al menos un auto `bloqueado`, ese es el que se debe revisar primero.
2. Si no hay `bloqueado` pero existe algun `pendiente`, ese es el que se revisa.
3. Si todos los autos estan `aprobado`, no se requiere ninguna accion.
4. Una lista vacia o con estados no reconocidos es un caso borde que debe manejarse explicitamente, sin lanzar errores.

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
{ accion: "sin accion", motivo: "no hay autos en la lista para revisar." }
```

## Explicacion final

La solucion usa un objeto de mapeo (`PRIORIDAD_REVISION`) que asigna un numero a cada estado, donde el numero mas bajo representa el mayor riesgo. Se recorre la lista una sola vez guardando el estado con la prioridad mas baja encontrada hasta el momento, lo que evita condicionales anidados y hace explicito el orden de prioridad. Los casos borde (lista vacia, estados no reconocidos y el caso donde todos los autos estan aprobados) se manejan de forma independiente para que el resultado siempre sea predecible.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.