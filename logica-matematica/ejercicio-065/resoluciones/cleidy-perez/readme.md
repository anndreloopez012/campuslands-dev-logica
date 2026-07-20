# Logica matemáticas 065 - minimos y limites

## Entrada:
Un arreglo con los vehículos del taller, el nombre del cliente y el costo de la reparación.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre el arreglo para encontrar el costo mínimo y el costo máximo de las reparaciones. Durante el mismo recorrido se cuenta cuántas reparaciones superan el límite de Q1,500.

## Salida:
- Costo mínimo de reparación.
- Costo máximo de reparación.
- Cantidad de reparaciones que superan Q1,500.

# Reglas identificadas

- El arreglo debe contener al menos un vehículo.
- Se identifica el costo mínimo de las reparaciones.
- Se identifica el costo máximo de las reparaciones.
- Se cuentan las reparaciones con un costo mayor a Q1,500.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco vehículos y diferentes costos de reparación.

### Resultado esperado:
Se muestra el costo mínimo, el costo máximo y la cantidad de reparaciones que superan el límite establecido.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay vehículos registrados."**

# Explicación final

La solución funciona porque primero valida que existan vehículos registrados. Después utiliza un ciclo para comparar los costos de las reparaciones, identificar el valor mínimo y el máximo, y contar las reparaciones que superan el límite definido.

# Sugerencia

Cuando necesites encontrar valores mínimos o máximos, inicializa las variables con el primer elemento del arreglo y actualízalas durante el recorrido cuando encuentres un valor menor o mayor.