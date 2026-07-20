# Ejercicio 036 - Presupuestos y descuentos

## Analisis

- Entrada: una lista `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula la mediana de `participantes`, se le suma el `bono`, se le resta la `penalizacion` y se redondea el resultado.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. La mediana se usa como base porque no se ve afectada por valores extremos, a diferencia del promedio.
2. `puntaje_final = round(mediana + bono - penalizacion)`.
3. La clasificacion depende del `puntaje_final`:
   - `puntaje_final >= 25` -> `competitivo`
   - `15 <= puntaje_final < 25` -> `intermedio`
   - `puntaje_final < 15` -> `basico`
4. Si la lista de participantes esta vacia, no hay puntaje que calcular y se devuelve `clasificacion: "sin datos"`.

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

### Caso adicional (cantidad impar de participantes)

Entrada:

```text
participantes: [10, 14, 22]
bono: 4
penalizacion: 6
```

Resultado esperado:

```text
puntaje_final: 12
clasificacion: basico
```

## Explicacion final

La mediana representa mejor el desempeno tipico del grupo que el promedio, porque no se distorsiona con un participante muy alto o muy bajo. A partir de ahi, el bono y la penalizacion ajustan ese valor central, y el redondeo evita decimales en el puntaje final. La clasificacion en tres rangos permite verificar el resultado de forma directa comparando el `puntaje_final` contra los limites definidos.

## Como ejecutar

```bash
node maria-montepeque.js
```

Esto imprime el caso normal, el caso borde y un caso adicional en consola.