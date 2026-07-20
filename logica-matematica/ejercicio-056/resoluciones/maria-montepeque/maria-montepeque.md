# Solucion - Ejercicio 056

## Analisis

- Entrada: una lista de puntajes de participantes, un bono y una penalizacion.
- Proceso: se calcula el promedio de los participantes, se redondea hacia arriba, se suma el bono, se resta la penalizacion y se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. Si la lista de participantes esta vacia, se retorna `puntaje_final: 0` y `clasificacion: "sin datos"`.
2. El promedio de los participantes se redondea siempre hacia arriba (`Math.ceil`) antes de aplicar el bono y la penalizacion.
3. La clasificacion depende del `puntaje_final`: 30 o mas es `elite`, entre 20 y 29 es `competitivo`, y menos de 20 es `principiante`.

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
clasificacion: sin datos
```

## Explicacion final

El promedio simple de la lista no daba un numero entero (21.25), y el resultado esperado del ejemplo (27) solo se obtiene si el promedio se redondea hacia arriba antes de sumar el bono y restar la penalizacion (22 + 8 - 3 = 27). Por eso se uso `Math.ceil` en vez de redondeo normal o truncado. La clasificacion se resuelve con una tabla de rangos ordenada de mayor a menor, evitando condicionales anidados.

## Como ejecutar

```bash
node maria-montepeque.js
```

## Sugerencia aplicada

Se verifico manualmente la operacion (promedio, redondeo, bono y penalizacion) antes de confiar en el resultado del codigo, tal como sugiere la plantilla del ejercicio.