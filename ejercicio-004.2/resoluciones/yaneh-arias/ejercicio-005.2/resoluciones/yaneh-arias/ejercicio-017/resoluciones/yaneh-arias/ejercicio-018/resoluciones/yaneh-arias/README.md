
# Ejercicio 018 - Normalización de Puntajes (Soldadura)

## Análisis del Problema
Los puntajes de calidad en soldadura pueden variar mucho. Para evaluar a los soldadores de forma justa, primero "normalizamos" sus puntajes a una escala estándar (0-100) antes de aplicar bonos y penalizaciones por criterios de seguridad.

## Reglas Aplicadas
1. **Normalización Min-Max:** Ajusta todos los valores para que el menor sea 0 y el mayor sea 100.
2. **Ciclo Acumulador:** Se recorre la lista para sumar los valores ya normalizados.
3. **Ajuste:** Se aplica el bono y la penalización sobre el promedio obtenido.
4. **Clasificación:** - >= 80: experto
   - 50-79: calificado
   - < 50: aprendiz

## Pruebas Realizadas
1. **Caso Normal:** `[10, 20, 30, 40]`, bono 5, penalización 2.
2. **Caso Borde:** Todos los valores iguales (ej. `[50, 50]`). La fórmula maneja el divisor para evitar división por cero.