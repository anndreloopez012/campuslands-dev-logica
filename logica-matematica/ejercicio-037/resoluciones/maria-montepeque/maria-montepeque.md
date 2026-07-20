# Solucion - Ejercicio 037: estadisticas de ranking

## Analisis

- Entrada: una lista de puntajes de `participantes`, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los puntajes, se redondea hacia arriba y se ajusta con el bono y la penalizacion.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. El promedio de `participantes` se redondea siempre hacia arriba (`Math.ceil`) antes de aplicar los ajustes.
2. El `puntaje_final` es igual al promedio redondeado, mas el `bono`, menos la `penalizacion`.
3. La `clasificacion` depende de rangos sobre el `puntaje_final`:
   - `>= 35`: elite
   - `>= 20`: competitivo
   - `>= 10`: regular
   - `< 10`: principiante
4. Si `participantes` esta vacio, no hay datos suficientes para calcular un ranking, asi que se devuelve `puntaje_final: 0` y `clasificacion: sin_datos` en lugar de forzar un calculo invalido.

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

El promedio se redondea hacia arriba porque el enunciado indica que el resultado del ejemplo (27) solo se obtiene si el promedio de 21.25 se lleva a 22 antes de sumar el bono y restar la penalizacion; con redondeo normal o hacia abajo el resultado no coincide. El caso de lista vacia se maneja de forma explicita para evitar una division entre cero y para dejar claro que no existe ranking sin participantes.

## Como ejecutar

```bash
node maria-montepeque.js
```