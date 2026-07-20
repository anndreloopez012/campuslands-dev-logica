## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre el arreglo para sumar todas las reseñas de los videojuegos. Finalmente, se calcula la reseña global obteniendo el promedio de las reseñas.

## Salida:
- Suma total de las reseñas.
- Reseña global (promedio) de los videojuegos.

# Reglas identificadas

- El arreglo debe contener al menos un videojuego.
- Se deben sumar todas las reseñas.
- La reseña global se obtiene dividiendo la suma de las reseñas entre la cantidad de videojuegos.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco videojuegos y sus respectivas reseñas.

### Resultado esperado:
Se muestra la suma de las reseñas y la reseña global calculada correctamente.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
La función devuelve un arreglo vacío sin generar errores.

# Explicación final

La solución funciona porque primero verifica que el arreglo tenga datos. Después utiliza un ciclo para sumar todas las reseñas mediante un acumulador y, al finalizar el recorrido, calcula el promedio dividiendo la suma entre la cantidad de videojuegos. Finalmente, muestra la reseña global obtenida.

# Sugerencia

Realiza primero las operaciones de suma con un acumulador y calcula el promedio al finalizar el recorrido del arreglo.