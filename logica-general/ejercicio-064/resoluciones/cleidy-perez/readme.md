# Análisis

## Entrada:
Un arreglo con el inventario de motos, incluyendo la marca, modelo, cilindraje y disponibilidad.

## Proceso:
Se valida que el arreglo tenga datos. Luego se utiliza un filtro para seleccionar únicamente las motos con un cilindraje mayor a 200 cc.

## Salida:
- Lista de motos que tienen más de 200 cc de cilindraje.

# Reglas identificadas

- El inventario debe contener al menos una moto.
- Solo se muestran las motos con un cilindraje mayor a 200 cc.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con varias motos y diferentes cilindrajes.

### Resultado esperado:
Se muestran únicamente las motos con un cilindraje superior a 200 cc.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay motos registradas."**

# Explicación final

La solución funciona porque primero valida que existan motos en el inventario. Después utiliza el método `filter()` para seleccionar únicamente las motos que cumplen la condición del cilindraje. Finalmente, muestra la lista de motos filtradas.

# Sugerencia

Define claramente la condición del filtro antes de programar para que el resultado sea fácil de entender y mantener.