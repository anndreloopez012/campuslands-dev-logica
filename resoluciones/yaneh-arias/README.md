
# Ejercicio 005: Taller Mecánico (Mínimos y Límites)

## Pensamiento del problema
El objetivo es controlar el inventario crítico. He definido una función que compara el valor mínimo de piezas disponibles contra un límite de seguridad preestablecido, permitiendo automatizar la decisión de compra.

## Reglas aplicadas
1. **Identificación:** Se extrae el valor mínimo del array de piezas usando `Math.min`.
2. **Validación:** Se compara el mínimo contra el `limiteMinimo`.
3. **Acción:** Si el stock mínimo es estrictamente menor al límite, se activa la alerta de pedido.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `([20, 5, 40, 15], 10)` -> Mínimo: 5, requierePedido: true.
- **Caso Borde:** `([10, 20, 30], 10)` -> Mínimo: 10, requierePedido: false.