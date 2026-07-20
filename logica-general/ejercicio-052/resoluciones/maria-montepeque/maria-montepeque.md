# Solucion - Ejercicio 052

## Analisis

- Entrada: una lista de estados (`items`), un nivel de `prioridad` y una `regla` de negocio en texto.
- Proceso: se busca dentro de `items` el estado mas urgente segun un orden fijo (bloqueado > pendiente > aprobado) y se genera una accion y un motivo asociados.
- Salida: un objeto `{ accion, motivo }` que indica que hacer y por que.

## Reglas identificadas

1. Si existe al menos un item `bloqueado`, ese es el estado mas urgente y debe revisarse primero.
2. Si no hay bloqueados pero existe algun `pendiente`, ese pasa a ser el mas urgente.
3. Si todos los items estan `aprobado`, no se requiere accion urgente.
4. Si la lista de items esta vacia, se devuelve una accion de "sin accion" con su motivo.
5. Un estado no reconocido no detiene el programa: se reporta como tal para revision manual.

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
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde

Entrada:

```text
items: []
prioridad: alta
regla: revisar bloqueados primero
```

Resultado esperado:

```text
accion: sin accion
motivo: la lista de items esta vacia.
```

## Explicacion final

Se usa un objeto de mapeo (`RANGO_ESTADO`) para asignar un numero de urgencia a cada estado, en lugar de encadenar condicionales. Con `reduce` se recorre la lista una sola vez y se conserva el estado con el rango mas bajo (mas urgente). Esto hace la solucion facil de extender: agregar un nuevo estado solo implica sumar una entrada al mapa, sin tocar la logica de comparacion. El caso de lista vacia se valida antes de cualquier calculo para evitar resultados inconsistentes.

## Como ejecutar

```bash
node maria-montepeque.js
```

El archivo incluye pruebas con `assert` que se ejecutan automaticamente y muestran los resultados en consola.
