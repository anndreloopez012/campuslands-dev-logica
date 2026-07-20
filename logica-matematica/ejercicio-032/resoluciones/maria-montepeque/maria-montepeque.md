# Solucion - Ejercicio 032 (logica-matematica)

## Analisis

- Entrada: una lista de puntajes de `participantes` (numeros), un `bono` (numero) y una `penalizacion` (numero).
- Proceso: se calcula la mediana de los puntajes, se le suma el bono, se le resta la penalizacion y el resultado se redondea al entero mas cercano.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. Si la lista de participantes esta vacia, no hay puntaje que calcular: se retorna `puntaje_final: 0` y `clasificacion: "sin_datos"`.
2. El puntaje base es la **mediana** de los puntajes (no el promedio), ya que representa mejor el rendimiento tipico sin dejarse afectar por valores extremos.
3. Al puntaje base se le suma el `bono` y se le resta la `penalizacion`; el resultado se redondea con `Math.round`.
4. La clasificacion depende del `puntaje_final`:
   - `>= 25` → `competitivo`
   - `>= 10` y `< 25` → `intermedio`
   - `< 10` → `principiante`

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

Se agrego ademas un tercer caso (`[2, 4, 6]`, bono 1, penalizacion 3) para confirmar la clasificacion `principiante` en el rango bajo.

## Explicacion final

Se eligio la mediana en lugar del promedio porque no se ve afectada por un participante con un puntaje muy alto o muy bajo, lo cual la hace mas representativa del grupo. El uso de una tabla de umbrales (`UMBRAL_COMPETITIVO`, `UMBRAL_INTERMEDIO`) en lugar de condicionales anidados hace que agregar o ajustar rangos en el futuro sea sencillo y legible. El caso de lista vacia se valida explicitamente al inicio para evitar calculos invalidos (como una mediana de un arreglo vacio).

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.