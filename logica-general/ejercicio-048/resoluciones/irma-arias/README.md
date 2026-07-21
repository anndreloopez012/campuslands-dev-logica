
# Ejercicio 048 - Flujos paso a paso (Películas de Ciencia Ficción)

## 1. ¿Cómo pensé el problema?
Desglose el problema en etapas secuenciales: primero validar que el arreglo contenga datos limpios, luego separar las películas entre vistas y pendientes mediante un ciclo, aplicar un ordenamiento por año a las pendientes y finalmente retornar una recomendación clara.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la entrada sea un arreglo no vacío.
* **Clasificación condicional:** Separar los elementos según su propiedad booleana `visto`.
* **Criterio de orden:** Priorizar las películas pendientes ordenándolas cronológicamente por su año de estreno.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js