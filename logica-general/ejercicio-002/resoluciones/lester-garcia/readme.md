# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo (`array`) de objetos que representan los equipos de un torneo, donde cada objeto contiene: `nombre`, partidos jugados (`pj`), partidos ganados (`pg`), partidos empatados (`pe`), partidos perdidos (`pp`), goles a favor (`gf`) y goles en contra (`gc`).
- **Proceso:** 1. Filtra los equipos para conservar únicamente aquellos que cumplen con las reglas de validación de datos.
  2. Mapea la lista de equipos válidos para calcular sus **puntos totales** (3 por victoria, 1 por empate) y su **diferencia de goles** (goles a favor menos goles en contra).
  3. Ordena los equipos de forma descendente: primero por mayor cantidad de puntos y, en caso de empate, por mayor diferencia de goles.
- **Salida:** Un nuevo arreglo de objetos ordenados que representa el ranking final, donde cada objeto contiene solo las propiedades `nombre`, `puntos` y `difGoles`.

## Reglas identificadas

1. **Validación de consistencia de partidos:** Un equipo es válido si la suma de sus partidos ganados, empatados y perdidos es exactamente igual al total de partidos jugados (`pj == pg + pe + pp`).
2. **Validación de integridad de datos:** El `nombre` del equipo debe existir y ser una cadena de texto, y las estadísticas de goles (`gf` y `gc`) no pueden ser números negativos.
3. **Criterio de desempate:** El ordenamiento principal se define por la cantidad de puntos. Si dos equipos tienen la misma puntuación, se define por el que tenga la mayor diferencia de goles.

## Pruebas

### Caso normal

Entrada:
```javascript
[
    { nombre: "Alpha FC", pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 3 },
    { nombre: "Beta Futsal", pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 2 },
    { nombre: "Gamma Team", pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 }
]