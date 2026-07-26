# Ejercicio 057: Arquitectura 3D - Estadísticas de ranking

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en estadísticas de ranking dentro del contexto de proyectos de arquitectura 3D, organicé la solución por medio de validaciones robustas y procesamiento de arreglos. Primero validé que la entrada fuera un arreglo con objetos estructurados correctamente (nombre y puntaje válido). Luego, ordené los proyectos de mayor a menor puntaje mediante funciones nativas, calculé estadísticas globales (promedio, máximo y mínimo) y clasifiqué cada diseño arquitectónico en niveles de desempeño profesional.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que la lista no esté vacía y que todos los elementos contengan un puntaje numérico válido y no negativo.
2. **Ordenamiento de ranking:** Disponer los proyectos de forma descendente basándose en la puntuación obtenida en el modelado 3D.
3. **Cálculo estadístico y clasificación:** Obtener el promedio general, identificar el puntaje más alto y más bajo, y asignar categorías cualitativas a cada participante.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-057/resoluciones/irma-arias/irma-arias.js