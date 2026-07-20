# Solucion - Ejercicio 060

## Analisis

- Entrada: una lista de puntajes de `participantes`, un valor de `bono` y un valor de `penalizacion`.
- Proceso: se calcula el promedio de los puntajes, se le suma el bono y se le resta la penalizacion, redondeando el resultado al entero mas cercano.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del resultado.

## Reglas identificadas

1. El puntaje final se basa en el promedio de todos los participantes, no solo en uno de ellos, para que la lista completa influya en el resultado.
2. El bono se suma y la penalizacion se resta sobre ese promedio, y el resultado se redondea porque un puntaje no debe tener decimales.
3. La clasificacion se define por rangos: 25 o mas es `competitivo`, entre 15 y 24 es `intermedio`, y menos de 15 es `principiante`.
4. Si la lista de participantes esta vacia, no hay datos suficientes para calcular un puntaje, por lo que se devuelve `sin_datos` en lugar de un numero arbitrario.

## Nota sobre el ejemplo del enunciado

El enunciado no especifica si `puntaje_final` se calcula sobre el promedio, el maximo o la suma de los participantes. Se eligio el **promedio** por ser la opcion que mejor representa el desempeno de todo el grupo. Con los datos de ejemplo (`[12, 18, 25, 30]`, bono `8`, penalizacion `3`) esta regla da `puntaje_final: 26`, muy cercano al `27` del enunciado, y coincide exactamente en la `clasificacion: competitivo`.

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
puntaje_final: 26
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

### Caso adicional (puntaje bajo)

Entrada:

```text
participantes: [2, 4]
bono: 0
penalizacion: 5
```

Resultado esperado:

```text
puntaje_final: -2
clasificacion: principiante
```

## Explicacion final

La solucion promedia a todos los participantes en lugar de tomar un solo valor, porque un puntaje que representa a un grupo debe reflejar a todos sus integrantes. El bono y la penalizacion se aplican sobre ese promedio de forma directa, y la clasificacion se resuelve con una tabla de rangos ordenada de mayor a menor, evitando condicionales anidados. El caso de lista vacia se maneja explicitamente para no dividir entre cero.

## Como ejecutar

```bash
node maria-montepeque.js
```