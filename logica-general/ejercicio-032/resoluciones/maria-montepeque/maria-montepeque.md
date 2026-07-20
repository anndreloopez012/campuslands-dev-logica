# Solucion - Ejercicio 032

## Analisis

- Entrada: una lista de opciones (mesas o solicitudes del club de pingpong), cada una con `nombre`, `estado` (`bloqueado`, `pendiente`, `aprobado`) y `urgencia` (`alta`, `media`, `baja`).
- Proceso: comparar todas las opciones aplicando primero el criterio de estado y, en caso de empate, el criterio de urgencia. Se descartan las opciones con datos invalidos antes de comparar.
- Salida: un objeto `{ accion, motivo }` que indica cual opcion revisar primero y por que.

## Reglas identificadas

1. El estado define la prioridad principal: `bloqueado` > `pendiente` > `aprobado`, porque un bloqueo representa riesgo inmediato.
2. Si dos o mas opciones comparten el mismo estado, se rompe el empate con la urgencia: `alta` > `media` > `baja`.
3. Si el empate persiste (mismo estado y misma urgencia), gana la primera opcion registrada en la lista.
4. Las opciones con `estado` o `urgencia` fuera del catalogo permitido se ignoran, en lugar de romper la comparacion.
5. Una lista vacia o invalida no genera un error: devuelve un resultado explicando que no hay nada que revisar.

## Pruebas

### Caso normal

Entrada:

```js
[
  { nombre: 'mesa-1', estado: 'aprobado', urgencia: 'baja' },
  { nombre: 'mesa-2', estado: 'pendiente', urgencia: 'alta' },
  { nombre: 'mesa-3', estado: 'bloqueado', urgencia: 'media' },
]
```

Resultado esperado:

```js
{ accion: 'revisar mesa-3', motivo: 'la regla prioriza estado "bloqueado" con urgencia "media" antes que el resto de opciones.' }
```

### Caso borde 1: lista vacia

Entrada: `[]`

Resultado esperado:

```js
{ accion: 'sin opciones para revisar', motivo: 'la lista de opciones esta vacia o no es valida.' }
```

### Caso borde 2: empate de estado resuelto por urgencia

Entrada:

```js
[
  { nombre: 'mesa-4', estado: 'bloqueado', urgencia: 'media' },
  { nombre: 'mesa-5', estado: 'bloqueado', urgencia: 'alta' },
]
```

Resultado esperado:

```js
{ accion: 'revisar mesa-5', motivo: 'la regla prioriza estado "bloqueado" con urgencia "alta" antes que el resto de opciones.' }
```

### Caso borde 3: datos invalidos descartados

Entrada:

```js
[
  { nombre: 'mesa-6', estado: 'desconocido', urgencia: 'alta' },
  { nombre: 'mesa-7', estado: 'pendiente', urgencia: 'baja' },
]
```

Resultado esperado:

```js
{ accion: 'revisar mesa-7', motivo: 'la regla prioriza estado "pendiente" con urgencia "baja" antes que el resto de opciones.' }
```

## Explicacion final

La solucion usa dos objetos de mapeo numerico (`PRIORIDAD_ESTADO` y `PRIORIDAD_URGENCIA`) en lugar de condicionales encadenados. Esto hace que agregar o reordenar niveles de prioridad sea tan simple como editar el mapa, sin tocar la logica de comparacion. La funcion `reduce` recorre la lista una sola vez comparando la opcion actual contra la mejor encontrada hasta el momento, aplicando estado y luego urgencia como criterios de desempate. Los casos borde (lista vacia, datos invalidos) se filtran antes de comparar para que la logica principal solo trabaje con datos confiables.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
