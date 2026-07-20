# Ejercicio 051: Conteo Combinatorio Simple - Kickboxing

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo numérico `participantes` (representando los competidores inscritos), un valor numérico `bono` (puntos extra por patrocinio/espectáculo) y un valor numérico `penalizacion` (puntos a deducir por faltas).
- Proceso: Identificar la cantidad total de competidores, calcular cuántas combinaciones únicas de combates se pueden organizar, derivar un puntaje base a partir de esas peleas y competidores, y finalmente aplicar el bono y la penalización matemática para determinar si el torneo clasifica como competitivo.
- Salida: Un objeto que contiene el `puntaje_final` numérico, una cadena de texto `clasificacion` ("competitivo" o "amateur"), y una cadena de texto con la `explicacion` de los cálculos.

## Reglas identificadas

1. Se utiliza el conteo combinatorio simple para calcular cuántas peleas únicas (pares) se pueden dar entre todos los participantes utilizando la fórmula: $C = \frac{n \times (n-1)}{2}$ donde $n$ es la cantidad total de participantes.
2. El puntaje base del torneo se calcula sumando 3 puntos por cada pelea generada más 1 punto de asistencia por cada participante inscrito.
3. El puntaje final es el resultado de sumarle el `bono` y restarle la `penalizacion` al puntaje base. Si el resultado es $\ge 25$, la clasificación del torneo es "competitivo"; en caso contrario, es "amateur".

## Pruebas

### Caso normal

Entrada: 
- participantes: `[12, 18, 25, 30]` (4 participantes)
- bono: `8`
- penalizacion: `3`

Resultado esperado:
- puntaje_final: `27` (Combinaciones: 6. Base: 6 * 3 + 4 = 22. Final: 22 + 8 - 3 = 27)
- clasificacion: `"competitivo"`
- explicacion: `"Se calcularon 6 combinaciones de peleas posibles. Se sumo el bono y se resto la penalizacion segun las reglas establecidas."`

### Caso borde

Entrada: 
- participantes: `[22, 28]` (2 participantes, el mínimo indispensable para pelear)
- bono: `0`
- penalizacion: `5`

Resultado esperado:
- puntaje_final: `0` (Combinaciones: 1. Base: 1 * 3 + 2 = 5. Final: 5 + 0 - 5 = 0)
- clasificacion: `"amateur"`
- explicacion: `"Se calcularon 1 combinaciones de peleas posibles. Se sumo el bono y se resto la penalizacion segun las reglas establecidas."`

## Explicacion final

La solución funciona porque encapsula la lógica matemática detrás de un escenario de "todos contra todos". Al depender únicamente de la longitud del arreglo y no de los valores internos, la solución escala perfectamente sin importar las edades o pesos dentro del arreglo. Utilizar la fórmula de conteo combinatorio directo en lugar de bucles anidados (`for`) optimiza la ejecución (Big O(1) matemático en lugar de O(n^2)), asegurando un código limpio, medible y ordenado listo para evaluar el éxito del torneo