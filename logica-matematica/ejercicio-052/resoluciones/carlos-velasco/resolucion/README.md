# Plantilla de solucion

## Analisis

* **Entrada**: Cantidad de saques `exitosos` (número), saques `totales` (número) y un `margen` de confianza (decimal).
* **Proceso**: Cálculo de la probabilidad base, aplicación del margen de confianza con tope máximo al 100%, y clasificación del nivel del jugador según umbrales predefinidos.
* **Salida**: Un objeto que contiene la `probabilidad_final` (formateada como porcentaje), la `clasificacion` obtenida y una `explicacion`.

## Reglas identificadas

1. Si no hay saques totales, la probabilidad es 0 y la clasificación es "Novato".
2. La probabilidad ajustada no puede superar el 1.0 (100%), por lo que se aplica un tope superior.
3. Los niveles se clasifican como: "Experto" (probabilidad $\ge 0.8$), "Promedio" ($0.5 \le$ probabilidad $< 0.8$), y "Novato" (probabilidad $< 0.5$).

## Pruebas

### Caso normal

* **Entrada**: `8, 10, 0.05`
* **Resultado esperado**: `{ probabilidad_final: "85.00%", clasificacion: "Experto", ... }`

### Caso borde

* **Entrada**: `0, 10, 0.01`
* **Resultado esperado**: `{ probabilidad_final: "1.00%", clasificacion: "Novato", ... }`

## Explicacion final

La solución funciona mediante una lógica condicional que asegura la integridad de los datos de entrada (evitando divisiones por cero) y la coherencia del resultado final (limitando la probabilidad al 100%). El uso de `toFixed(2)` permite estandarizar la representación visual del porcentaje, mientras que la estructura de `if-else` permite una clasificación jerárquica clara y eficiente del nivel del deportista basándose en su rendimiento ajustado.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (8 exitosos, 10 totales, 0.05 margen)**:
* Probabilidad base: $8 / 10 = 0.8$.
* Probabilidad ajustada: $0.8 + 0.05 = 0.85$.
* Clasificación: $0.85 \ge 0.8$, por lo tanto es "Experto".