# Plantilla de solucion

## Analisis

- Entrada: un arreglo de numeros que representa las reproducciones diarias de una cancion dentro de una playlist, en orden cronologico.
- Proceso: se calculan las diferencias entre reproducciones consecutivas, se determina si esas diferencias son constantes (secuencia aritmetica) para predecir el siguiente valor, y se clasifica la tendencia general de la secuencia.
- Salida: un objeto con las diferencias calculadas, si la secuencia es aritmetica, la razon comun (si aplica), el siguiente valor estimado, la tendencia y el promedio de reproducciones.

## Reglas identificadas

1. Si el arreglo esta vacio, no hay datos suficientes y la tendencia se marca como `sin_datos`.
2. Si el arreglo tiene un solo elemento, no existen diferencias posibles y la tendencia se marca como `insuficiente`.
3. Si todas las diferencias entre terminos consecutivos son iguales, la secuencia es aritmetica y se puede predecir el siguiente valor sumando la razon comun al ultimo termino.
4. Si todas las diferencias son cero, la tendencia es `estable`; si todas son positivas, `creciente`; si todas son negativas, `decreciente`.
5. Si las diferencias no siguen un patron uniforme, la tendencia se clasifica como `irregular_creciente` o `irregular_decreciente` segun el signo de la suma total de las diferencias.

## Pruebas

### Caso normal

Entrada:

```text
[10, 20, 30, 40]
```

Resultado esperado:

```text
diferencias: [10, 10, 10]
esAritmetica: true
razonComun: 10
siguienteValor: 50
tendencia: creciente
promedioReproducciones: 25
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
diferencias: []
esAritmetica: false
razonComun: null
siguienteValor: null
tendencia: sin_datos
promedioReproducciones: 0
```

Casos adicionales probados: un solo elemento (`[42]`, tendencia `insuficiente`), secuencia estable (`[15, 15, 15, 15]`) y secuencia irregular (`[5, 12, 9, 20]`).

## Explicacion final

La solucion recorre el arreglo una sola vez para obtener las diferencias entre terminos consecutivos con `map`. A partir de ese arreglo de diferencias se decide si la secuencia es aritmetica comparando que todas las diferencias sean iguales a la primera con `every`, lo que evita condicionales anidados y hace el codigo mas legible. La tendencia se calcula en una funcion separada para mantener responsabilidades unicas: una funcion arma el resultado y otra clasifica el comportamiento de la secuencia. Los casos borde (arreglo vacio y de un solo elemento) se resuelven antes de cualquier calculo para evitar operaciones invalidas sobre indices inexistentes.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.