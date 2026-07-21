/**
 * Definición de Errores Personalizados para la gestión del Food Truck.
 */
class InventarioError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InventarioError';
  }
}

class PagoError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PagoError';
  }
}

const inventario = { tacos: 10, refrescos: 20 };

/**
 * Procesa una venta, validando stock y método de pago.
 * Puede lanzar errores personalizados.
 * @param {string} producto El producto a vender.
 * @param {number} cantidad La cantidad a vender.
 * @param {string} metodoPago El método de pago ('efectivo' o 'tarjeta').
 */
function procesarVenta(producto, cantidad, metodoPago) {
  // 1. Validar stock
  if (!inventario[producto] || inventario[producto] < cantidad) {
    throw new InventarioError(`Stock insuficiente para ${cantidad} de ${producto}.`);
  }

  // 2. Validar método de pago
  if (metodoPago !== 'efectivo' && metodoPago !== 'tarjeta') {
    throw new PagoError(`Método de pago "${metodoPago}" no es válido.`);
  }

  // Si todo es correcto, se procesa la venta
  inventario[producto] -= cantidad;
  console.log(`Venta exitosa: ${cantidad} de ${producto}. Stock restante: ${inventario[producto]}.`);
}

/**
 * Intenta realizar una compra y maneja los posibles errores de forma específica.
 * @param {object} compra El objeto de la compra a intentar.
 */
function realizarCompra(compra) {
  try {
    console.log(`\nIntentando comprar ${compra.cantidad} de ${compra.producto}...`);
    procesarVenta(compra.producto, compra.cantidad, compra.metodoPago);
  } catch (error) {
    // 3. Manejar cada tipo de error de forma diferente
    if (error instanceof InventarioError) {
      console.error(`[Error de Inventario]: ${error.message} Por favor, avise al personal.`);
    } else if (error instanceof PagoError) {
      console.error(`[Error de Pago]: ${error.message} Aceptamos 'efectivo' o 'tarjeta'.`);
    } else {
      console.error(`[Error Desconocido]: ${error.message}`);
    }
  }
}

// --- Casos de prueba ---
realizarCompra({ producto: 'tacos', cantidad: 5, metodoPago: 'tarjeta' });      // Venta exitosa
realizarCompra({ producto: 'tacos', cantidad: 10, metodoPago: 'efectivo' });     // Falla por stock
realizarCompra({ producto: 'refrescos', cantidad: 5, metodoPago: 'bitcoin' }); // Falla por método de pago