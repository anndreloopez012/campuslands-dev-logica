// Ejercicio 062 - Control de calidad en linea de produccion

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  'en-revision': 3,
  aprobado: 4,
};

const ACCIONES = {
  bloqueado: 'detener produccion',
  pendiente: 'revisar pendiente',
  'en-revision': 'esperar revision',
  aprobado: 'continuar produccion',
  desconocido: 'verificar estado desconocido',
};

const MOTIVOS = {
  bloqueado: 'hay elementos bloqueados que impiden continuar la produccion',
  pendiente: 'hay elementos pendientes que requieren revision antes de continuar',
  'en-revision': 'hay elementos en revision que aun no han sido dictaminados',
  aprobado: 'todos los elementos del lote estan aprobados',
  desconocido: 'se encontro un estado no reconocido en el lote',
};

function revisarLoteProduccion(estados) {
  if (!Array.isArray(estados) || estados.length === 0) {
    return { accion: 'sin_accion', motivo: 'no hay elementos en el lote' };
  }

  const estadoPrioritario = estados.reduce((masUrgente, estadoActual) => {
    const prioridadActual = PRIORIDADES[estadoActual] ?? 0;
    const prioridadMasUrgente = PRIORIDADES[masUrgente] ?? 0;
    return prioridadActual < prioridadMasUrgente ? estadoActual : masUrgente;
  });

  const clave = PRIORIDADES[estadoPrioritario] ? estadoPrioritario : 'desconocido';

  return {
    accion: ACCIONES[clave],
    motivo: MOTIVOS[clave],
  };
}

const casoNormal = revisarLoteProduccion(['aprobado', 'pendiente', 'bloqueado']);
console.log(casoNormal);

const casoVacio = revisarLoteProduccion([]);
console.log(casoVacio);

const casoSinBloqueados = revisarLoteProduccion(['aprobado', 'en-revision', 'pendiente']);
console.log(casoSinBloqueados);

const casoTodoAprobado = revisarLoteProduccion(['aprobado', 'aprobado']);
console.log(casoTodoAprobado);

const casoDesconocido = revisarLoteProduccion(['aprobado', 'defectuoso']);
console.log(casoDesconocido);

module.exports = { revisarLoteProduccion };