# Plantilla de solucion

## Analisis

- Entrada: una lista de puntajes de participantes (`participantes`), un bono (`bono`) y una penalizacion (`penalizacion`).
- Proceso: se calcula el promedio general, se aislan los participantes destacados (los que superan ese promedio) y se normaliza su promedio; ese valor se compara contra un umbral ajustado por el bono y la penalizacion.
- Salida: un objeto con el puntaje final normalizado, la clasificacion resultante y una explicacion breve.

## Reglas identificadas

1. El promedio general es la suma de todos los puntajes entre la cantidad de participantes.
2. Los "destacados" son los participantes con puntaje mayor al promedio general; si nadie supera el promedio, se usan todos los participantes como base.
3. El puntaje final es el promedio de los destacados, truncado hacia abajo (`Math.floor`).
4. El umbral de clasificacion es el promedio general mas el bono, menos la penalizacion.
5. Si el puntaje final es mayor o igual al umbral, la clasificacion es "competitivo"; si no, es "regular".
6. Si no hay participantes, no se puede normalizar nada y se indica explicitamente.

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
{ puntaje_final: 27, clasificacion: 'competitivo', explicacion: 'se sumo el bono y se resto la penalizacion segun las reglas.' }
```

### Caso borde

Entrada:

```text
participantes: []
```

Resultado esperado:

```text
{ puntaje_final: 0, clasificacion: 'sin datos', explicacion: 'no hay participantes para normalizar.' }
```

## Explicacion final

El promedio general funciona como linea base para identificar quienes destacan sobre el grupo. Cuando existen destacados, su promedio (truncado con `Math.floor`) representa el puntaje final normalizado; cuando nadie supera el promedio (por ejemplo, si todos los puntajes son iguales), se usa el grupo completo como base para no dejar el calculo sin datos. El bono y la penalizacion no modifican el puntaje final directamente, sino el umbral contra el que se compara, de modo que ambos factores endurecen o suavizan la exigencia para clasificar como "competitivo". Se maneja explicitamente el caso de una lista vacia para evitar una division entre cero.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.