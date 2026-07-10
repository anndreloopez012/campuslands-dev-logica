
# Ejercicio 023 - Promedios y Medianas (Torneo de Esports)

## Análisis del Problema
En los deportes electrónicos, un jugador puede tener un desempeño excepcional en una sola partida (outlier) que infla su promedio artificialmente. La mediana nos permite obtener un indicador de rendimiento más estable y justo.

## Reglas Aplicadas
1. **Ordenamiento:** Se utiliza el método `.sort()` para organizar los puntajes de menor a mayor.
2. **Cálculo de Mediana:**
   - Si la cantidad de datos es impar, se toma el central.
   - Si es par, se promedian los dos centrales.
3. **Cálculo de Promedio:** Sumatoria acumulada dividida entre el número de elementos.
4. **Regla de Clasificación:** Se utiliza la mediana como valor base para aplicar `bono` y `penalizacion`.

## Ejecución
`node nombre-apellido.js`

## Pruebas
1. **Caso Normal:** Lista `[12, 18, 25, 30, 100]`. Aquí el promedio (37) es engañoso, mientras que la mediana (25) refleja mejor el nivel real.
2. **Caso Borde:** Lista con valores idénticos `[10, 10, 10]` para verificar estabilidad del cálculo.