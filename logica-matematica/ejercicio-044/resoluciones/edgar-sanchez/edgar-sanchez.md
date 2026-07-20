# Pensamiento y Resolución del Problema de Inventario de Motocicletas

El problema se abordó desde la perspectiva de la gestión analítica de inventarios en un concesionario de motocicletas, donde se requiere categorizar los vehículos en rangos comerciales de cilindrada (Baja, Media, Alta) y determinar de forma paralela cuál es el modelo con el precio máximo registrado para auditorías de capitalización.

El diseño de la solución se estructuró bajo las siguientes reglas y controles lógicos:
1. **Clasificación por Rangos de Cilindrada**: Se evalúa la cilindrada (CC) de cada motocicleta para determinar su categoría comercial:
   - Menor a 250 CC: Cilindrada Baja.
   - Entre 250 CC y 600 CC (inclusive): Cilindrada Media.
   - Mayor a 600 CC: Cilindrada Alta.
2. **Búsqueda del Valor Máximo**: Se compara el precio de los vehículos para identificar el modelo más costoso del lote.
3. **Casos Especiales**: Si el inventario se encuentra completamente vacío, el sistema intercepta la condición retornando un reporte con valores nulos y listas vacías, previniendo fallos por colecciones sin elementos.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript por su rendimiento optimizado al iterar sobre colecciones de objetos complejos. Al emplear métodos nativos de reducción (`.reduce()`) y mapeo (`.map()`), se consolida la clasificación de los rangos y la búsqueda del valor máximo en un único flujo de procesamiento limpio, omitiendo el uso de variables globales y librerías externas.

## Contenido del Código

El script define una lista de motocicletas con sus especificaciones técnicas y comerciales. La función principal procesa este arreglo aplicando condicionales estructurados para asignar la categoría y una comparación lineal para extraer el valor máximo, entregando un objeto final legible y estructurado.