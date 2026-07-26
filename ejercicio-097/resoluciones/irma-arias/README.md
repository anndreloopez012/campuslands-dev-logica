# Ejercicio 097: Arquitectura 3D - Tablas de decisión

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, dividí el problema en funciones modulares. Una primera función asegura la integridad y existencia de los datos del proyecto arquitectónico, mientras que la segunda implementa una tabla de decisión lógica para evaluar las variables críticas de construcción (tipo de suelo, zona sísmica y uso de materiales de refuerzo) dictaminando la viabilidad del diseño 3D.

## Reglas aplicadas
1. **Validación estructural de datos:** Comprobar que el objeto recibido contenga un nombre de proyecto válido y no esté vacío.
2. **Evaluación de riesgos por tabla de decisión:** Cruzar las condiciones del terreno frente a la sismicidad para identificar automáticamente fallas de diseño o requerimientos especiales.
3. **Emisión de directrices técnicas:** Proveer un dictamen claro (aprobado, aprobado con restricciones o rechazado) acompañado de su respectiva acción correctiva.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-097/resoluciones/irma-arias/irma-arias.js