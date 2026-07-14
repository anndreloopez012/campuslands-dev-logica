
# Resolución Ejercicio 040 - Estrategias de Selección (Comida Urbana)

## Pensamiento del problema
Para resolver este ejercicio, definí el problema como un filtro de dos pasos: primero reducimos el menú a lo que el cliente realmente puede comer (restricciones y presupuesto) y luego aplicamos una estrategia de selección (la opción de menor costo).

## Reglas aplicadas
1. **Filtro de Seguridad:** Elimina cualquier opción que supere el presupuesto o contenga ingredientes prohibidos (si el cliente es vegetariano).
2. **Estrategia de Selección:** Selecciona el ítem con el precio más bajo (`.sort()`) para maximizar el ahorro del cliente.

## Cómo ejecutar
1. Asegúrate de tener instalado Node.js.
2. Ejecuta: `node irma-arias.js`.

## Casos de prueba
- **Caso Normal:** Búsqueda con restricción vegetariana y presupuesto ajustado.
- **Caso Borde:** Cliente con presupuesto insuficiente para cualquier platillo del menú.