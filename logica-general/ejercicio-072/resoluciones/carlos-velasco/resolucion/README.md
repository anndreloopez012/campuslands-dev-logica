# Plantilla de solucion

## Analisis

* **Entrada**: Dos objetos (`opcionA`, `opcionB`) que representan paletas, cada uno con propiedades `modelo` (string), `velocidad` (number) y `control` (number).
* **Proceso**: Cálculo del promedio aritmético de velocidad y control para cada opción y comparación de dichos promedios para determinar cuál modelo es superior o si existe un empate.
* **Salida**: Un objeto que indica el nombre del modelo ganador (o "Empate") y un motivo que explica la decisión basada en el balance de rendimiento.

## Reglas identificadas

1. **Criterio de Evaluación**: El rendimiento se define estrictamente como el promedio de velocidad y control: $(velocidad + control) / 2$.
2. **Determinación de Superioridad**: Se elige al modelo con el promedio mayor.
3. **Condición de Empate**: Si ambos promedios son exactamente iguales, el sistema debe reportar un empate técnico.

## Pruebas

### Caso normal

* **Entrada**: `paleta1 = { modelo: "Pro-Spin", velocidad: 8, control: 7 }, paleta2 = { modelo: "Speed-Master", velocidad: 9, control: 5 }`
* **Resultado esperado**: `{ mejor: "Pro-Spin", motivo: "Superioridad en balance velocidad-control." }`

### Caso borde

* **Entrada**: `paleta1 = { modelo: "Pro-Spin", velocidad: 8, control: 7 }, paleta2 = { modelo: "Igual", velocidad: 7.5, control: 7.5 }`
* **Resultado esperado**: `{ mejor: "Empate", motivo: "Ambas paletas ofrecen el mismo rendimiento." }`

## Explicacion final

La solución es efectiva porque encapsula la lógica de evaluación en una función interna (`calcularScore`), lo que permite que el proceso de comparación sea limpio y fácil de mantener. Al centralizar el cálculo del promedio, se garantiza que ambos modelos sean evaluados bajo los mismos estándares matemáticos. La estructura `if-else` asegura una respuesta determinante y unívoca, permitiendo que el sistema tome decisiones rápidas y precisas entre las opciones presentadas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de superioridad A**: `scoreA > scoreB`
* **Condición de superioridad B**: `scoreB > scoreA`
* **Condición de empate**: `scoreA === scoreB` (o el bloque `else` final)