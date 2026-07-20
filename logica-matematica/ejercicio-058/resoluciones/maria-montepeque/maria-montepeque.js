// Logica matematica 058 - normalizacion de puntajes

const obtenerClasificacion = (puntajeFinal, umbral) => {
  if (puntajeFinal > umbral) return 'competitivo';
  if (puntajeFinal === umbral) return 'regular';
  return 'bajo';
};

const normalizarPuntajes = (puntuaciones, bono, penalizacion) => {
  if (!Array.isArray(puntuaciones) || puntuaciones.length === 0) {
    return {
      promedio_general: 0,
      destacados: [],
      puntaje_final: 0,
      umbral: 0,
      clasificacion: 'sin datos',
    };
  }

  const suma = puntuaciones.reduce((acumulado, valor) => acumulado + valor, 0);
  const promedioGeneral = Math.round(suma / puntuaciones.length);

  const destacados = puntuaciones.filter((valor) => valor > promedioGeneral);

  const puntajeFinal = destacados.length > 0
    ? Math.floor(destacados.reduce((acumulado, valor) => acumulado + valor, 0) / destacados.length)
    : promedioGeneral;

  const umbral = promedioGeneral + bono - penalizacion;

  return {
    promedio_general: promedioGeneral,
    destacados,
    puntaje_final: puntajeFinal,
    umbral,
    clasificacion: obtenerClasificacion(puntajeFinal, umbral),
  };
};

module.exports = { normalizarPuntajes };

if (require.main === module) {
  const casoNormal = normalizarPuntajes([12, 18, 25, 30], 8, 3);
  console.log('Caso normal:', casoNormal);

  const casoBorde = normalizarPuntajes([], 5, 2);
  console.log('Caso borde (lista vacia):', casoBorde);

  const casoSinDestacados = normalizarPuntajes([15, 15, 15], 5, 2);
  console.log('Caso sin destacados:', casoSinDestacados);
}