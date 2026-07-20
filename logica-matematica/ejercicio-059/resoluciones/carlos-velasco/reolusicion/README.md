# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `atomos` (objetos con `nombre`, `carga` y `cantidad`) y un número `umbral` de tolerancia.
* **Proceso**: Cálculo de la carga total mediante sumatoria ponderada, validación de estabilidad usando el valor absoluto de la carga respecto al umbral y categorización basada en el resultado final.
* **Salida**: Un objeto que muestra la `carga_total`, la `clasificacion` (Neutra, Ion o Inestable) y una `explicacion` textual.

## Reglas identificadas

1. **Cálculo**: La carga total es la suma de los productos de `carga` por `cantidad` de cada átomo.
2. **Estabilidad**: Una molécula es estable si el valor absoluto de su carga total es menor o igual al `umbral` permitido.
3. **Clasificación**: Si es estable, se clasifica como "Neutra" si la carga es exactamente 0, o "Ion" si no es 0. Si no es estable, es "Inestable".

## Pruebas

### Caso normal

* **Entrada**: `[{ nombre: "Na", carga: 1, cantidad: 1 }, { nombre: "Cl", carga: -1, cantidad: 1 }], 0`
* **Resultado esperado**: `{ carga_total: 0, clasificacion: "Neutra", explicacion: "La molécula presenta una carga de 0." }`

### Caso borde

* **Entrada**: `[{ nombre: "Cl", carga: -1, cantidad: 1 }], 0`
* **Resultado esperado**: `{ carga_total: -1, clasificacion: "Inestable", explicacion: "La molécula presenta una carga de -1." }`

## Explicacion final

La solución funciona mediante una metodología de reducción de datos que transforma una lista compleja de componentes atómicos en un único escalar (la carga total). Al utilizar `Math.abs()` para la comparación con el umbral, eliminamos la complejidad de manejar signos negativos durante la evaluación de estabilidad, lo que hace que el código sea más robusto y fácil de leer. La clasificación final mediante un operador ternario anidado asegura que los tres estados posibles de la molécula se definan de manera exhaustiva y clara.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo de ejemplo (H2O)**:
* Hidrógeno: $1 \times 2 = 2$.
* Oxígeno: $-2 \times 1 = -2$.
* Carga total: $2 + (-2) = 0$.
* Clasificación: $0 \le 0$ y $0 == 0$ $\rightarrow$ "Neutra".