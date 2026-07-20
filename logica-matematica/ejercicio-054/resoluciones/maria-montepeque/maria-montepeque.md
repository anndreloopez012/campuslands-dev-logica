# Solucion - Ejercicio 053

## Analisis

- Entrada: una lista de puntajes de `participantes`, un `bono` numerico y una `penalizacion` numerica.
- Proceso: se calcula el promedio de los participantes, se redondea hacia arriba, se suma el bono y se resta la penalizacion.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Nota sobre el enunciado

El README original del ejercicio menciona "coordenadas y distancia" como tema, pero el unico ejemplo de entrada/salida disponible corresponde a `participantes`, `bono` y `penalizacion`. Ante la falta de un enunciado detallado, la solucion se construyo para que sea consistente con ese ejemplo verificable. Los rangos de clasificacion (`competitivo`, `aceptable`, `principiante`) son una regla razonable derivada del unico dato de referencia disponible y pueden ajustarse si el instructor entrega un enunciado distinto.

## Reglas identificadas

1. El promedio de los participantes se redondea siempre hacia arriba antes de aplicar bono y penalizacion.
2. `puntaje_final = Math.ceil(promedio) + bono - penalizacion`.
3. La clasificacion depende de rangos sobre `puntaje_final`: 25 o mas es `competitivo`, entre 15 y 24 es `aceptable`, menos de 15 es `principiante`.
4. Una lista de participantes vacia no se procesa y devuelve `clasificacion: sin-datos`.

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
clasificacion: sin-datos
```

## Explicacion final

La solucion separa el calculo en tres funciones pequenas (promedio, clasificacion y calculo final) para que cada regla se pueda leer y probar por separado. El uso de una tabla de rangos (`RANGOS_CLASIFICACION`) evita condicionales anidados y facilita agregar o modificar niveles de clasificacion sin tocar el resto de la logica. El caso de lista vacia se valida antes de cualquier calculo para evitar una division entre cero.

## Como ejecutar

```bash
node maria-montepeque.js
```