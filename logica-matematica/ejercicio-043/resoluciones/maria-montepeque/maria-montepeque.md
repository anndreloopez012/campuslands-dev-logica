# Ejercicio 043 - Promedios y medianas

## Analisis

- Entrada: un arreglo de puntuaciones numericas de los jugadores de un equipo en un torneo de esports.
- Proceso: se calcula el promedio y la mediana del arreglo, se clasifica al equipo segun el promedio y se evalua que tan pareja es la puntuacion comparando promedio y mediana.
- Salida: un objeto con `promedio`, `mediana`, `clasificacion`, `consistencia` y una `explicacion` en texto.

> Nota: el ejemplo del README base del ejercicio (participantes, bono, penalizacion) corresponde al ejercicio 040, no aplica a este reto de promedios y medianas. Por eso se definio un ejemplo propio acorde a la tematica de torneo de esports.

## Reglas identificadas

1. El promedio se calcula sumando todas las puntuaciones y dividiendo entre la cantidad de jugadores.
2. La mediana se calcula ordenando las puntuaciones: si la cantidad es impar se toma el valor central, si es par se promedian los dos valores centrales.
3. La clasificacion depende del promedio: elite (>= 80), competitivo (>= 60), amateur (>= 40), principiante (< 40).
4. La consistencia compara promedio y mediana: si la diferencia es de 5 puntos o menos, el equipo es "parejo"; si es mayor, es "irregular".
5. Si el arreglo de puntuaciones esta vacio o no es un arreglo valido, se retorna un resultado indicando que no hay datos, sin intentar calcular.

## Pruebas

### Caso normal

Entrada:

```text
puntuaciones: [45, 60, 78, 90, 33]
```

Resultado esperado:

```text
promedio: 61.2
mediana: 60
clasificacion: competitivo
consistencia: equipo parejo
```

### Caso borde

Entrada:

```text
puntuaciones: []
```

Resultado esperado:

```text
promedio: null
mediana: null
clasificacion: sin datos
consistencia: sin datos
```

### Caso adicional (cantidad par de jugadores)

Entrada:

```text
puntuaciones: [20, 40, 60, 80]
```

Resultado esperado:

```text
promedio: 50
mediana: 50
clasificacion: amateur
consistencia: equipo parejo
```

## Explicacion final

Usar una tabla de niveles (`NIVELES`) recorrida con `find` evita encadenar varios `if/else` para la clasificacion, y separar el calculo de promedio, mediana, clasificacion y consistencia en funciones independientes hace que cada regla se pueda leer y probar por separado. El caso borde de arreglo vacio se valida antes de cualquier calculo para evitar divisiones invalidas o resultados `NaN`.

## Como ejecutar

```bash
node maria-montepeque.js
```