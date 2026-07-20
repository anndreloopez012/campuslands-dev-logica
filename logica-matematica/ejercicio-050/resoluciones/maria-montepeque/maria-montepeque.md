# Solucion - Ejercicio 050

## Analisis

- Entrada: lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio general redondeado, se identifican los participantes destacados (por encima del promedio) y se obtiene el piso del promedio de destacados como puntaje final.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo y la tematica del ejercicio ("redondeo y precision", viajes y turismo) no coinciden con el ejemplo de entrada/salida provisto, que usa `participantes`, `bono` y `penalizacion` sin datos de viajes. Se siguio el ejemplo literal del README, igual que en ejercicios anteriores con la misma inconsistencia, incorporando operaciones explicitas de redondeo (`Math.round`) y precision (`Math.floor`) para alinear la solucion con el titulo del ejercicio.

## Reglas identificadas

1. Si la lista de participantes esta vacia, se retorna `puntaje_final: 0` y `clasificacion: "sin_datos"`.
2. El promedio general se calcula sumando los puntajes y dividiendo entre la cantidad de participantes, redondeado con `Math.round`.
3. Los destacados son los participantes con puntaje estrictamente mayor al promedio general redondeado.
4. El puntaje final es el piso (`Math.floor`) del promedio de los destacados. Si no hay destacados, se usa el promedio general redondeado.
5. El umbral de clasificacion es `promedioGeneral + bono - penalizacion`.
6. Si `puntaje_final >= umbral`, la clasificacion es `"competitivo"`. Si esta hasta 5 puntos por debajo del umbral, es `"regular"`. En cualquier otro caso, es `"bajo"`.

## Pruebas

### Caso normal

Entrada:

```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 27
clasificacion: competitivo
```

### Caso borde

Entrada:

```text
participantes: []
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin_datos
```

Tambien se probaron los casos: todos los participantes empatados y una lista donde nadie supera el promedio (sin destacados).

## Explicacion final

Se usa `Math.round` para el promedio general y `Math.floor` para el promedio de destacados, evitando condicionales encadenados para decidir la clasificacion mediante comparaciones directas contra el umbral. Se valida primero la lista vacia para no dividir entre cero, y se cubre el caso sin destacados usando el promedio general redondeado como respaldo del puntaje final.

## Como ejecutar

```bash
node maria-montepeque.js
```