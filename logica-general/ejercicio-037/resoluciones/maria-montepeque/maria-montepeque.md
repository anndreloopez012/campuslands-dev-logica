# Solucion - Ejercicio 037 (logica-general)

## Analisis

- Entrada: una lista de estados de elementos de un modelo 3D (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: comparar los estados contra una tabla de decision ordenada por prioridad y quedarse con el de mayor riesgo.
- Salida: un objeto `{ accion, motivo }` que indica que hacer y por que.

## Reglas identificadas

1. Un elemento `bloqueado` siempre tiene la prioridad mas alta, porque representa un riesgo.
2. Si no hay bloqueados, un `pendiente` se atiende antes que un `aprobado`.
3. Si no hay ningun estado valido en la lista, se debe informar explicitamente en vez de fallar.

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
{ accion: 'sin elementos', motivo: 'no hay datos para evaluar.' }
```

Tambien se probaron dos casos adicionales: una lista con solo `aprobado` y una lista con un estado invalido mezclado con uno valido, para confirmar que la tabla de decision ignora estados desconocidos sin romper la logica.

## Explicacion final

La solucion usa un objeto de mapeo (`TABLA_DECISION`) en vez de condicionales encadenados. Cada estado tiene asociada una prioridad numerica, una accion y un motivo. La funcion recorre la lista una sola vez y se queda con la regla de menor numero de prioridad (es decir, la mas urgente), lo que hace el codigo facil de leer y de extender si en el futuro se agregan mas estados.

## Sugerencia aplicada

Cada regla del problema se convirtio en una entrada de la tabla de decision antes de escribir la logica de recorrido, siguiendo la sugerencia del ejercicio.