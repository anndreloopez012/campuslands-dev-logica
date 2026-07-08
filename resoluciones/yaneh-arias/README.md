
# Ejercicio 008: Patrones de puntuación en ciencia ficción

## Pensamiento del problema
El objetivo es analizar el rendimiento de un catálogo de películas comparando sus puntajes contra un umbral de calidad. El patrón resultante (Positivo o Crítico) permite tomar decisiones de curaduría de contenido.

## Reglas aplicadas
1. **Filtrado:** Se utiliza `.filter()` para aislar los puntajes que cumplen con el umbral.
2. **Cálculo:** Se determina la proporción de películas exitosas respecto al total.
3. **Clasificación:** Si el éxito es mayor al 50%, la tendencia se marca como 'Positiva'.

## Cómo ejecutar
Ejecuta en tu terminal: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `[8.5, 9.0, 6.5, 7.0, 9.5]` con umbral `8.0` -> 3 de 5 (60% Éxito).
- **Caso Borde:** `[5.0]` con umbral `8.0` -> 0 de 1 (0% Éxito).