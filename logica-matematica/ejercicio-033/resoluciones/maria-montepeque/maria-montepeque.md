# Solucion - Ejercicio 033

## Analisis

- Entrada: una lista `participantes` con los puntajes obtenidos en la prueba de paracaidismo, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio general del grupo, se identifica a los participantes que superan ese promedio (destacados), se promedian sus puntajes y ese valor se compara contra un umbral ajustado por el bono y la penalizacion.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del resultado.

## Reglas identificadas

1. El README del ejercicio no especificaba la formula exacta, asi que se diseno una regla consistente con el ejemplo dado (participantes, bono, penalizacion -> puntaje_final: 27, clasificacion: competitivo).
2. `promedioGeneral` es el promedio de todos los puntajes de `participantes`.
3. `destacados` son los participantes con puntaje estrictamente mayor al `promedioGeneral`. Si nadie destaca (por ejemplo, todos empatados), se usa el `promedioGeneral` como respaldo.
4. `puntaje_final` es el promedio de los destacados, redondeado hacia abajo con `Math.floor`.
5. `umbral` es `promedioGeneral + bono - penalizacion`.
6. La clasificacion es `competitivo` si `puntaje_final >= umbral`, `regular` si es mayor o igual al `promedioGeneral` pero menor al umbral, y `necesita mejorar` en cualquier otro caso.
7. Si `participantes` esta vacio, se retorna `clasificacion: 'sin datos'` sin intentar calcular un promedio.

## Pruebas

### Caso normal

Entrada:

```js
{ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 }
```

Resultado esperado:

```js
{ puntaje_final: 27, clasificacion: 'competitivo' }
```

### Caso borde 1 - participantes empatados

Entrada:

```js
{ participantes: [20, 20, 20, 20], bono: 5, penalizacion: 5 }
```

Resultado esperado:

```js
{ puntaje_final: 20, clasificacion: 'competitivo' }
```

### Caso borde 2 - lista vacia

Entrada:

```js
{ participantes: [], bono: 5, penalizacion: 5 }
```

Resultado esperado:

```js
{ puntaje_final: null, clasificacion: 'sin datos' }
```

## Explicacion final

La solucion evita condicionales encadenados usando `filter` y `reduce` para separar la logica de calculo (promedios) de la logica de decision (clasificacion). El caso de lista vacia se valida antes de cualquier operacion matematica para no dividir entre cero. El caso de empate se resuelve con un valor de respaldo (`promedioGeneral`) para que `destacados` nunca provoque un promedio de un arreglo vacio.

## Como ejecutar

```bash
node maria-montepeque.js
```