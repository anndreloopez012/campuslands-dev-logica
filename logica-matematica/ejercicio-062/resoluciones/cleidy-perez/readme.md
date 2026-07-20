# Lógica matemática 062 - porcentaje y proporciones

## Entrada:
Un arreglo con los equipos de fútbol sala y su rendimiento.

## Proceso:
Se valida que el arreglo tenga datos. Luego se suma el rendimiento de todos los equipos. Después se calcula el porcentaje de rendimiento de cada equipo dividiendo su rendimiento entre el total y multiplicando por 100.

## Salida:
- Nombre de cada equipo.
- Porcentaje de rendimiento de cada equipo.

# Reglas identificadas

- El arreglo debe contener al menos un equipo.
- Se debe sumar el rendimiento de todos los equipos.
- El porcentaje de cada equipo se calcula con la fórmula:

  (rendimiento del equipo × 100) / rendimiento total

# Pruebas

## Caso normal

### Entrada:
Un arreglo con dos equipos y sus rendimientos.

### Resultado esperado:
Se muestra el porcentaje de rendimiento correspondiente a cada equipo.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay equipos registrados."** y la función finaliza sin errores.

# Explicación final

La solución funciona porque primero valida que existan datos para procesar. Luego utiliza un acumulador para obtener el rendimiento total y, mediante un segundo ciclo, calcula el porcentaje de rendimiento de cada equipo. Finalmente, muestra el resultado con dos decimales.

# Sugerencia

Antes de calcular porcentajes, suma el total de los datos y utiliza ese valor como base para obtener el porcentaje de cada elemento.