# Pensamiento y Resolución del Problema de Conversión en Autos Hiperdeportivos

El problema se abordó desde la perspectiva de la estandarización técnica de métricas en ingeniería automotriz de alto rendimiento. En el sector de los autos hiperdeportivos, las especificaciones de rendimiento suelen entregarse en unidades regionales mixtas (como millas por hora para velocidad y caballos de fuerza británicos). El objetivo consiste en unificar y organizar estos datos al sistema internacional (kilómetros por hora) antes de proceder con cualquier clasificación de rendimiento técnico.

El diseño de la solución se estructuró bajo las siguientes reglas y controles métricos:
1. **Conversión Homogénea de Velocidad**: Se toma la velocidad máxima expresada en millas por hora (MPH) y se multiplica por el factor de conversión exacto (1.60934) para obtener su equivalente en kilómetros por hora (KM/H).
2. **Clasificación por Umbral Estandarizado**: Una vez convertida la velocidad, se evalúa si el automóvil pertenece a la categoría exclusiva "Megacar" (velocidad mayor o igual a 400 KM/H); de lo contrario, se mantiene en la categoría "Hiperdeportivo Estándar".
3. **Casos Especiales**: Si el registro cuenta con datos nulos o valores de velocidad negativos, la lógica intercepta la inconsistencia asignando valores de salida en cero para mitigar roturas en la tubería de datos.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript por su óptima capacidad de reestructuración de esquemas de datos estructurados sobre arreglos. El encadenamiento funcional y la transformación de llaves en objetos literales mediante métodos nativos proveen un entorno ideal para la normalización de telemetría automotriz en tiempo real sin requerir paquetería externa.

## Contenido del Código

El script establece un conjunto de modelos de autos con métricas de velocidad anglosajonas. La función aplica aritmética de conversión directa y evalúa condicionales lógicos estrictos sobre los resultados normalizados para definir la jerarquía técnica de cada vehículo.