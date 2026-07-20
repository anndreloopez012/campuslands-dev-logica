# Plantilla de solucion

## Analisis

- Entrada: una lista de strings con los estados de los peleadores de kickboxing (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: ordenar la lista segun un mapa de prioridad numerico y tomar el estado mas urgente.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Los elementos `bloqueado` tienen la prioridad mas alta porque representan un riesgo.
2. Si no hay bloqueados, los `pendiente` se revisan antes que los `aprobado`.
3. Si la lista esta vacia o el estado no esta definido en las reglas, se debe informar sin romper el programa.

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
{ accion: "sin elementos", motivo: "la lista esta vacia, no hay nada que revisar." }
```

Se agregaron dos casos borde adicionales: una lista con solo `aprobado` (confirma que la prioridad mas baja tambien se reporta correctamente) y una lista con un estado no reconocido (`descalificado`), para validar que la solucion no falla ante datos fuera de las reglas conocidas.

## Explicacion final

La solucion usa un objeto de mapeo numerico (`PRIORIDAD_ESTADOS`) en lugar de condicionales encadenados para ordenar los estados por urgencia. Al ordenar la lista completa con `sort`, el primer elemento siempre es el de mayor prioridad, sin importar el orden original de entrada. Los estados no reconocidos reciben una prioridad muy baja (`Number.MAX_SAFE_INTEGER`) para que nunca desplacen a un estado valido, y se valida por separado si el resultado final pertenece a las reglas conocidas antes de construir la respuesta.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.