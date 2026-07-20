// Ejercicio 043 - Promedios y medianas

const NIVELES = [
  { minimo: 80, clasificacion: 'elite' },
  { minimo: 60, clasificacion: 'competitivo' },
  { minimo: 40, clasificacion: 'amateur' },
  { minimo: 0, clasificacion: 'principiante' },
];

function calcularPromedio(puntuaciones) {
  const suma = puntuaciones.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / puntuaciones.length;
}

function calcularMediana(puntuaciones) {
  const ordenadas = [...puntuaciones].sort((a, b) => a - b);
  const mitad = Math.floor(ordenadas.length / 2);

  return ordenadas.length % 2 === 0
    ? (ordenadas[mitad - 1] + ordenadas[mitad]) / 2
    : ordenadas[mitad];
}

function determinarClasificacion(promedio) {
  return NIVELES.find((nivel) => promedio >= nivel.minimo).clasificacion;
}

function determinarConsistencia(promedio, mediana) {
  const diferencia = Math.abs(promedio - mediana);
  return diferencia <= 5 ? 'equipo parejo' : 'equipo irregular';
}

function analizarTorneo(puntuaciones) {
  if (!Array.isArray(puntuaciones) || puntuaciones.length === 0) {
    return {
      promedio: null,
      mediana: null,
      clasificacion: 'sin datos',
      consistencia: 'sin datos',
      explicacion: 'no se recibieron puntuaciones para analizar.',
    };
  }

  const promedio = calcularPromedio(puntuaciones);
  const mediana = calcularMediana(puntuaciones);
  const clasificacion = determinarClasificacion(promedio);
  const consistencia = determinarConsistencia(promedio, mediana);

  return {
    promedio,
    mediana,
    clasificacion,
    consistencia,
    explicacion: `promedio ${promedio}, mediana ${mediana}: equipo clasificado como ${clasificacion} y ${consistencia}.`,
  };
}

console.log('Caso normal:', analizarTorneo([45, 60, 78, 90, 33]));
console.log('Caso borde (vacio):', analizarTorneo([]));
console.log('Caso par:', analizarTorneo([20, 40, 60, 80]));

module.exports = { analizarTorneo };