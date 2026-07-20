# Lógica General 063 - Toma de decisiones

## Entrada:
Un arreglo con los equipos del torneo y la cantidad de puntos obtenidos.

## Proceso:
Se valida que el arreglo tenga datos. Luego se recorre cada equipo y, mediante condiciones, se determina si clasifica directamente, va al repechaje o queda eliminado según sus puntos.

## Salida:
- Mensaje indicando el resultado de cada equipo en el torneo.

# Reglas identificadas

- Si el equipo tiene 10 puntos o más, clasifica directamente.
- Si tiene entre 7 y 9 puntos, va al repechaje.
- Si tiene menos de 7 puntos, queda eliminado.

# Pruebas

## Caso normal

### Entrada:
Un arreglo con cuatro equipos y diferentes cantidades de puntos.

### Resultado esperado:
Se muestra si cada equipo clasifica directamente, va al repechaje o queda eliminado.

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje **"No hay equipos registrados."**

# Explicación final

La solución funciona porque primero verifica que existan equipos registrados. Después recorre el arreglo y utiliza estructuras condicionales para tomar una decisión según los puntos obtenidos por cada equipo. Finalmente, muestra el resultado correspondiente para cada uno.

# Sugerencia

Define primero las reglas del torneo y conviértelas en condiciones (`if`, `else if` y `else`) antes de programar la solución.