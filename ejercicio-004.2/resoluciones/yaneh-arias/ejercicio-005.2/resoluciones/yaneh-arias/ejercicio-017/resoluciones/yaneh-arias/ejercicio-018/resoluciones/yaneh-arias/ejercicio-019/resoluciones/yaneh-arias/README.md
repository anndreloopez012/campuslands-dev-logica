
# Ejercicio 019 - Validaciones Numéricas (Fórmulas Químicas)

## Análisis del Problema
El reto consiste en asegurar que los datos de entrada (masas atómicas) sean físicamente posibles antes de procesar una fórmula química. Se implementan validaciones para descartar valores negativos o que excedan límites de seguridad establecidos.

## Reglas Aplicadas
1. **Validación Positiva:** Toda masa debe ser mayor a 0.
2. **Validación de Límite:** Ninguna masa individual debe superar el `limiteSuperior` definido.
3. **Acumulación Selectiva:** Solo se suman los valores que superan todas las validaciones previas.
4. **Reporte de Errores:** Si se detecta un dato inválido, el sistema retorna una lista específica de fallos en lugar de un cálculo erróneo.

## Ejecución
`node nombre-apellido.js`

## Pruebas
1. **Caso Normal:** `[12.01, 1.008, 15.99]`, Límite 100 -> Válido (Masa total calculada).
2. **Caso Borde:** `[-5, 150, 20]`, Límite 100 -> Inválido (Reporta errores de masa negativa y exceso de límite).