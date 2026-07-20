# Pensamiento y Resolución del Problema de Métricas en Torneos de eSports

El problema se abordó desde la perspectiva de la analítica estadística aplicada a torneos de deportes electrónicos, donde el rendimiento de un equipo no puede medirse únicamente por su promedio de puntuación, sino que requiere la mediana para mitigar el impacto de partidas atípicas (como victorias aplastantes o derrotas tempranas por fallos técnicos).

El diseño de la solución se estructuró bajo las siguientes reglas y controles estadísticos:
1. **Promedio Ponderado de Puntuación**: Calcula la media aritmética simple de las puntuaciones obtenidas por el equipo en todas las rondas del torneo.
2. **Cálculo Preciso de la Mediana**: Ordena los puntajes de forma ascendente. Si el número de rondas es impar, selecciona el valor central. Si es par, calcula el promedio de los dos valores centrales, evitando sesgos de dispersión.
3. **Casos Especiales**: Si un equipo no tiene partidas registradas, el sistema intercepta el caso de forma segura devolviendo valores en cero, evitando errores de división por cero.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript debido a su alta eficiencia en el manejo de arreglos mediante métodos nativos y la facilidad para ordenar colecciones numéricas. Al ser un lenguaje utilizado en plataformas web de eSports para mostrar estadísticas en tiempo real, permite procesar los puntajes de los equipos de manera inmediata sin depender de librerías externas de análisis de datos.

## Contenido del Código

El script define un conjunto de equipos con sus respectivos historiales de puntuaciones en el torneo. La función principal procesa a cada competidor realizando el ordenamiento de los datos para la mediana y la acumulación para el promedio, retornando un reporte estructurado y limpio listo para ser consumido por un panel de visualización.