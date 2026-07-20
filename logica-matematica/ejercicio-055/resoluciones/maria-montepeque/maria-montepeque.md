# Ejercicio 055 - velocidad tiempo distancia

## Analisis

- Entrada: una lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de los participantes, se redondea, se le suma el bono y se le resta la penalizacion.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. La mediana representa mejor al grupo que el promedio, porque no se ve afectada por valores muy altos o muy bajos.
2. El `puntaje_final` es `mediana redondeada + bono - penalizacion`.
3. La `clasificacion` depende del `puntaje_final`: `elite` (30 o mas), `competitivo` (20 a 29) o `principiante` (menos de 20).
4. Si `participantes` esta vacio no hay datos suficientes para calcular, por lo que se retorna `puntaje_final: 0` y `clasificacion: 'sin datos'` en lugar de fallar.

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
penalizacion: 1
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

### Caso adicional

Entrada:

```text
participantes: [40, 35]
bono: 10
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 46
clasificacion: elite
```

## Explicacion final

La mediana se calculo ordenando la lista y tomando el valor central (o el promedio de los dos valores centrales cuando la cantidad es par), y se redondeo antes de aplicar el bono y la penalizacion para trabajar siempre con puntajes enteros. Esto reproduce exactamente el resultado del ejemplo del enunciado (mediana 21.5 redondeada a 22, mas 8 de bono, menos 3 de penalizacion, da 27) y se valida ademas con un caso borde (lista vacia) y un caso adicional con cantidad par de participantes.

## Como ejecutar

```bash
node maria-montepeque.js
```