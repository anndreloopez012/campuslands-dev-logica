# Ejercicio 063: Promedios y Medianas en Torneo de Esports

## ¿Cómo pensé el problema?
1. Analicé los datos de entrada: puntajes de participantes, bono y penalización.
2. Ordené los puntajes de forma ascendente para hallar la mediana estadística.
3. Apliqué el bono sumándolo y la penalización restándola a la mediana obtenida.
4. Clasifiqué el resultado final en categorías (*elite*, *competitivo*, *novato*).

## Reglas Aplicadas
* Validación de arreglos vacíos.
* Cálculo de medianas matemáticas.
* Operaciones aritméticas controladas.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: `ejercicio-063/resoluciones/yaneh-arias/`
2. Ejecuta: `node yaneh-arias.js`

## Casos Probados
* **Caso Normal:** Puntajes `[12, 18, 25, 30]`, bono 8, penalización 3.
* **Caso Borde:** Puntajes `[20]`, bono 5, penalización 2.
