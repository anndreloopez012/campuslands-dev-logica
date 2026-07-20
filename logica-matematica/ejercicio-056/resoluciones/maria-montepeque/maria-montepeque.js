// Ejercicio 056 - Presupuestos y descuentos

const NIVELES = [
  { limite: 30, clasificacion: 'elite' },
  { limite: 20, clasificacion: 'competitivo' },
  { limite: 0, clasificacion: 'principiante' },
];

function obtenerClasificacion(puntaje) {
  for (const nivel of NIVELES) {
    if (puntaje >= nivel.limite) return nivel.clasificacion;
  }
  return 'sin clasificar';
}

function evaluarParticipantes(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no se recibieron participantes para evaluar.',
    };
  }

  const promedio = participantes.reduce((acc, valor) => acc + valor, 0) / participantes.length;
  const promedioRedondeado = Math.ceil(promedio);
  const puntajeFinal = promedioRedondeado + bono - penalizacion;
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se calculo el promedio de los participantes, se redondeo hacia arriba, se sumo el bono y se resto la penalizacion segun las reglas.',
  };
}

module.exports = { evaluarParticipantes };

const casoNormal = evaluarParticipantes([12, 18, 25, 30], 8, 3);
console.log('Caso normal:', casoNormal);

const casoBorde = evaluarParticipantes([], 8, 3);
console.log('Caso borde:', casoBorde);