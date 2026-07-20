
# Reto 044: Filtros por Condiciones - Inventario de Motos

## ¿Cómo pensé el problema?
Primero analicé que un inventario puede recibir múltiples criterios combinados (estado, cilindrada, precio, marca). En lugar de crear funciones separadas para cada filtro, diseñé una única función basada en el método `.filter()` de JavaScript que evalúa condicionales encadenados. Si una moto no cumple con alguno de los filtros solicitados, se descarta inmediatamente (`return false`).

## Reglas aplicadas
1. **Validación inicial:** Verificar que el arreglo de inventario no esté vacío.
2. **Evaluación estricta (AND lógico):** Solo se incluyen las motos que pasan todas las validaciones activas en el objeto de criterios.
3. **Manejo de casos vacíos:** Retornar un arreglo vacío controlado si ningún elemento coincide con la búsqueda.

## ¿Cómo ejecutar la solución?
Asegúrate de tener instalado [Node.js](https://nodejs.org/). Ejecuta el siguiente comando en tu terminal desde la ruta de tu archivo:

```bash
node irma-arias.js