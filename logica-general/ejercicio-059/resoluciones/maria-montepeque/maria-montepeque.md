# Solucion - Ejercicio 059

## Analisis

- Entrada: una lista de estados de compuestos quimicos (`"estable"`, `"pendiente"`, `"inestable"`).
- Proceso: se identifica el estado de mayor urgencia presente en la lista, usando un mapa numerico de prioridad.
- Salida: un objeto con el estado prioritario, la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Un compuesto inestable siempre se atiende primero, sin importar cuantos otros estados existan.
2. Si no hay inestables pero hay pendientes, se prioriza analizar los pendientes.
3. Si todos los compuestos estan estables, no se requiere ninguna accion.
4. Una lista vacia o sin estados validos no debe procesarse como si tuviera datos.

## Pruebas

### Caso normal

Entrada:

```js
['estable', 'pendiente', 'inestable']
```

Resultado esperado:

```js
{
  estado: 'inestable',
  accion: 'aislar compuesto inestable',
  motivo: 'la regla prioriza riesgos de reactividad antes que cualquier otra tarea.'
}
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{
  accion: 'sin datos',
  motivo: 'no se recibieron compuestos para evaluar.'
}
```

## Explicacion final

La solucion usa un objeto de prioridad numerica (`PRIORIDAD`) en lugar de condicionales anidados: cada estado tiene un numero, y `reduce` recorre la lista quedandose siempre con el estado de menor numero (mayor urgencia). Esto hace que agregar un nuevo estado en el futuro solo requiera añadir una entrada al mapa, sin tocar la logica de comparacion. El caso de lista vacia o de estados no reconocidos se valida explicitamente antes de calcular cualquier resultado, evitando salidas inconsistentes.