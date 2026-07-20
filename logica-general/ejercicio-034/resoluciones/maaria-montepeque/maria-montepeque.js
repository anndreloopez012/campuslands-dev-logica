'use strict';

//Ejercicio 034 - Diagnostico de errores 

const PRIORIDAD_ERRORES = {
  aguja_reutilizada: 1,
  sin_esterilizar: 1,
  tinta_vencida: 2,
  consentimiento_faltante: 2,
  ficha_incompleta: 3,
  sin_error: 4,
};

const MOTIVOS_POR_NIVEL = {
  1: 'Riesgo directo para la salud del cliente.',
  2: 'Riesgo legal o de calidad en el servicio.',
  3: 'Falta administrativa que debe completarse.',
  4: 'La estacion no presenta errores registrados.',
};

function obtenerErrorPrioritario(errores) {
  return errores.reduce((masCritico, actual) => {
    const nivelActual = PRIORIDAD_ERRORES[actual] ?? PRIORIDAD_ERRORES.ficha_incompleta;
    const nivelMasCritico = PRIORIDAD_ERRORES[masCritico] ?? PRIORIDAD_ERRORES.ficha_incompleta;
    return nivelActual < nivelMasCritico ? actual : masCritico;
  });
}

function diagnosticarEstacion(estacion) {
  const errores = Array.isArray(estacion.errores) && estacion.errores.length > 0
    ? estacion.errores
    : ['sin_error'];

  const errorPrioritario = obtenerErrorPrioritario(errores);
  const nivel = PRIORIDAD_ERRORES[errorPrioritario] ?? PRIORIDAD_ERRORES.ficha_incompleta;

  return {
    estacion: estacion.nombre ?? 'sin-nombre',
    errorPrioritario,
    nivel,
    accion: nivel === PRIORIDAD_ERRORES.sin_error ? 'continuar_operacion' : 'detener_y_corregir',
    motivo: MOTIVOS_POR_NIVEL[nivel],
  };
}

function diagnosticarErrores(estaciones) {
  if (!Array.isArray(estaciones) || estaciones.length === 0) {
    return {
      estado: 'sin_datos',
      mensaje: 'No hay estaciones para diagnosticar.',
      diagnostico: [],
    };
  }

  const diagnostico = estaciones.map(diagnosticarEstacion);

  const estacionPrioritaria = diagnostico.reduce((critica, actual) =>
    actual.nivel < critica.nivel ? actual : critica
  );

  return {
    estado: 'diagnostico_completo',
    totalEstaciones: diagnostico.length,
    diagnostico,
    estacionPrioritaria: estacionPrioritaria.estacion,
    nivelMasAlto: estacionPrioritaria.nivel,
  };
}

module.exports = diagnosticarErrores;

if (require.main === module) {
    
  const casoNormal = diagnosticarErrores([
    { nombre: 'estacion-1', errores: ['tinta_vencida', 'ficha_incompleta'] },
    { nombre: 'estacion-2', errores: ['sin_esterilizar'] },
    { nombre: 'estacion-3', errores: [] },
  ]);
  console.log('Caso normal:', JSON.stringify(casoNormal, null, 2));

  const casoVacio = diagnosticarErrores([]);
  console.log('Caso borde (sin estaciones):', JSON.stringify(casoVacio, null, 2));

  const casoErrorDesconocido = diagnosticarErrores([
    { nombre: 'estacion-4', errores: ['error_no_registrado'] },
  ]);
  console.log('Caso borde (error desconocido):', JSON.stringify(casoErrorDesconocido, null, 2));
}