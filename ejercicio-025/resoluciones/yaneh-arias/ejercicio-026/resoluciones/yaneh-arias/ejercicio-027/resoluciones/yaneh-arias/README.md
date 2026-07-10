
# Ejercicio 027 - Secuencias Numéricas (Playlist)

## Análisis del Problema
El reto consiste en determinar si una serie de duraciones de canciones forman una secuencia ascendente, lo cual es útil para crear listas de reproducción con una progresión de ritmo o intensidad.

## Reglas Aplicadas
1. **Verificación de Secuencia:** Se utiliza un ciclo `for` para comparar cada elemento `i` con su antecesor `i-1`. Si `duraciones[i] < duraciones[i-1]`, la secuencia se marca como no válida.
2. **Acumulación:** Se usa un acumulador `tiempoTotal` para sumar la duración de todos los tracks en una sola pasada.
3. **Validación:** Se contemplan casos donde la lista está vacía o desordenada.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal:** `[3, 4, 5, 6]` -> Devuelve `secuencia_valida: true`.
2. **Caso Borde:** `[5, 3, 8]` -> Devuelve `secuencia_valida: false` (detecta la ruptura en la secuencia).