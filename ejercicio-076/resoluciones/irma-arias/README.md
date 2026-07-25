
# Ejercicio 076: Animación 3D - Matrices simples

## ¿Cómo pensé el problema?
Aplicando la metodología del nivel intermedio aplicado, dividí el problema en funciones pequeñas. Una función se encarga de validar la estructura bidimensional (matriz) y otra recorre las filas y columnas mediante ciclos anidados para auditar los valores, identificando posibles errores de renderizado.

## Reglas aplicadas
1. **Validación de matriz:** Asegurar que la entrada sea un arreglo bidimensional con datos y no esté vacío.
2. **Auditoría de celdas:** Recorrer cada posición de la cuadrícula mediante un sistema de coordenadas de filas y columnas.
3. **Detección de anomalías:** Considerar como error de renderizado cualquier celda cuyo valor sea menor o igual a cero.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-076/resoluciones/irma-arias/irma-arias.js