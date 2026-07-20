# Analisis del reto: Inventario Lógico de Fórmulas Químicas

## Analisis

- **Entrada:** Un arreglo de objetos `quimicos` (nombre y cantidad en stock) y un objeto `pedido` (nombre y cantidad requerida).
- **Proceso:** Verificar si el stock actual es suficiente para cubrir el pedido solicitado.
- **Salida:** Un objeto con el `estado` de la operación (aprobado o pendiente) y el `faltante` en caso de no haber suficiente stock.

## Reglas identificadas

1. **Disponibilidad Total:** Si stock >= requerido, el estado es "aprobado".
2. **Disponibilidad Parcial:** Si stock < requerido, el estado es "pendiente" y se calcula la cantidad faltante.
3. **Inexistencia:** Si el químico no se encuentra en el inventario, se marca como "pendiente" por falta de stock.

## Pruebas

### Caso normal

**Entrada:**
```javascript
inventario: [{nombre: "H2O", stock: 50}, {nombre: "CO2", stock: 20}],
pedido: {nombre: "H2O", cantidad: 30}