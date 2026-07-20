// Logica matematica 037 - estadisticas de ranking

const CLASIFICACIONES = [
  { minimo: 35, nombre: 'elite' },
  { minimo: 20, nombre: 'competitivo' },
  { minimo: 10, nombre: 'regular' },
  { minimo: -Infinity, nombre: 'principiante' },
];

function calcularEstadisticasRanking({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'No hay participantes para calcular el ranking.',
    };
  }

  const suma = participantes.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedio = suma / participantes.length;
  const puntajeBase = Math.ceil(promedio);
  const puntajeFinal = puntajeBase + bono - penalizacion;

  const clasificacion = CLASIFICACIONES.find((nivel) => puntajeFinal >= nivel.minimo).nombre;

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `se calculo el promedio (${promedio}), se redondeo hacia arriba (${puntajeBase}), se sumo el bono y se resto la penalizacion segun las reglas.`,
  };
}

module.exports = { calcularEstadisticasRanking };

if (require.main === module) {
  const casoNormal = calcularEstadisticasRanking({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  });
  console.log('Caso normal:', casoNormal);

  const casoBorde = calcularEstadisticasRanking({
    participantes: [],
    bono: 5,
    penalizacion: 2,
  });
  console.log('Caso borde:', casoBorde);
}