# Ejercicio 048 - Patrones de puntuacion

## Analisis

- Entrada: una lista de peliculas de ciencia ficcion, cada una con `titulo` y `calificacion` (0-10).
- Proceso: cada calificacion se clasifica en una categoria (`sobresaliente`, `aceptable`, `deficiente`) segun umbrales fijos, se acumulan conteos por categoria y se calcula el promedio general.
- Salida: un objeto con el total de peliculas, el promedio, el conteo por categoria, la categoria dominante (patron) y una clasificacion final de la coleccion.

## Reglas identificadas

1. Una calificacion mayor o igual a 8 se clasifica como `sobresaliente`; mayor o igual a 5 (y menor a 8) como `aceptable`; menor a 5 como `deficiente`.
2. El patron dominante es la categoria con mayor conteo de peliculas. En caso de empate se prioriza `sobresaliente` sobre `aceptable`, y `aceptable` sobre `deficiente`.
3. La clasificacion final de la coleccion depende directamente del patron dominante: `coleccion destacada`, `coleccion equilibrada` o `coleccion floja`.
4. Una lista vacia no tiene patron valido y se responde con `clasificacion: "sin datos"` sin lanzar errores.

## Pruebas

### Caso normal

Entrada:

```js
[
  { titulo: 'Interestelar', calificacion: 9 },
  { titulo: 'Dune', calificacion: 8.5 },
  { titulo: 'Prometheus', calificacion: 6 },
  { titulo: 'Waterworld', calificacion: 3 },
]
```

Resultado esperado:

```js
{
  total: 4,
  promedio: 6.63,
  conteo: { sobresaliente: 2, aceptable: 1, deficiente: 1 },
  patronDominante: 'sobresaliente',
  clasificacion: 'coleccion destacada'
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
  total: 0,
  promedio: 0,
  conteo: { sobresaliente: 0, aceptable: 0, deficiente: 0 },
  patronDominante: null,
  clasificacion: 'sin datos'
}
```

## Explicacion final

Se opto por representar los umbrales de calificacion como una tabla (`UMBRALES`) recorrida con `find`, en lugar de una cadena de `if/else`. Esto hace que agregar o modificar una categoria sea cuestion de editar un dato y no la logica del programa. El mismo criterio se aplico para mapear el patron dominante a su clasificacion final (`CLASIFICACIONES`), evitando condicionales anidados. El caso borde de lista vacia se maneja de forma explicita al inicio de la funcion, devolviendo una estructura consistente con la del caso normal para que quien consuma el resultado no tenga que verificar tipos distintos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.