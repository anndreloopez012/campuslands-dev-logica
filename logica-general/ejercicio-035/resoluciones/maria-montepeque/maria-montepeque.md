# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de elementos de un tablero de dibujo digital (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se recorre la lista y se determina cual estado tiene la prioridad de revision mas alta usando un mapeo numerico de prioridades.
- Salida: un objeto `{ accion, motivo }` que indica que estado revisar y por que.

## Reglas identificadas

1. Los elementos `bloqueado` se revisan antes que los `pendiente`, y estos antes que los `aprobado`.
2. Si la lista esta vacia, no hay accion que tomar.
3. Si ningun estado de la lista es reconocido, tampoco hay accion valida.

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
{ accion: 'sin accion', motivo: 'no hay elementos para revisar.' }
```

Caso borde adicional (estados no reconocidos):

Entrada:

```js
['en-proceso', 'archivado']
```

Resultado esperado:

```js
{ accion: 'sin accion', motivo: 'ningun estado reconocido en la lista.' }
```

## Explicacion final

Se usa un objeto de mapeo (`PRIORIDAD`) en lugar de condicionales encadenados para asignar un numero a cada estado; entre mas bajo el numero, mas urgente es revisarlo. Con `reduce` se recorre la lista una sola vez y se conserva el estado de mayor prioridad encontrado hasta el momento. Los estados no reconocidos se ignoran durante la comparacion, y si al final ninguno fue valido, se informa explicitamente en la salida. Esto hace la solucion facil de extender: agregar un nuevo estado solo requiere una linea en `PRIORIDAD`.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.