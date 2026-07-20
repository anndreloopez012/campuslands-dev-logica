// Ejercicio 050 - Logica general: lectura de instrucciones (viajes y turismo)

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
  cancelado: 4,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay reservas bloqueadas, se revisan las pendientes de confirmacion.',
  aprobado: 'no hay reservas bloqueadas ni pendientes, se revisan las aprobadas para seguimiento.',
  cancelado: 'todas las reservas activas ya fueron revisadas, solo quedan canceladas.',
};

function revisarReservas(reservas) {
  if (!Array.isArray(reservas) || reservas.length === 0) {
    return {
      accion: 'sin reservas para revisar',
      motivo: 'la lista de reservas esta vacia.',
    };
  }

  const invalidas = reservas.filter((estado) => !(estado in PRIORIDAD));
  if (invalidas.length > 0) {
    return {
      accion: 'estado invalido',
      motivo: `se encontraron estados no reconocidos: ${invalidas.join(', ')}.`,
    };
  }

  const estadoPrioritario = reservas.reduce((actual, estado) =>
    PRIORIDAD[estado] < PRIORIDAD[actual] ? estado : actual
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

// Pruebas manuales

// Caso normal (ejemplo del README del ejercicio)
console.log(revisarReservas(['aprobado', 'pendiente', 'bloqueado']));
// Esperado: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(revisarReservas([]));
// Esperado: { accion: 'sin reservas para revisar', motivo: 'la lista de reservas esta vacia.' }

// Caso adicional: sin bloqueados, hay pendientes
console.log(revisarReservas(['aprobado', 'pendiente', 'cancelado']));
// Esperado: { accion: 'revisar pendiente', motivo: 'no hay reservas bloqueadas, se revisan las pendientes de confirmacion.' }

// Caso adicional: solo aprobados y cancelados
console.log(revisarReservas(['aprobado', 'cancelado']));
// Esperado: { accion: 'revisar aprobado', motivo: 'no hay reservas bloqueadas ni pendientes, se revisan las aprobadas para seguimiento.' }

// Caso adicional: estado no reconocido
console.log(revisarReservas(['aprobado', 'perdido']));
// Esperado: { accion: 'estado invalido', motivo: 'se encontraron estados no reconocidos: perdido.' }

module.exports = { revisarReservas };