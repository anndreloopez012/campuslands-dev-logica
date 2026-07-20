# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `scores` (números que representan puntajes).
* **Proceso**: Cálculo del promedio aritmético, obtención de la mediana mediante ordenamiento previo, y comparación entre ambas medidas para determinar la tendencia central del rendimiento.
* **Salida**: Un objeto que contiene el `promedio`, la `mediana`, la `clasificacion` asignada y una `explicacion`.

## Reglas identificadas

1. **Validación de Datos**: Si el arreglo de puntajes está vacío, se retorna un error de "Sin datos".
2. **Cálculo de Mediana**: Si la cantidad de elementos es impar, se toma el valor central; si es par, se calcula el promedio de los dos valores centrales.
3. **Clasificación según Tendencia**:
* `Promedio > Mediana`: "Jugador Consistente".
* `Promedio < Mediana`: "Jugador Irregular".
* `Promedio == Mediana`: "Jugador Equilibrado".



## Pruebas

### Caso normal

* **Entrada**: `[10, 20, 30, 40, 50]`
* **Resultado esperado**: `{ promedio: 30, mediana: 30, clasificacion: "Jugador Equilibrado", explicacion: "Análisis basado en tendencia central." }`

### Caso borde

* **Entrada**: `[10, 10, 10, 100]`
* **Resultado esperado**: `{ promedio: 32.5, mediana: 10, clasificacion: "Jugador Consistente", explicacion: "Análisis basado en tendencia central." }`

## Explicacion final

La solución es efectiva porque utiliza dos perspectivas estadísticas distintas para describir un conjunto de datos. El promedio es sensible a valores extremos (outliers), mientras que la mediana es robusta. Al compararlas, el algoritmo identifica automáticamente si el rendimiento del jugador está sesgado o es estable. El uso de `[...scores]` garantiza que el ordenamiento no afecte la integridad del arreglo original, cumpliendo con buenas prácticas de programación funcional.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso [10, 10, 10, 100])**:
* Promedio: $(10+10+10+100) / 4 = 130 / 4 = 32.5$.
* Mediana (n=4): Se toman los índices centrales (1 y 2). Valores: $10$ y $10$. Mediana: $(10+10) / 2 = 10$.
* Clasificación: $32.5 > 10 \rightarrow$ "Jugador Consistente".