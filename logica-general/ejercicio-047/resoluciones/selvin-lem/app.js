const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function construirResumen(items) {
  const resumen = {
    conteos: { bloqueado: 0, pendiente: 0, aprobado: 0 },
    invalidos: [],
    duplicados: [],
  };

  const vistos = new Set();

  items.forEach((item, i) => {
    if (ESTADOS_VALIDOS.includes(item)) {
      resumen.conteos[item]++;
    } else {
      resumen.invalidos.push({ posicion: i, valor: item });
    }

    if (vistos.has(item)) {
      resumen.duplicados.push({ posicion: i, valor: item });
    }
    vistos.add(item);
  });

  return resumen;
}

// fase 2: reglas que consultan el resumen ya organizado, sin recorrer items de nuevo
function reglaEstadosInvalidos(resumen) {
  return resumen.invalidos.map((e) => `item en posicion ${e.posicion} ("${e.valor}") no es un estado valido.`);
}

function reglaDuplicados(resumen) {
  return resumen.duplicados.map((d) => `item "${d.valor}" esta duplicado (posicion ${d.posicion}).`);
}

function reglaPrioridadSinRiesgo(resumen, prioridad) {
  const hayRiesgo = resumen.conteos.bloqueado > 0 || resumen.conteos.pendiente > 0;
  return prioridad === "alta" && !hayRiesgo ? ["prioridad alta declarada pero no hay items en riesgo segun el resumen."] : [];
}

function reglaReglaContradictoria(resumen, regla) {
  if (typeof regla !== "string" || regla.trim() === "") return [];
  const reglaMinuscula = regla.toLowerCase();
  const estadoMencionado = ESTADOS_VALIDOS.find((estado) => reglaMinuscula.includes(estado));
  if (estadoMencionado && resumen.conteos[estadoMencionado] === 0) {
    return [`la regla menciona "${estadoMencionado}" pero el resumen indica 0 items con ese estado.`];
  }
  return [];
}

function detectarInconsistenciasOrganizado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { resumen: null, inconsistencias: ["items vacio o invalido."], motivo: "no hay datos para evaluar consistencia." };
  }

  const resumen = construirResumen(items);

  const inconsistencias = [
    ...reglaEstadosInvalidos(resumen),
    ...reglaDuplicados(resumen),
    ...reglaPrioridadSinRiesgo(resumen, prioridad),
    ...reglaReglaContradictoria(resumen, regla),
  ];

  return {
    resumen,
    inconsistencias,
    motivo: inconsistencias.length === 0
      ? "el resumen organizado no muestra inconsistencias."
      : `el resumen organizado revela ${inconsistencias.length} inconsistencia(s).`,
  };
}

// pruebas
console.log(detectarInconsistenciasOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log(detectarInconsistenciasOrganizado([], "alta", "revisar bloqueados primero"));

console.log(detectarInconsistenciasOrganizado(["aprobado", "aprobado"], "alta", "revisar bloqueados primero"));
