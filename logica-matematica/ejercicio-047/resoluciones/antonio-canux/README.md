# Ejercicio 047 - Secuencias numéricas (Playlist Musical)

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo de números enteros (`duracionesSegundos`) donde cada valor representa la duración de una canción en segundos.
- Proceso: Se inicializa un acumulador de tiempo en 0. Se itera a través del arreglo de duraciones. En cada paso de la secuencia, se registra el valor actual del acumulador como el tiempo de inicio de la canción correspondiente, convirtiéndolo también a un formato de texto de minutos y segundos. Luego, se suma la duración de la canción actual al acumulador para preparar el inicio de la siguiente.
- Salida: Un objeto que contiene el número total de pistas, la secuencia detallada con los tiempos de inicio por pista (tanto en segundos crudos como en formato "MM:SS"), y la duración total de la playlist.

## Reglas identificadas

1. **Punto de origen de la secuencia:** La primera canción (Pista 1) siempre iniciará en el segundo 0.
2. **Construcción de la secuencia (Sucesión Acumulativa):** El tiempo de inicio de la pista $n$ es exactamente igual al tiempo de inicio de la pista $n-1$ más la duración de la pista $n-1$.
3. **Formato de tiempo:** Los segundos acumulados deben dividirse entre 60 y redondearse hacia abajo (`Math.floor`) para obtener los minutos. El residuo de esa división (usando el operador módulo `%`) representa los segundos restantes.

## Pruebas

### Caso normal

Entrada: `duracionesSegundos: [200, 180, 240, 210]`

Resultado esperado:
```text
total_pistas: 4
secuencia_reproduccion: [
  { pista: 1, inicio_segundos: 0, inicio_formato: "0:00" },
  { pista: 2, inicio_segundos: 200, inicio_formato: "3:20" },
  { pista: 3, inicio_segundos: 380, inicio_formato: "6:20" },
  { pista: 4, inicio_segundos: 620, inicio_formato: "10:20" }
]
duracion_total_playlist: "13:50"
```

### Caso borde
Entrada: `duracionesSegundos: [215]`

Resultado esperado:

```text
total_pistas: 1
secuencia_reproduccion: [
  { pista: 1, inicio_segundos: 0, inicio_formato: "0:00" }
]
duracion_total_playlist: "3:35"
```

## Explicacion final
Esta solución funciona porque aplica correctamente el concepto de series numéricas donde el valor del siguiente término depende estrictamente de la suma del término anterior y un factor aditivo (en este caso, la duración del track anterior). Utilizar un solo ciclo for permite crear el historial de tiempos y, al mismo tiempo, llevar el cálculo para el final de la lista, logrando una complejidad de tiempo O(n) eficiente. Además, se emplea .padStart(2, '0') para asegurar que segundos como '5' se formateen correctamente como '05', manteniendo la estética del entorno musical.