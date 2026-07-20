# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `puntajes` (números), un valor `max` (máximo posible para la escala) y un valor `ajuste` (bonificación o penalización numérica).
* **Proceso**: Conversión de puntajes a porcentaje, aplicación de un factor de ajuste, restricción de los resultados al rango [0, 100] y categorización según umbrales.
* **Salida**: Un arreglo de objetos que contiene el `original`, el `final` (formateado a 2 decimales) y su `clasificacion`.

## Reglas identificadas

1. **Normalización**: El cálculo base sigue la fórmula de porcentaje: $\frac{\text{puntaje}}{\text{max}} \times 100$.
2. **Limitación (Clamping)**: El resultado final debe estar obligatoriamente entre 0 y 100, usando `Math.min` y `Math.max`.
3. **Categorización**: Se define "Certificado" para puntajes $\ge 90$, "Aprobado" para puntajes $\ge 70$ y "Reprobado" para el resto.

## Pruebas

### Caso normal

* **Entrada**: `puntajes = [80], max = 100, ajuste = 5`
* **Resultado esperado**: `[{ original: 80, final: "85.00", clasificacion: "Aprobado" }]`

### Caso borde

* **Entrada**: `puntajes = [95], max = 100, ajuste = 10`
* **Resultado esperado**: `[{ original: 95, final: "100.00", clasificacion: "Certificado" }]` (Nota: Se limita a 100 aunque el cálculo daría 105).

## Explicacion final

La solución es efectiva porque garantiza la integridad de los datos mediante el "clamping". A diferencia de otros sistemas de calificación, este código evita que cualquier ajuste de bonificación o error en la entrada supere los límites lógicos de una escala porcentual (0-100). Además, al usar `.map()`, se procesa toda la lista de forma uniforme y segura, asegurando que cada puntaje sea transformado y clasificado correctamente antes de ser devuelto en el objeto de resultado.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo de ejemplo (Puntaje 80, max 100, ajuste 5)**:
* $(\frac{80}{100} \times 100) + 5 = 80 + 5 = 85$.
* Rango: $85$ está dentro de $[0, 100]$.
* Clasificación: $85 \ge 70$ $\rightarrow$ "Aprobado".
