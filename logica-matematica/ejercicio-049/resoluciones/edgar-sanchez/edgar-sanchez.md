    # Pensamiento y Resolución del Problema de Módulos y Divisibilidad en Películas de Miedo

El problema se abordó desde la perspectiva de la programación de bloques horarios y ciclos de transmisión nocturna automatizada para maratones de películas de terror. El objetivo consiste en tomar la duración de los filmes en minutos y agruparlos lógicamente determinando su divisibilidad exacta respecto a bloques estándar de tiempo (por ejemplo, intervalos de 30 minutos) para optimizar la inserción de pautas comerciales sin interrumpir escenas críticas de suspenso.

El diseño de la solución se estructuró bajo las siguientes reglas y controles métricos:
1. **Verificación de Ajuste Exacto (Divisibilidad)**: Se evalúa mediante la operación de residuo o módulo (`%`) si la duración total de la película es divisible de forma exacta entre el bloque de tiempo de referencia de 30 minutos.
2. **Clasificación por Estructura**: 
   - Si el residuo es 0: Se cataloga con ajuste de bloque "Perfecto" (no requiere relleno adicional).
   - Si el residuo es diferente de 0: Se calcula el remanente de minutos necesarios para completar el siguiente bloque entero y se cataloga con ajuste "Fraccionado".
3. **Casos Especiales**: Si la duración es nula o menor o igual a cero, se intercepta la anomalía marcando el estado como "Inválido" y el remanente en cero.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript por su velocidad en el procesamiento y transformación inmediata de colecciones estructuradas de datos en servicios de streaming. El uso de la expresión aritmética modular (`%`) integrada en transformaciones lineales mapeadas asegura que la lógica sea concisa, directa y de fácil lectura.

## Contenido del Código

El script define un arreglo de títulos cinematográficos de terror adjuntando sus respectivas duraciones en minutos. La función itera a través de los objetos, efectúa la división modular y computa dinámicamente el tiempo restante necesario para el acoplamiento perfecto del bloque.