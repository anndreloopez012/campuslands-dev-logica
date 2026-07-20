# Ejercicio 058 - Normalizacion de puntajes

## Analisis

- Entrada: una lista de puntuaciones, un bono y una penalizacion.
- Proceso: se calcula un promedio general redondeado, se identifican los valores destacados por encima de ese promedio, se obtiene un puntaje final normalizado y se compara contra un umbral derivado del bono y la penalizacion.
- Salida: un objeto con el promedio general, los destacados, el puntaje final, el umbral y la clasificacion final.

## Reglas identificadas

1. El promedio general se calcula sumando todas las puntuaciones y dividiendo entre la cantidad de participantes, redondeando el resultado con `Math.round`.
2. Los destacados son los valores estrictamente mayores al promedio general redondeado.
3. El puntaje final es el promedio de los destacados truncado hacia abajo con `Math.floor`. Si no hay destacados, el puntaje final es el propio promedio general.
4. El umbral de clasificacion se obtiene sumando el bono y restando la penalizacion al promedio general.
5. La clasificacion compara el puntaje final contra el umbral: por encima es "competitivo", igual es "regular" y por debajo es "bajo".
6. Una lista vacia se maneja como caso borde explicito, sin dividir entre cero, devolviendo la clasificacion "sin datos".

## Pruebas

### Caso normal

Entrada:

```js
normalizarPuntajes([12, 18, 25, 30], 8, 3)
```

Resultado esperado:

```js
{
  promedio_general: 21,
  destacados: [25, 30],
  puntaje_final: 27,
  umbral: 26,
  clasificacion: 'competitivo'
}
```

### Caso borde

Entrada:

```js
normalizarPuntajes([], 5, 2)
```

Resultado esperado:

```js
{
  promedio_general: 0,
  destacados: [],
  puntaje_final: 0,
  umbral: 0,
  clasificacion: 'sin datos'
}
```

### Caso adicional: sin destacados

Entrada:

```js
normalizarPuntajes([15, 15, 15], 5, 2)
```

Resultado esperado:

```js
{
  promedio_general: 15,
  destacados: [],
  puntaje_final: 15,
  umbral: 18,
  clasificacion: 'bajo'
}
```

## Explicacion final

La solucion separa claramente cada paso de la normalizacion: primero se establece una referencia (el promedio general), luego se identifica quien esta por encima de esa referencia (destacados) y se calcula un puntaje final conservador con `Math.floor`. El umbral se construye a partir del bono y la penalizacion para que la clasificacion dependa de reglas explicitas y no de condicionales anidados. El caso de lista vacia y el caso sin destacados se manejan sin errores ni divisiones invalidas, garantizando que la funcion siempre retorne una estructura consistente.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.