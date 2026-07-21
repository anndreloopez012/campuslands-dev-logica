
# Ejercicio 047 - Detección de Inconsistencias (Lista de Reproducción Musical)

## 1. ¿Cómo pensé el problema?
Analicé que una lista de reproducción puede corromperse por errores humanos o de datos (canciones repetidas, campos vacíos o tiempos de duración absurdos como 0 o negativos). Diseñé un recorrido secuencial para evaluar cada elemento bajo reglas lógicas estrictas.

## 2. Reglas aplicadas
* **Duplicados:** Validar si un ID de canción ya había aparecido antes en el registro.
* **Campos vacíos:** Detectar si faltan títulos o artistas esenciales.
* **Valores numéricos:** Comprobar que la duración en minutos sea mayor estricto a cero.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo con Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js