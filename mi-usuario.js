/*
 * Ejercicio 31: Gestión de Inventario
 *
 * Descripción:
 * Escribe una función `actualizarInventario` que reciba dos argumentos:
 * 1. Un array de objetos `inventario`, donde cada objeto representa un producto
 *    con `id`, `nombre` y `cantidad`.
 * 2. Un array de objetos `ventas`, donde cada objeto representa una venta
 *    con `id` de producto y `cantidad` vendida.
 *
 * La función debe devolver un nuevo array de inventario con las cantidades
 * actualizadas después de procesar todas las ventas.
 *
 * Ejemplos:
 * const inventario = [
 *   { id: 1, nombre: 'Camisa', cantidad: 15 },
 *   { id: 2, nombre: 'Pantalón', cantidad: 10 }
 * ];
 * const ventas = [
 *   { id: 1, cantidad: 5 },
 *   { id: 2, cantidad: 2 }
 * ];
 * actualizarInventario(inventario, ventas) debe devolver:
 * [
 *   { id: 1, nombre: 'Camisa', cantidad: 10 },
 *   { id: 2, nombre: 'Pantalón', cantidad: 8 }
 * ]
 */

function actualizarInventario(inventario, ventas) {
  // 1. Clonar el inventario para no mutar el original.
  const inventarioActualizado = JSON.parse(JSON.stringify(inventario));

  // 2. Iterar sobre cada venta.
  for (const venta of ventas) {
    // 3. Buscar el producto en el inventario actualizado.
    const producto = inventarioActualizado.find(p => p.id === venta.id);

    // 4. Si el producto existe, actualizar la cantidad.
    if (producto) {
      producto.cantidad -= venta.cantidad;
      // Opcional: Asegurarse de que el stock no sea negativo.
      if (producto.cantidad < 0) {
        producto.cantidad = 0;
      }
    }
  }
  return inventarioActualizado;
}

// No olvides exportar la función si la vas a usar en otros archivos.
// module.exports = actualizarInventario;
