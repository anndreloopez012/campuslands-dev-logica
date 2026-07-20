# Lógica General 061 - Clasificación de reglas

## Entrada:
Un arreglo de videojuegos con la información de nombre, género, cantidad de jugadores, edad mínima y si tiene modo competitivo.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre el arreglo para contar los videojuegos con edad mínima de 16 años o más. Después se clasifican los videojuegos según las reglas utilizando `filter()`.

## Salida:
- Lista de videojuegos para mayores de 16 años.
- Cantidad de videojuegos para mayores de 16 años.
- Lista de videojuegos para equipos de 5 jugadores.
- Lista de videojuegos con modo competitivo.

# Reglas identificadas

- La edad mínima debe ser de 16 años o más.
- El videojuego debe permitir equipos de 5 jugadores.
- El videojuego debe tener modo competitivo.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco videojuegos competitivos.

### Resultado esperado:
Se muestran los videojuegos que cumplen cada regla y la cantidad de videojuegos con edad mínima de 16 años o más.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
La función devuelve un arreglo vacío sin generar errores.

# Explicación final

La solución funciona porque primero valida que el arreglo tenga información. Luego utiliza un ciclo para contar los videojuegos que cumplen la regla de edad y emplea filtros para clasificar los videojuegos según las reglas de negocio definidas. Finalmente, muestra los resultados obtenidos.

# Sugerencia

Convierte cada regla del problema en una condición clara antes de programar.