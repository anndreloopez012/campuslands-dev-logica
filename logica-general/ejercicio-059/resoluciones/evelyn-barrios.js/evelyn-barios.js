/**
 * Ejercicio 059 - Lógica General
 * Autor: Evelyn Barios
 * Fecha: 2024-07-20
 * 
 * Descripción:
 * Este script simula la gestión de un inventario lógico para la producción
 * de compuestos químicos a partir de un stock de elementos.
 */

/**
 * Parsea una fórmula química (ej. 'H2O') y devuelve un objeto con el conteo de átomos.
 * @param {string} formula - La fórmula química a parsear.
 * @returns {object} Un objeto que mapea cada elemento a su cantidad.
 */
function parsearFormula(formula) {
  const atomos = {};
  const regex = /([A-Z][a-z]?)(\d*)/g;
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const elemento = match[1];
    const cantidad = match[2] ? parseInt(match[2], 10) : 1;
    atomos[elemento] = (atomos[elemento] || 0) + cantidad;
  }
  return atomos;
}

/**
 * Verifica si se pueden producir los compuestos solicitados con el inventario disponible.
 * @param {object} inventario - Objeto con el stock de elementos (ej. { H: 100, O: 50 }).
 * @param {object[]} solicitudes - Arreglo de compuestos a producir (ej. [{ nombre: 'Agua', formula: 'H2O', cantidad: 10 }]).
 * @returns {object} Un reporte con los resultados de la producción.
 */
function gestionarInventarioQuimico(inventario, solicitudes) {
  const inventarioActual = { ...inventario };
  const producidos = [];
  const noProducidos = [];

  for (const solicitud of solicitudes) {
    const requerimientos = parsearFormula(solicitud.formula);
    let posibleProducir = true;
    
    // Verificar si hay suficientes elementos para la cantidad solicitada
    for (const elemento in requerimientos) {
      const totalNecesario = requerimientos[elemento] * solicitud.cantidad;
      if (!inventarioActual[elemento] || inventarioActual[elemento] < totalNecesario) {
        posibleProducir = false;
        break;
      }
    }

    if (posibleProducir) {
      // Si es posible, descontar del inventario
      for (const elemento in requerimientos) {
        inventarioActual[elemento] -= requerimientos[elemento] * solicitud.cantidad;
      }
      producidos.push(`${solicitud.cantidad} de ${solicitud.nombre} (${solicitud.formula})`);
    } else {
      noProducidos.push(`${solicitud.cantidad} de ${solicitud.nombre} (${solicitud.formula}) por falta de elementos.`);
    }
  }

  return {
    produccionExitosa: producidos,
    produccionFallida: noProducidos,
    inventarioRestante: inventarioActual
  };
}

// --- Pruebas ---

// Caso 1: Prueba normal donde todo se puede producir
const inventarioInicial = { H: 100, O: 50, C: 30 };
const solicitudesNormales = [
  { nombre: 'Agua', formula: 'H2O', cantidad: 20 },
  { nombre: 'Dióxido de Carbono', formula: 'CO2', cantidad: 10 }
];
console.log("--- Caso Normal: Producción exitosa ---");
console.log(gestionarInventarioQuimico(inventarioInicial, solicitudesNormales));

// Caso 2: Caso borde donde un compuesto no se puede producir por falta de stock
const solicitudesConFalla = [
  { nombre: 'Metano', formula: 'CH4', cantidad: 10 }, // Necesita 40 H, pero solo quedan 60. Falla.
  { nombre: 'Agua', formula: 'H2O', cantidad: 30 } // Necesita 60 H y 30 O. Pasa.
];
console.log("\n--- Caso Borde: Stock insuficiente ---");
console.log(gestionarInventarioQuimico(inventarioInicial, solicitudesConFalla));
