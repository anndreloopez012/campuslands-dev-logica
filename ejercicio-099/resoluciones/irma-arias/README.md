# Ejercicio 099: Fórmulas químicas - Inventarios lógicos

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, diseñé una solución modular dividida en tres etapas: una función para validar la existencia y estructura del arreglo de reactivos, una función analítica para evaluar individualmente el stock actual frente al mínimo requerido e identificar riesgos de seguridad, y finalmente una función coordinadora que resume las alertas críticas de todo el inventario de fórmulas químicas.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el inventario de entrada contenga elementos válidos para procesar.
2. **Control lógico de umbrales:** Clasificar el estado del stock en óptimo, moderado o crítico según los gramos disponibles en el laboratorio.
3. **Auditoría de seguridad:** Etiquetar el nivel de peligrosidad de los compuestos químicos para garantizar un manejo adecuado.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-099/resoluciones/irma-arias/irma-arias.js