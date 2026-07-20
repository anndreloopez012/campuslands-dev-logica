# Ejercicio 040 - Simulaciones con formulas

## Analisis

- Entrada: una lista `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea el resultado hacia arriba.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion depende del rango del `puntaje_final`:
   - 30 o mas: `elite`
   - 20 a 29: `competitivo`
   - 10 a 19: `regular`
   - menos de 10: `bajo`
3. Si la lista de participantes esta vacia, no hay division valida, por lo que se retorna un resultado especial (`sin_datos`) en lugar de calcular.

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
clasificacion: sin_datos
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es `21.25`. Sumando el bono (`+8`) y restando la penalizacion (`-3`) da `26.25`, que redondeado hacia arriba es `27`, dentro del rango `competitivo` (20-29). El caso borde de lista vacia se maneja explicitamente porque dividir entre cero participantes no tiene sentido matematico, evitando un `NaN` en el resultado.