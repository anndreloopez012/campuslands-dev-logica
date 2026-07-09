
# Ejercicio 010 - Redondeo y Precision

## Analisis del Problema
El objetivo es transformar una lista de puntajes en una clasificacion cualitativa, aplicando reglas de redondeo para garantizar la precision del resultado final.

## Reglas Aplicadas
1. **Promedio:** Sumatoria de todos los elementos dividida por la cantidad total.
2. **Ajuste:** Se suma el bono y se resta la penalizacion al promedio obtenido.
3. **Redondeo:** Se utiliza la funcion de redondeo estandar para convertir el resultado a entero.
4. **Clasificacion:**
   - >= 25: "competitivo"
   - 15 a 24: "promedio"
   - < 15: "principiante"

## Ejecucion
El archivo irma-arias.js contiene la logica implementada. Se puede ejecutar en cualquier entorno compatible con JavaScript/Python.

## Pruebas
1. **Caso Normal:** Entrada [12, 18, 25, 30], bono 8, penalizacion 3. Resultado: 27 (Competitivo).
2. **Caso Borde:** Entrada [10, 10], bono 2, penalizacion 5. Resultado: 7 (Principiante).