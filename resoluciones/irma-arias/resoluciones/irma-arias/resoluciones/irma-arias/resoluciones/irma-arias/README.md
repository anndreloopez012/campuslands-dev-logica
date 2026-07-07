
# Ejercicio 016: Matrices simples - Animación 3D

## Pensamiento del problema
He modelado el espacio 3D como una matriz de dos dimensiones. Utilicé **ciclos anidados** (uno para filas y otro para columnas) para recorrer cada celda y acumular los objetos encontrados, priorizando la detección de errores en el renderizado antes de procesar el volumen de datos.

## Reglas aplicadas
1. **Validación de integridad:** Si una celda contiene "error", se detiene el proceso.
2. **Validación de contenido:** Si la suma de objetos es 0, el espacio se considera vacío.
3. **Cálculo de densidad:** Se suma el valor de las celdas para determinar la carga de trabajo.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con:
node nombre-apellido.js

## Casos de prueba
- **Normal:** Matriz con valores 0 y 1.
- **Vacío:** Matriz compuesta solo por 0.
- **Caso Borde:** Matriz conteniendo un string "error" para validar el manejo de fallos.