# Plantilla de solucion

## Analisis

- Entrada: una lista de elementos de una escena de animacion 3D (personajes, camara, fondo, luces, texturas), cada uno con un `nombre` y un `estado` de renderizado (`bloqueado`, `pendiente`, `en-proceso`, `completado`).
- Proceso: recorrer la lista y elegir el elemento con la prioridad mas alta segun su estado, usando un mapa numerico de prioridades en vez de condicionales encadenados.
- Salida: un objeto con la accion a tomar, el objetivo (nombre del elemento) y el motivo de la decision.

## Reglas identificadas

1. Un elemento `bloqueado` siempre se atiende antes que cualquier otro estado.
2. Si no hay bloqueados, se atiende primero lo `pendiente`, luego lo `en-proceso`, y por ultimo lo `completado`.
3. Si la lista de elementos esta vacia, no hay nada que analizar y se debe indicar explicitamente en vez de fallar.

## Pruebas

### Caso normal

Entrada:

```js
[
  { nombre: 'personaje-principal', estado: 'pendiente' },
  { nombre: 'fondo', estado: 'bloqueado' },
  { nombre: 'camara', estado: 'en-proceso' },
]
```

Resultado esperado:

```js
{
  accion: 'revisar bloqueado',
  objetivo: 'fondo',
  motivo: 'la regla prioriza riesgos antes de tareas normales.',
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
  accion: 'sin-elementos',
  objetivo: null,
  motivo: 'la escena no tiene elementos para analizar.',
}
```

Ademas se agrego un tercer caso donde todos los elementos estan `completado`, para confirmar que la funcion tambien resuelve correctamente cuando no hay urgencias.

## Explicacion final

La solucion usa un objeto `PRIORIDAD` que mapea cada estado a un numero: mientras mas bajo el numero, mas urgente es el estado. Esto evita cadenas de `if/else` y hace que agregar un nuevo estado en el futuro solo requiera una linea nueva en el mapa. La funcion recorre la lista una sola vez, guardando el elemento con la prioridad mas baja encontrada hasta el momento, y al final construye la respuesta con la accion, el objetivo y el motivo correspondiente. El caso de lista vacia se valida al inicio para evitar comparar contra `Infinity` sin sentido y para dar una respuesta clara en vez de un error.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.