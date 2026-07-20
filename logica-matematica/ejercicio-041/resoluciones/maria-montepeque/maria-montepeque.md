# Solucion - Ejercicio 041

## Analisis

- Entrada: una lista de jugadores, cada uno con `nombre`, `puntosBase`, `bonificacion` y `penalizacion`.
- Proceso: se calcula un puntaje final aplicando la bonificacion y la penalizacion sobre el puntaje base, controlando que el resultado se mantenga dentro de un rango valido (0 a 100). Luego se clasifica ese puntaje.
- Salida: una lista de objetos con `nombre`, `puntajeFinal` y `clasificacion` para cada jugador.

## Reglas identificadas

1. El puntaje final se calcula como `puntosBase + bonificacion - penalizacion`.
2. El resultado siempre se controla dentro del rango 0-100: si baja de 0 se ajusta a 0, si supera 100 se ajusta a 100.
3. La clasificacion depende del puntaje final: 80 o mas es "competitivo", entre 50 y 79 es "intermedio", y menos de 50 es "principiante".
4. Cualquier valor numerico invalido (no finito) se trata como 0 para evitar resultados como `NaN`.
5. Una lista vacia de jugadores retorna una lista vacia, sin lanzar errores.

## Pruebas

### Caso normal

Entrada:

```text
[
  { nombre: "Kai", puntosBase: 75, bonificacion: 10, penalizacion: 3 },
  { nombre: "Noa", puntosBase: 40, bonificacion: 5, penalizacion: 15 },
  { nombre: "Ren", puntosBase: 95, bonificacion: 20, penalizacion: 0 }
]
```

Resultado esperado:

```text
[
  { nombre: "Kai", puntajeFinal: 82, clasificacion: "competitivo" },
  { nombre: "Noa", puntajeFinal: 30, clasificacion: "principiante" },
  { nombre: "Ren", puntajeFinal: 100, clasificacion: "competitivo" }
]
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
[]
```

## Explicacion final

La solucion separa el calculo en dos responsabilidades claras: controlar el resultado numerico dentro de un rango valido (`calcularPuntajeControlado`) y decidir la clasificacion (`clasificarPuntaje`). Usar un arreglo de reglas ordenado de mayor a menor para la clasificacion evita condicionales anidados y permite agregar nuevos rangos facilmente. La normalizacion de valores no finitos garantiza que datos invalidos no rompan el calculo, y el caso de lista vacia se resuelve antes de cualquier operacion.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.