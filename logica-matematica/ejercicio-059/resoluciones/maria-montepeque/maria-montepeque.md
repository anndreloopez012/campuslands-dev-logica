# Solucion - Ejercicio 059: validaciones numericas

## Analisis

- Entrada: una lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de los participantes, se redondea, se le suma el bono y se le resta la penalizacion.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. Si la lista de participantes esta vacia, no hay puntaje que calcular y se devuelve un resultado `sin_datos`.
2. La mediana representa mejor el desempeno general que el promedio, porque no se ve tan afectada por valores extremos.
3. El bono se suma una unica vez y la penalizacion se resta una unica vez sobre el puntaje base ya redondeado.
4. La clasificacion depende de rangos fijos sobre el puntaje final: `elite` (>= 40), `competitivo` (>= 20), `principiante` (>= 0) y `no_clasificado` (negativo).

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

### Caso borde

Entrada:

```js
{ participantes: [], bono: 5, penalizacion: 2 }
```

Resultado esperado:

```js
{ puntaje_final: 0, clasificacion: 'sin_datos' }
```

Tambien se probo un caso donde la penalizacion supera al puntaje base mas el bono, para confirmar que la clasificacion `no_clasificado` se activa correctamente con puntajes negativos.

## Explicacion final

La mediana se eligio como base del calculo porque, a diferencia del promedio, no se distorsiona con un participante muy alto o muy bajo. Redondear la mediana antes de aplicar el bono y la penalizacion evita trabajar con decimales en el resultado final. Los rangos de clasificacion se definieron como umbrales simples y ordenados, de forma que el primero que se cumple determina la categoria, cubriendo tambien el caso de puntajes negativos.