# Solucion - Ejercicio 058: sistemas de turnos

## Analisis

- Entrada: una lista de estados de items (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se identifica el estado de mayor riesgo presente en la lista usando un mapa de prioridades.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Si hay al menos un item `bloqueado`, se revisa primero (mayor prioridad).
2. Si no hay bloqueados pero hay `pendiente`, se revisa lo pendiente.
3. Si todo esta `aprobado`, no hay accion urgente.
4. Si la lista esta vacia o no tiene estados reconocidos, se retorna `sin datos`.

## Por que un mapa de prioridades

En lugar de encadenar condicionales (`if/else if`) para cada estado, se usa un objeto `PRIORIDAD` que asigna un numero a cada estado. Esto hace que agregar o cambiar prioridades sea mas simple y evita duplicar logica de comparacion.

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
{ accion: 'sin datos', motivo: 'no se recibieron items para evaluar.' }
```

## Explicacion final

La solucion recorre la lista una sola vez con `reduce`, quedandose siempre con el estado de menor valor numerico (mayor prioridad real). Esto evita ordenar el arreglo completo y resuelve el problema en una sola pasada. El caso de lista vacia y el de estados no reconocidos se manejan de forma explicita para no romper la funcion.