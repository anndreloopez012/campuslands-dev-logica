
# Ejercicio 074: Tatuajes - Diagnóstico de errores

## ¿Cómo pensé el problema?
Aplicando los criterios del nivel intermedio aplicado, dividí el problema del diagnóstico clínico posterior a un tatuaje en funciones pequeñas. Cada función maneja una tarea específica: validar los datos, evaluar la presencia de síntomas críticos (infecciones) y revisar parámetros de hidratación o cicatrización.

## Reglas aplicadas
1. **Validación de entradas:** Comprobar que el reporte del cliente no se encuentre vacío antes de iniciar el análisis.
2. **Detección de riesgos graves:** Clasificar como urgencia médica si se reportan síntomas como fiebre, pus o dolor extremo.
3. **Control de mantenimiento:** Evaluar el nivel de hidratación en los primeros días para prevenir resequedad excesiva.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-074/resoluciones/irma-arias/irma-arias.js