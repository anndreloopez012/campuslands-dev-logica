# Pensamiento y Resolución del Problema de Patrones de Puntuación en Ciencia Ficción

El problema se abordó desde la perspectiva del análisis cualitativo y cuantitativo de valoraciones críticas en largometrajes de ciencia ficción. El objetivo consiste en identificar patrones de consistencia en las puntuaciones asignadas por la audiencia y la crítica especializada para clasificar la recepción de las obras cinematográficas mediante un indicador de coherencia (desviación o brecha extrema) antes de emitir un veredicto definitivo.

El diseño de la solución se estructuró bajo las siguientes reglas y controles métricos:
1. **Diferencial de Consistencia (Brecha)**: Se calcula la diferencia absoluta entre la puntuación otorgada por la crítica especializada y la puntuación de la audiencia general.
2. **Clasificación por Patrón de Recepción**: Con base en la brecha calculada, se determinan los siguientes patrones:
   - Brecha menor o igual a 15 puntos: Recepción "Consensuada".
   - Brecha mayor a 15 puntos: Recepción "Polarizada" (el film divide fuertemente los criterios entre expertos y fanáticos).
3. **Casos Especiales**: Si alguna de las métricas numéricas esenciales no se encuentra presente o es menor a cero, el algoritmo descarta el cálculo de la brecha y clasifica la película como "Datos Insuficientes", evitando distorsiones estadísticas.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript por su rendimiento optimizado y su flexibilidad nativa para la transformación y mapeo de colecciones complejas de datos estructurales en formatos clave-valor. La API de manipulación de arreglos nativa permite aplicar las reglas lógicas secuenciales en una única etapa, agilizando los tiempos de procesamiento en sistemas de recomendación en tiempo real.

## Contenido del Código

El script define un conjunto de películas con sus respectivos índices de evaluación numérica. La función principal itera a través de los objetos, procesa el diferencial aritmético utilizando funciones de valor absoluto matemático y le asigna una clasificación unificada y estructurada a cada pieza del catálogo.