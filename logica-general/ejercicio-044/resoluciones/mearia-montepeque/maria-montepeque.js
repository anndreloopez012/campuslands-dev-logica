// Ejercicio 044 - Logica general: filtros por condiciones (inventario de motos)

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MENSAJES = {
  bloqueado: {
    accion: 'revisar bloqueado',
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  },
  pendiente: {
    accion: 'revisar pendiente',
    motivo: 'no hay bloqueos, se atiende lo pendiente antes de cerrar el ciclo.',
  },
  aprobado: {
    accion: 'sin acciones',
    motivo: 'todas las motos estan aprobadas, no se requiere revision.',
  },
};

function analizarInventarioMotos(estados) {
  if (!Array.isArray(estados) || estados.length === 0) {
    return {
      estado: null,
      accion: 'sin acciones',
      motivo: 'el inventario esta vacio, no hay motos que revisar.',
    };
  }

  const estadoPrioritario = estados.reduce((prioritario, actual) => {
    const prioridadActual = PRIORIDADES[actual];
    if (prioridadActual === undefined) return prioritario;
    if (!prioritario || prioridadActual < PRIORIDADES[prioritario]) return actual;
    return prioritario;
  }, null);

  if (!estadoPrioritario) {
    return {
      estado: null,
      accion: 'sin acciones',
      motivo: 'ningun estado reconocido en el inventario.',
    };
  }

  return { estado: estadoPrioritario, ...MENSAJES[estadoPrioritario] };
}

const casoNormal = analizarInventarioMotos(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso normal:', casoNormal);

const casoBorde = analizarInventarioMotos([]);
console.log('Caso borde (vacio):', casoBorde);

const casoSinPendientes = analizarInventarioMotos(['aprobado', 'aprobado']);
console.log('Caso extra (todo aprobado):', casoSinPendientes);

const casoDesconocido = analizarInventarioMotos(['en-transito', 'desconocido']);
console.log('Caso extra (estados no reconocidos):', casoDesconocido);

module.exports = { analizarInventarioMotos };