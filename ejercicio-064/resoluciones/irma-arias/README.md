
# Ejercicio 064: Inventario de Motos - Filtros por condiciones

## ¿Cómo pensé el problema?
Analicé que un inventario requiere procesar una lista de objetos (motos) y aplicar filtros condicionales estrictos (como marca y cilindraje máximo) para retornar únicamente los elementos que cumplan con los criterios establecidos por el usuario.

## Reglas aplicadas
1. Validar que la lista de entrada no esté vacía para evitar fallos de ejecución.
2. Evaluar de forma independiente cada condición de filtrado (coincidencia de marca ignorando mayúsculas/minúsculas y límite máximo de cilindraje).
3. Estructurar la salida devolviendo tanto la acción realizada como el conteo y detalle de las motos filtradas.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener Node.js instalado en tu equipo.
2. Ejecuta el siguiente comando en la terminal:
   ```bash
   node ejercicio-064/resoluciones/irma-arias/irma-arias.js