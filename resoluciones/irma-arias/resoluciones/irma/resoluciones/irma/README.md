
# Resolución: Ejercicio 002 - Validación de datos (Fútbol Sala)

## Pensamiento lógico
Para este ejercicio, traté los datos como una entidad que debe ser verificada antes de entrar en cualquier lógica de cálculo. El enfoque fue "filtrar primero", asegurando que cualquier dato erróneo sea rechazado inmediatamente.

## Reglas aplicadas
1. **Integridad de datos:** Validación de números negativos (evitar datos físicamente imposibles).
2. **Consistencia lógica:** Verificación de que el rendimiento (partidos ganados) no exceda el total de actividad (partidos jugados).

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Estadísticas coherentes (ej. 3 ganados de 5 jugados). Resultado: apto.
2. **Caso Borde (Negativos):** Se introdujeron valores negativos. Resultado: inválido (mensaje de error).
3. **Caso Borde (Lógica):** Se introdujeron más partidos ganados que jugados. Resultado: inválido.