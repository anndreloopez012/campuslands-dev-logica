# Ejercicio 042 - Validacion de datos (ranking de futbol sala)

## Analisis

- Entrada: una lista de estados de partidos (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se filtran los estados reconocidos y se elige el de mayor urgencia segun una tabla de prioridad.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Un partido `bloqueado` es el riesgo mas alto y se revisa primero.
2. Si no hay bloqueados, un `pendiente` se revisa antes que uno `aprobado`.
3. Un `aprobado` no requiere ninguna accion si no hay estados mas urgentes.
4. Una lista vacia no tiene nada que evaluar.
5. Los estados que no estan en la tabla de prioridad se ignoran, no rompen la logica.

## Pruebas

### Caso normal

Entrada:

```js
['aprobado', 'pendiente', 'bloqueado']
```

Resultado esperado:

```js
{ accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{ accion: 'sin datos', motivo: 'no hay partidos para evaluar.' }
```

Tambien se probaron dos casos adicionales: una lista con solo `aprobado` (confirma que no se marca ninguna urgencia falsa) y una lista con un estado desconocido mezclado con uno valido (confirma que los estados invalidos se ignoran sin afectar el resultado).

## Explicacion final

La solucion usa un objeto de mapeo (`PRIORIDAD`) en vez de condicionales encadenados. Cada estado tiene un numero de orden, una accion y un motivo. La lista se filtra primero para descartar estados no reconocidos y luego se recorre una sola vez con `reduce` para quedarse con el de menor numero de orden, es decir, el mas urgente. Esto hace que agregar un nuevo estado en el futuro solo requiera una linea nueva en la tabla.

## Sugerencia aplicada

Cada regla del problema se convirtio en una entrada de la tabla `PRIORIDAD` antes de escribir la logica de recorrido, siguiendo la sugerencia del ejercicio.