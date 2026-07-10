
# Resolución de Reto - Ranking y Clasificación

## 1. Pensamiento del Problema
Para resolver este reto, apliqué una estructura de **mapeo de datos**. Primero, transformé los puntajes brutos aplicando las reglas de bono/penalización, y luego realicé un **ordenamiento descendente** para generar el ranking final.

## 2. Reglas Aplicadas
1. **Normalización:** Cada puntaje se ajusta individualmente: `base + bono - penalización`.
2. **Clasificación:** Se asigna una categoría cualitativa según el resultado final.
3. **Manejo de Empates:** Al usar `sort` sobre objetos, si dos puntajes son iguales, el sistema preserva el orden de llegada (estabilidad del algoritmo).

## 3. Validación
- **Caso Normal:** Entrada `[12, 18, 25, 30]`, bono 8, penalización 3.
  - Resultados esperados calculados manualmente: 17, 23, 30, 35. Clasificaciones correctas.
- **Caso Propio:** Entrada `[10, 10, 5]`, bono 5, penalización 2.
  - Esto valida que, ante un empate (10, 10), el sistema los ordena correctamente sin errores de lógica.

## 4. Ejecución
Para revisar, corre el archivo con:
`node nombre-apellido.js`