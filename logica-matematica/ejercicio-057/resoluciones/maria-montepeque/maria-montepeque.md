# Solucion - Ejercicio 057: estadisticas de ranking

## Analisis

- Entrada: una lista de puntajes de participantes, un bono y una penalizacion.
- Proceso: se calcula la mediana de los puntajes, se le suma el bono, se le resta la penalizacion y el resultado se clasifica segun rangos definidos.
- Salida: un objeto con el puntaje final, la clasificacion y una explicacion del calculo.

## Reglas identificadas

1. El puntaje base se obtiene con la mediana de la lista de participantes, ya que representa mejor el rendimiento general que el promedio cuando hay valores extremos.
2. Al puntaje base se le suma el bono y se le resta la penalizacion; el resultado se redondea al entero mas cercano.
3. La clasificacion se asigna por rangos, evaluados de mayor a menor:
   - 35 o mas: `elite`
   - 25 a 34: `competitivo`
   - 15 a 24: `intermedio`
   - menos de 15: `principiante`
4. Si la lista de participantes esta vacia, no se puede calcular una mediana, por lo que se retorna `puntaje_final: null` y `clasificacion: 'sin_datos'` en lugar de forzar un resultado numerico invalido.

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
puntaje_final: null
clasificacion: sin_datos
```

## Explicacion final

Se eligio la mediana en lugar del promedio porque es mas estable ante puntajes atipicos dentro de un ranking. La clasificacion se implemento como una tabla de reglas ordenadas de mayor a menor umbral, recorrida con `find`, en vez de encadenar condicionales `if/else`, lo que hace mas facil agregar o ajustar rangos en el futuro. El caso de lista vacia se valida explicitamente antes de calcular la mediana para evitar resultados como `NaN`.