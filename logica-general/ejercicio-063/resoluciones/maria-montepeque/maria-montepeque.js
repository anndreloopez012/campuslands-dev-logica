// Ejercicio 063 - toma de decisiones en torneo de esports

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const PRIORIDAD_DESCONOCIDA = 99;

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay elementos bloqueados, se atiende lo pendiente.',
  aprobado: 'todos los elementos estan aprobados, no se requiere accion urgente.',
};

function seleccionarEstrategia(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin acciones',
      motivo: 'no hay items para evaluar.',
    };
  }

  const estadoPrioritario = items.reduce((actual, estado) => {
    const prioridadActual = PRIORIDADES[actual] ?? PRIORIDAD_DESCONOCIDA;
    const prioridadEstado = PRIORIDADES[estado] ?? PRIORIDAD_DESCONOCIDA;
    return prioridadEstado < prioridadActual ? estado : actual;
  });

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario] ?? 'estado no reconocido, se revisa por precaucion.',
  };
}

const casoNormal = seleccionarEstrategia(['aprobado', 'pendiente', 'bloqueado']);
console.log(casoNormal);

const casoBorde = seleccionarEstrategia([]);
console.log(casoBorde);

const sinBloqueados = seleccionarEstrategia(['aprobado', 'pendiente']);
console.log(sinBloqueados);

const soloAprobados = seleccionarEstrategia(['aprobado', 'aprobado']);
console.log(soloAprobados);

const estadoNoReconocido = seleccionarEstrategia(['aprobado', 'descalificado']);
console.log(estadoNoReconocido);

module.exports = { seleccionarEstrategia };