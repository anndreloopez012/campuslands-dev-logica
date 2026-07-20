# Solucion - Ejercicio 052 - Probabilidad basica (pingpong)

## Analisis

- Entrada: una lista de puntajes de participantes, un bono y una penalizacion.
- Proceso: se calcula el promedio de los participantes, se redondea hacia arriba, se le suma el bono y se le resta la penalizacion.
- Salida: un objeto con el puntaje final, la clasificacion obtenida y una explicacion del calculo.

## Reglas identificadas

1. El promedio de los participantes se redondea siempre hacia arriba antes de aplicar bono y penalizacion.
2. El puntaje final se clasifica en tres niveles: competitivo (>= 25), regular (>= 15 y < 25) y principiante (< 15).
3. Si la lista de participantes esta vacia, no hay calculo posible y se devuelve un resultado indicando "sin datos".

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

## Explicacion final

El promedio se redondea hacia arriba con `Math.ceil` para que valores fraccionarios no perjudiquen al participante. La clasificacion se resuelve con un arreglo de rangos ordenado de mayor a menor, en lugar de condicionales encadenados, lo que hace mas facil agregar o ajustar niveles en el futuro. El caso de lista vacia se valida antes de cualquier operacion matematica para evitar una division entre cero.

## Como ejecutar

```bash
node maria-montepeque.js
```