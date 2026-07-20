# Plantilla de solucion

## Analisis

- Entrada: una lista de equipos de futsal, cada uno con `nombre`, `ganados`, `empatados` y `perdidos`.
- Proceso: se calculan los partidos jugados, los puntos (3 por victoria, 1 por empate), el porcentaje de efectividad respecto a los puntos maximos posibles, y se asigna una clasificacion segun ese porcentaje. Luego se ordena el ranking por puntos y, en caso de empate, por porcentaje de efectividad.
- Salida: un arreglo de equipos con `posicion`, `nombre`, `partidosJugados`, `puntos`, `porcentajeEfectividad` y `clasificacion`.

## Reglas identificadas

1. Los puntos se calculan como `ganados * 3 + empatados`.
2. El porcentaje de efectividad es `(puntos / (partidosJugados * 3)) * 100`, redondeado a 2 decimales.
3. La clasificacion depende del porcentaje: 75% o mas es "campeon", 50% o mas es "clasificado", 25% o mas es "en riesgo", y por debajo es "eliminado". Un equipo sin partidos jugados se marca como "sin partidos" para evitar dividir entre cero.
4. El ranking final se ordena de mayor a menor puntos, usando el porcentaje de efectividad como criterio de desempate.

## Pruebas

### Caso normal

Entrada:

```js
[
  { nombre: 'Halcones FS', ganados: 6, empatados: 1, perdidos: 1 },
  { nombre: 'Tigres FS', ganados: 4, empatados: 2, perdidos: 2 },
  { nombre: 'Panteras FS', ganados: 2, empatados: 1, perdidos: 5 },
]
```

Resultado esperado:

```js
[
  { posicion: 1, nombre: 'Halcones FS', partidosJugados: 8, puntos: 19, porcentajeEfectividad: 79.17, clasificacion: 'campeon' },
  { posicion: 2, nombre: 'Tigres FS', partidosJugados: 8, puntos: 14, porcentajeEfectividad: 58.33, clasificacion: 'clasificado' },
  { posicion: 3, nombre: 'Panteras FS', partidosJugados: 8, puntos: 7, porcentajeEfectividad: 29.17, clasificacion: 'en riesgo' },
]
```

### Caso borde

Entrada:

```js
[
  { nombre: 'Lobos FS', ganados: 0, empatados: 0, perdidos: 0 },
  { nombre: 'Aguilas FS', ganados: 1, empatados: 0, perdidos: 0 },
]
```

Resultado esperado:

```js
[
  { posicion: 1, nombre: 'Aguilas FS', partidosJugados: 1, puntos: 3, porcentajeEfectividad: 100, clasificacion: 'campeon' },
  { posicion: 2, nombre: 'Lobos FS', partidosJugados: 0, puntos: 0, porcentajeEfectividad: 0, clasificacion: 'sin partidos' },
]
```

Tambien se probo el caso de una lista vacia, que retorna `[]` sin errores.

## Explicacion final

La solucion usa una tabla de umbrales (`UMBRALES_CLASIFICACION`) en lugar de encadenar varios `if/else`, lo que hace mas facil ajustar los porcentajes de clasificacion sin tocar la logica principal. El calculo de efectividad se aisla en su propia funcion para evitar dividir entre cero cuando un equipo no ha jugado partidos, y ese caso se marca explicitamente como "sin partidos" en vez de mostrar un porcentaje enganoso. Finalmente, el ordenamiento por puntos y porcentaje refleja como funciona un ranking real, incluyendo el desempate.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.