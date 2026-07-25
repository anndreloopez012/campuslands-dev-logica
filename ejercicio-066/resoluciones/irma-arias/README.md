
# Ejercicio 066: Autos Hiperdeportivos - Búsqueda de elementos

## ¿Cómo pensé el problema?
Analicé que la búsqueda de elementos dentro de una colección de objetos complejos (como especificaciones técnicas de autos hiperdeportivos) requiere evaluar condiciones específicas de texto y valores numéricos para retornar el primer elemento coincidente o un mensaje claro en caso de no hallarlo.

## Reglas aplicadas
1. Validar que el catálogo de entrada no esté vacío para prevenir errores de ejecución.
2. Filtrar los elementos evaluando de manera simultánea las propiedades de nombre y velocidad máxima requerida.
3. Estructurar la salida devolviendo el estado de la búsqueda junto con el detalle del objeto encontrado o una advertencia de ausencia.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal con el comando:
   ```bash
   node ejercicio-066/resoluciones/irma-arias/irma-arias.js