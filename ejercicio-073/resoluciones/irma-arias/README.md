
# Ejercicio 073: Paracaidismo - Resolución de casos

## Didáctica y enfoque
Siguiendo las pautas del nivel intermedio aplicado, este problema se estructuró dividiendo la lógica en funciones pequeñas y especializadas. Cada función evalúa de manera independiente una condición crítica (datos de entrada, clima, visibilidad y estado del equipo) para tomar una decisión segura.

## Reglas aplicadas
1. **Validación inicial:** Asegurar que el objeto con los datos del caso no esté vacío.
2. **Evaluación meteorológica:** Rechazar el salto si la velocidad del viento supera los 25 km/h o si la visibilidad es menor a 5 km.
3. **Control de equipo:** Verificar obligatoriamente que el paracaídas haya pasado por la inspección profesional correspondiente.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-073/resoluciones/irma-arias/irma-arias.js