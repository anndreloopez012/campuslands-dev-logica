# Solucion - Ejercicio 040 (logica-general)

## Analisis

- Entrada: una lista de pedidos de comida urbana. Cada pedido tiene `id`, `estado` (`aprobado`, `pendiente` o `bloqueado`) y `minutosEspera`.
- Proceso: se aplica una estrategia de seleccion en tres niveles para decidir cual pedido atender primero.
- Salida: un objeto con la accion a realizar, el motivo de la decision y el pedido seleccionado.

## Reglas identificadas

1. Un pedido `bloqueado` siempre tiene prioridad sobre `pendiente` y `aprobado`, porque representa un riesgo (por ejemplo, un pago fallido) que hay que resolver antes de seguir.
2. Si no hay diferencia de estado entre dos pedidos, gana el que lleva mas `minutosEspera`, para evitar que un cliente espere de mas.
3. Si el estado y la espera son iguales, se desempata por el `id` mas bajo (orden de llegada).
4. Si la lista viene vacia o ningun pedido tiene un estado reconocido, la solucion lo indica explicitamente en vez de fallar.

## Pruebas

### Caso normal

Entrada:

```js
[
  { id: 1, estado: 'aprobado', minutosEspera: 10 },
  { id: 2, estado: 'pendiente', minutosEspera: 25 },
  { id: 3, estado: 'bloqueado', minutosEspera: 5 },
]
```

Resultado esperado:

```js
{
  accion: 'atender pedido 3',
  motivo: 'los pedidos bloqueados se revisan primero porque representan un riesgo.',
  pedidoSeleccionado: { id: 3, estado: 'bloqueado', minutosEspera: 5 },
}
```

### Caso borde 1: lista vacia

Entrada: `[]`

Resultado esperado:

```js
{
  accion: 'sin pedidos',
  motivo: 'no hay pedidos para procesar.',
  pedidoSeleccionado: null,
}
```

### Caso borde 2: empate total

Entrada:

```js
[
  { id: 5, estado: 'pendiente', minutosEspera: 15 },
  { id: 2, estado: 'pendiente', minutosEspera: 15 },
]
```

Resultado esperado:

```js
{
  accion: 'atender pedido 2',
  motivo: 'entre los pedidos sin riesgo, se atiende primero al que mas tiempo ha esperado.',
  pedidoSeleccionado: { id: 2, estado: 'pendiente', minutosEspera: 15 },
}
```

## Explicacion final

La solucion usa un mapa numerico (`PRIORIDAD_ESTADO`) en lugar de condicionales encadenados para ordenar los estados por urgencia, lo que hace la comparacion mas clara y facil de extender si aparece un nuevo estado. La seleccion se hace con un `reduce` que compara el pedido actual contra el mejor candidato en tres niveles (estado, espera, id), aplicando las reglas del reto en el mismo orden en que fueron definidas. Los casos borde (lista vacia y estados no reconocidos) se validan antes de procesar, para que la funcion nunca falle por datos incompletos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.