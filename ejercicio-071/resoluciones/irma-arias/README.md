# Ejercicio 071: Kickboxing - Organización de listas

## ¿Cómo pensé el problema?
Siguiendo las recomendaciones para ejercicios de nivel intermedio aplicado, dividí el problema en funciones pequeñas y modulares. Cada función tiene una responsabilidad única: validar los datos, filtrar por categoría de peso y ordenar los resultados según el rendimiento (victorias).

## Reglas aplicadas
1. **Validación modular:** Comprobar que la lista de entrada contenga elementos y sea un arreglo válido antes de procesarla.
2. **Filtrado específico:** Aislar únicamente a los atletas que pertenezcan a la categoría de peso solicitada.
3. **Ordenamiento jerárquico:** Organizar de forma descendente a los competidores basándose en su cantidad de victorias acumuladas.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-071/resoluciones/irma-arias/irma-arias.js