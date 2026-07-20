# Análisis

## Entrada:
Un arreglo con los vehículos del taller, la placa, el nombre del cliente y el nivel de prioridad.

## Proceso:
Se valida que el arreglo tenga datos. Luego se ordenan los vehículos de mayor a menor prioridad utilizando el método `sort()`. Finalmente, se muestra el orden en que deben ser atendidos.

## Salida:
- Lista de vehículos ordenados según su nivel de prioridad.

# Reglas identificadas

- El arreglo debe contener al menos un vehículo.
- Los vehículos con mayor prioridad se atienden primero.
- El orden se realiza de mayor a menor prioridad.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cinco vehículos y diferentes niveles de prioridad.

### Resultado esperado:
Se muestran los vehículos ordenados desde la prioridad más alta hasta la más baja.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay vehículos registrados."**

# Explicación final

La solución funciona porque primero verifica que existan vehículos registrados. Después ordena el arreglo según el nivel de prioridad y finalmente muestra el orden de atención de cada vehículo.

# Sugerencia

Cuando necesites organizar datos por importancia, utiliza un criterio de ordenamiento claro antes de mostrar los resultados.