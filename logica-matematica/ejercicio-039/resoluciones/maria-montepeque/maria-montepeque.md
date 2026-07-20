# Ejercicio 039 - Validaciones numericas

## Analisis

- Entrada: una lista de `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio general, se aislan los participantes por encima de ese promedio (destacados) y se compara su promedio contra un umbral.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del resultado.

## Nota sobre el README del reto

El titulo del ejercicio menciona "validaciones numericas" y la tematica es "formulas quimicas", pero el unico ejemplo entrada/salida proporcionado usa `participantes`, `bono` y `penalizacion` (sin datos quimicos). Se resolvio siguiendo ese ejemplo de forma literal, igual que en el ejercicio 033, ya que es el unico caso verificable.

## Reglas identificadas

1. Si la lista de participantes esta vacia o no es un arreglo, no hay evaluacion posible.
2. El promedio general es la base de comparacion.
3. Los destacados son los participantes con valor mayor al promedio general. Si no hay ninguno, se usa el promedio general como referencia.
4. El puntaje final es el promedio de los destacados, redondeado hacia abajo.
5. El umbral es `promedio general + bono - penalizacion`.
6. Si el puntaje final supera el umbral, la clasificacion es "competitivo"; si es igual, "regular"; si es menor, "bajo".

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
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

Tambien se probo el caso de participantes todos iguales (`[10, 10, 10, 10]`), donde no hay destacados y el resultado es `puntaje_final: 10, clasificacion: bajo`.

## Explicacion final

La funcion evita condicionales anidados usando `filter` y `reduce` para separar y promediar los destacados, y una unica comparacion contra el umbral para decidir la clasificacion. Los casos borde (lista vacia y sin destacados) se manejan de forma explicita antes de aplicar la formula principal.