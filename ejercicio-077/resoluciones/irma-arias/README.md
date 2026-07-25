
# Ejercicio 077: Arquitectura 3D - Tablas de decisión

## ¿Cómo pensé el problema?
Siguiendo los lineamientos de diseño modular del nivel intermedio aplicado, estructuré la solución separando la validación inicial de los datos y encapsulando una tabla de decisión lógica. Esta tabla cruza variables complejas del diseño arquitectónico 3D (tipo de estructura, nivel de sismicidad y peso proyectado) para determinar los requerimientos estructurales precisos.

## Reglas aplicadas
1. **Validación de integridad:** Comprobar que la información del modelo arquitectónico esté completa y no sea nula.
2. **Cruce de variables (Tabla de decisión):** Evaluar simultáneamente las condiciones de carga y ubicación geográfica para asignar de forma automatizada la cimentación y el refuerzo antisísmico adecuado.
3. **Respuesta normalizada:** Entregar un diagnóstico claro con los parámetros técnicos de construcción aprobados por el algoritmo.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-077/resoluciones/irma-arias/irma-arias.js