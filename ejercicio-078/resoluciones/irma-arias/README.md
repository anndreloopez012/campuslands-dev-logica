
# Ejercicio 078: Soldadura - Sistemas de turnos

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, estructuré la solución dividiéndola en funciones pequeñas y modulares. Una función valida la integridad de la lista de trabajadores, otra filtra a los soldadores según la especialidad técnica requerida (como TIG o MIG) y la última aplica un criterio de equidad ordenando el turno basándose en las horas acumuladas.

## Reglas aplicadas
1. **Validación inicial:** Asegurar que el registro de personal no se encuentre vacío antes de procesar el turno.
2. **Filtrado por especialidad:** Aislar exclusivamente a los soldadores certificados para el tipo de proceso industrial solicitado.
3. **Criterio de equidad:** Asignar el turno de manera prioritaria al colaborador que registre la menor cantidad de horas acumuladas para mantener un balance justo.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-078/resoluciones/irma-arias/irma-arias.js