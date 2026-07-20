# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `votos` (números), un valor `bono` (número) y un valor `penalizacion` (número).
* **Proceso**: Validación de existencia de votos, sumatoria de todos los elementos del arreglo mediante reducción, aplicación de ajustes (bono y penalización) y clasificación cualitativa según rangos predefinidos.
* **Salida**: Un objeto que muestra el `puntaje_final`, la `clasificacion` obtenida y una `explicacion` del cálculo realizado.

## Reglas identificadas

1. **Validación de Datos**: Si no existen votos o el arreglo está vacío, se retorna un error.
2. **Cálculo de Ajuste**: La fórmula final es $SumaDeVotos + Bono - Penalizacion$.
3. **Rangos de Clasificación**:
* Puntuación $\ge 80$: "Obra Maestra".
* Puntuación entre $50$ y $79$: "Competitivo".
* Puntuación $< 50$: "De culto".



## Pruebas

### Caso normal

* **Entrada**: `[20, 25, 30], 8, 3`
* **Resultado esperado**: `{ puntaje_final: 80, clasificacion: "Obra Maestra", explicacion: "Se sumaron 3 votos, se aplicó bono de 8 y penalización de 3." }`

### Caso borde

* **Entrada**: `[5, 10], 2, 10`
* **Resultado esperado**: `{ puntaje_final: 7, clasificacion: "De culto", explicacion: "Se sumaron 2 votos, se aplicó bono de 2 y penalización de 10." }`

## Explicacion final

La solución es altamente efectiva gracias al método `.reduce()`, el cual garantiza un cálculo preciso de la sumatoria de votos con una complejidad de tiempo $O(n)$. Al separar la lógica de cálculo (aritmética) de la lógica de presentación (clasificación), el código se mantiene limpio y fácil de mantener. La estructura condicional asegura una categorización excluyente y predecible para cualquier entrada numérica, cumpliendo con los estándares de evaluación de crítica definidos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso [20, 25, 30], 8, 3)**:
* Suma: $20 + 25 + 30 = 75$.
* Ajuste: $75 + 8 - 3 = 80$.
* Clasificación: $80 \ge 80 \rightarrow$ "Obra Maestra".