# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `proyectos` (objetos con `nombre` y `puntaje`), un valor numérico de `bono` y un valor numérico de `penalizacion`.
* **Proceso**: Transformación de datos mediante `.map()` para aplicar ajustes de puntaje y categorías, seguido de un ordenamiento descendente con `.sort()`.
* **Salida**: Un arreglo de objetos ordenado, conteniendo el `nombre`, el `puntaje_final` (ajustado) y la `clasificacion` cualitativa.

## Reglas identificadas

1. **Incentivo**: Si el puntaje original es mayor a 80, se suma el `bono` al puntaje final.
2. **Sanción**: Si el puntaje original es menor a 50, se resta la `penalizacion` al puntaje final.
3. **Clasificación**: Se asigna "Excelente" si final > 85, "Aceptable" si final > 60, y "Crítico" por defecto (para valores <= 60).

## Pruebas

### Caso normal

* **Entrada**: `[{nombre: "Edificio A", puntaje: 85}], 10, 5`
* **Resultado esperado**: `[{ nombre: "Edificio A", puntaje_final: 95, clasificacion: "Excelente" }]`

### Caso borde

* **Entrada**: `[{nombre: "Casa B", puntaje: 40}], 10, 5`
* **Resultado esperado**: `[{ nombre: "Casa B", puntaje_final: 35, clasificacion: "Crítico" }]`

## Explicacion final

La solución funciona mediante una cadena de operaciones funcionales. Primero, utilizamos `.map()` para iterar sobre la colección, aplicando una lógica condicional que ajusta el puntaje de forma independiente para cada proyecto según su rendimiento original. Luego, el método `.sort()` reorganiza la lista resultante comparando los puntajes finales, lo que asegura que el ranking siempre muestre los resultados de mayor a menor relevancia. Este enfoque es altamente eficiente y mantiene el código legible al separar la lógica de cálculo de la de ordenamiento.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Edificio A, puntaje 85, bono 10)**:
* Puntaje final: $85 + 10 = 95$.
* Clasificación: $95 > 85$ $\rightarrow$ "Excelente".


* **Ejemplo manual (Casa B, puntaje 40, penalización 5)**:
* Puntaje final: $40 - 5 = 35$.
* Clasificación: $35 \le 60$ $\rightarrow$ "Crítico".