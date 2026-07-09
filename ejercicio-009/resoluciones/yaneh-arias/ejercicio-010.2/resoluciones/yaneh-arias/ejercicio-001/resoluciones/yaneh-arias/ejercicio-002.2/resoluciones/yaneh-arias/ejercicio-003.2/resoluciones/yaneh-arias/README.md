
# Ejercicio 003 - Torneo de Esports (Promedios y Medianas)

## Analisis del Problema
El reto consiste en evaluar el rendimiento de jugadores de Esports basándose en la mediana de sus puntajes, lo que permite obtener una medida central más robusta que el promedio ante valores extremos (outliers).

## Reglas Aplicadas
1. **Ordenamiento:** Es obligatorio ordenar la lista de menor a mayor antes de identificar la mediana.
2. **Cálculo de Mediana:** - Si la cantidad de elementos es par, la mediana es el promedio de los dos números centrales.
   - Si es impar, es el número central.
3. **Ajuste:** `resultado = mediana + bono - penalizacion`.
4. **Clasificación:** Basada en rangos (>= 25: competitivo, >= 15: promedio, < 15: principiante).

## Ejecucion
Ejecutar el archivo `nombre-apellido.js` mediante la terminal.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 25, 30]`, bono 8, penalización 3.
   - Mediana: (18+25)/2 = 21.5. 
   - Final: 21.5 + 8 - 3 = 26.5 (Redondeado o tratado según criterio: competitivo).
2. **Caso Borde (Lista impar):** `[10, 20, 30]`, bono 5, penalización 2.
   - Mediana: 20. 
   - Final: 20 + 5 - 2 = 23 (Promedio).