// Ejercicio 055 - Reglas de negocio: dibujo digital

const PRIORIDAD_ESTADO = {
  bloqueada: 1,
  pendiente: 2,
  aprobada: 3,
};

const ACCIONES_POR_ESTADO = {
  bloqueada: {
    accion: 'revisar bloqueada',
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  },
  pendiente: {
    accion: 'revisar pendiente',
    motivo: 'no hay bloqueos, pero hay capas sin aprobar que requieren atencion.',
  },
  aprobada: {
    accion: 'continuar diseno',
    motivo: 'todas las capas estan aprobadas, se puede avanzar sin riesgo.',
  },
};

function decidirAccion(capas) {
  if (!Array.isArray(capas) || capas.length === 0) {
    return {
      accion: 'sin capas',
      motivo: 'no hay capas para evaluar, no es posible tomar una decision.',
      capasAfectadas: [],
    };
  }

  const estadosValidos = Object.keys(PRIORIDAD_ESTADO);
  const capasFiltradas = capas.filter((estado) => estadosValidos.includes(estado));

  if (capasFiltradas.length === 0) {
    return {
      accion: 'estado desconocido',
      motivo: 'ninguna capa tiene un estado valido (bloqueada, pendiente o aprobada).',
      capasAfectadas: [],
    };
  }

  const estadoPrioritario = capasFiltradas.reduce((estadoActual, estado) =>
    PRIORIDAD_ESTADO[estado] < PRIORIDAD_ESTADO[estadoActual] ? estado : estadoActual
  );

  const capasAfectadas = capasFiltradas.filter((estado) => estado === estadoPrioritario);

  return {
    ...ACCIONES_POR_ESTADO[estadoPrioritario],
    capasAfectadas,
  };
}

// Pruebas manuales

console.log(decidirAccion(['aprobada', 'pendiente', 'bloqueada']));
// { accion: 'revisar bloqueada', motivo: '...', capasAfectadas: ['bloqueada'] }

console.log(decidirAccion(['aprobada', 'pendiente', 'pendiente']));
// { accion: 'revisar pendiente', motivo: '...', capasAfectadas: ['pendiente', 'pendiente'] }

console.log(decidirAccion(['aprobada', 'aprobada']));
// { accion: 'continuar diseno', motivo: '...', capasAfectadas: ['aprobada', 'aprobada'] }

console.log(decidirAccion([]));
// { accion: 'sin capas', motivo: '...', capasAfectadas: [] }

module.exports = { decidirAccion };