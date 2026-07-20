# Ejercicio 049 - Modulos y divisibilidad

## Analisis

- Entrada: una lista de peliculas de miedo, cada una con `titulo` y `duracion` (en minutos).
- Proceso: clasificar cada duracion segun reglas de divisibilidad y acumular un resumen por categoria.
- Salida: un objeto con la lista de peliculas clasificadas y un resumen con el total por categoria.

## Reglas identificadas

1. Si la duracion es divisible entre 15 (entre 3 y 5 a la vez), la categoria es `maraton-completa`.
2. Si la duracion es divisible entre 3 (y no entre 15), la categoria es `sesion-doble`.
3. Si la duracion es divisible entre 5 (y no entre 15), la categoria es `funcion-especial`.
4. Si no cumple ninguna de las anteriores, la categoria es `funcion-regular`.
5. Si la lista de peliculas esta vacia, se devuelve un resultado vacio sin lanzar error.

## Pruebas

### Caso normal

Entrada:

```text
[
  { titulo: 'La Noche del Espejo', duracion: 90 },
  { titulo: 'Sombras en el Atico', duracion: 78 },
  { titulo: 'El Ultimo Grito', duracion: 80 },
  { titulo: 'Cabaña Sangrienta', duracion: 77 }
]
```

Resultado esperado:

```text
{
  peliculas: [
    { titulo: 'La Noche del Espejo', duracion: 90, categoria: 'maraton-completa' },
    { titulo: 'Sombras en el Atico', duracion: 78, categoria: 'sesion-doble' },
    { titulo: 'El Ultimo Grito', duracion: 80, categoria: 'funcion-especial' },
    { titulo: 'Cabaña Sangrienta', duracion: 77, categoria: 'funcion-regular' }
  ],
  resumen: {
    'maraton-completa': 1,
    'sesion-doble': 1,
    'funcion-especial': 1,
    'funcion-regular': 1
  }
}
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ peliculas: [], resumen: {} }
```

## Explicacion final

La solucion usa una lista de reglas ordenadas por prioridad (`REGLAS_CLASIFICACION`), donde cada regla tiene un criterio de divisibilidad y su categoria asociada. La funcion `clasificarDuracion` recorre esas reglas con `find` y devuelve la primera que cumpla, evitando condicionales anidados y facilitando agregar nuevas categorias en el futuro. La regla de `maraton-completa` se evalua primero porque una duracion divisible entre 15 tambien es divisible entre 3 y 5, y debe tener prioridad sobre las otras dos. El caso de lista vacia se valida al inicio de `clasificarMaratonPeliculas`, devolviendo una estructura consistente sin recorrer nada.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Como revisar

El archivo imprime en consola el resultado del caso normal y del caso borde en formato JSON, listos para compararlos con la salida esperada de este README.