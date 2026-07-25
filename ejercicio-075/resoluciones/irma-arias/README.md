# Ejercicio 075: Dibujo Digital - Reglas de negocio

## ¿Cómo pensé el problema?
Siguiendo los lineamientos de diseño modular del nivel intermedio aplicado, dividí el problema en funciones independientes encargadas de validar la estructura del proyecto y de comprobar las reglas de negocio comerciales según el destino del dibujo (impresión o web).

## Reglas aplicadas
1. **Validación de integridad:** Asegurar que los datos de entrada del proyecto no se encuentren vacíos.
2. **Normativa de Impresión:** Exigir un mínimo de 300 DPI y perfil de color CMYK para garantizar calidad física.
3. **Normativa Web/Digital:** Controlar que la resolución no supere los 150 DPI y mantener el perfil RGB para optimizar el rendimiento en pantallas.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-075/resoluciones/irma-arias/irma-arias.js