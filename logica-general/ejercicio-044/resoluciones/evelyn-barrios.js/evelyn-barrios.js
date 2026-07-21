/**
 * Simula la preparación de un pedido de food truck de forma asíncrona.
 *
 * @param {object} pedido Un objeto que representa el pedido, con `producto` y `tiempo` de preparación en ms.
 * @returns {Promise<string>} Una promesa que se resuelve si el pedido es exitoso, o se rechaza si falla.
 */
function prepararPedido(pedido) {
  return new Promise((resolve, reject) => {
    // Validar que el producto es conocido
    const menu = ['tacos', 'hamburguesas', 'pizza'];
    if (!menu.includes(pedido.producto)) {
      return reject(`Error: El producto "${pedido.producto}" no está en el menú.`);
    }

    console.log(`Preparando pedido de: ${pedido.producto}...`);

    // Simular el tiempo de preparación
    setTimeout(() => {
      resolve(`¡Pedido de ${pedido.producto} está listo!`);
    }, pedido.tiempo);
  });
}

/**
 * Gestiona la recepción y el resultado de un pedido usando async/await.
 * @param {object} pedido El pedido a procesar.
 */
async function gestionarPedido(pedido) {
  try {
    console.log(`\nRecibido nuevo pedido: ${pedido.producto}.`);
    const resultado = await prepararPedido(pedido);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

// --- Casos de prueba ---

async function simularJornada() {
  console.log('--- Iniciando jornada del Food Truck ---');

  // Prueba 1: Un pedido exitoso
  await gestionarPedido({ producto: 'hamburguesas', tiempo: 3000 });

  // Prueba 2: Un pedido que falla
  await gestionarPedido({ producto: 'sushi', tiempo: 2000 });

  console.log('\n--- Fin de la jornada ---');
}

simularJornada();