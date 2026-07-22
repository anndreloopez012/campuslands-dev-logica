// Ejercicio 050 - Logica general 050 - lectura de instrucciones
// Autor: Stefani Sánchez

/**
 * Lee y procesa las instrucciones de un itinerario de viaje y turismo.
 * @param {Array<Object>} instrucciones - Lista de pasos del itinerario con acción, costo y tipo.
 * @param {number} presupuesto - Presupuesto disponible para el viaje.
 * @returns {Object} Resumen de la reserva, total gastado y viabilidad del itinerario.
 */
const procesarInstruccionesViaje = (instrucciones, presupuesto = 1000) => {
  if (!Array.isArray(instrucciones) || instrucciones.length === 0) {
    return {
      exito: false,
      totalGasto: 0,
      mensaje: "No se proporcionaron instrucciones de viaje validas."
    };
  }

  let totalGasto = 0;
  const actividadesProcesadas = [];
  let requierePasaporte = false;

  for (const inst of instrucciones) {
    if (!inst || typeof inst.costo !== "number" || inst.costo < 0) {
      continue;
    }

    totalGasto += inst.costo;
    actividadesProcesadas.push(inst.accion || "Actividad sin nombre");

    if (inst.internacional) {
      requierePasaporte = true;
    }
  }

  const dentroDelPresupuesto = totalGasto <= presupuesto;

  return {
    exito: dentroDelPresupuesto,
    totalGasto,
    presupuesto,
    requierePasaporte,
    actividades: actividadesProcesadas,
    mensaje: dentroDelPresupuesto
      ? "Itinerario aprobado y dentro del presupuesto."
      : "El costo del itinerario excede el presupuesto disponible."
  };
};

// Casos de prueba
console.log("Caso Normal:");
console.log(procesarInstruccionesViaje([
  { accion: "Vuelo internacional a Cancun", costo: 450, internacional: true },
  { accion: "Reserva de Hotel 4 noches", costo: 350, internacional: false },
  { accion: "Tour a ruinas mayas", costo: 100, internacional: false }
], 1000));

console.log("\nCaso Borde:");
console.log(procesarInstruccionesViaje([], 500));
