// Ejercicio 042 - Porcentajes y proporciones (ranking de futsal)

const UMBRALES_CLASIFICACION = [
  { minimo: 75, etiqueta: 'campeon' },
  { minimo: 50, etiqueta: 'clasificado' },
  { minimo: 25, etiqueta: 'en riesgo' },
  { minimo: 0, etiqueta: 'eliminado' },
];

function calcularEfectividad(puntos, partidosJugados) {
  if (partidosJugados === 0) return 0;
  const puntosMaximos = partidosJugados * 3;
  return Number(((puntos / puntosMaximos) * 100).toFixed(2));
}

function obtenerClasificacion(partidosJugados, porcentajeEfectividad) {
  if (partidosJugados === 0) return 'sin partidos';
  return UMBRALES_CLASIFICACION.find(
    (umbral) => porcentajeEfectividad >= umbral.minimo
  ).etiqueta;
}

function calcularRankingFutsal(equipos) {
  if (!Array.isArray(equipos) || equipos.length === 0) return [];

  const equiposProcesados = equipos.map((equipo) => {
    const { nombre, ganados = 0, empatados = 0, perdidos = 0 } = equipo;
    const partidosJugados = ganados + empatados + perdidos;
    const puntos = ganados * 3 + empatados;
    const porcentajeEfectividad = calcularEfectividad(puntos, partidosJugados);
    const clasificacion = obtenerClasificacion(partidosJugados, porcentajeEfectividad);

    return {
      nombre,
      partidosJugados,
      puntos,
      porcentajeEfectividad,
      clasificacion,
    };
  });

  return equiposProcesados
    .sort((a, b) => b.puntos - a.puntos || b.porcentajeEfectividad - a.porcentajeEfectividad)
    .map((equipo, indice) => ({ posicion: indice + 1, ...equipo }));
}

module.exports = { calcularRankingFutsal };

// --- Pruebas manuales ---

// Caso normal
const equiposNormal = [
  { nombre: 'Halcones FS', ganados: 6, empatados: 1, perdidos: 1 },
  { nombre: 'Tigres FS', ganados: 4, empatados: 2, perdidos: 2 },
  { nombre: 'Panteras FS', ganados: 2, empatados: 1, perdidos: 5 },
];
console.log('Caso normal:');
console.log(calcularRankingFutsal(equiposNormal));

// Caso borde: equipo sin partidos jugados
const equiposBorde = [
  { nombre: 'Lobos FS', ganados: 0, empatados: 0, perdidos: 0 },
  { nombre: 'Aguilas FS', ganados: 1, empatados: 0, perdidos: 0 },
];
console.log('Caso borde (sin partidos):');
console.log(calcularRankingFutsal(equiposBorde));

// Caso borde: lista vacia
console.log('Caso borde (lista vacia):');
console.log(calcularRankingFutsal([]));