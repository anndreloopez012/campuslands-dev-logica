// Ejercicio 053 - Coordenadas y distancia (paracaidismo)

const RANGOS_CLASIFICACION = [
  { minimo: 25, nombre: 'competitivo' },
  { minimo: 15, nombre: 'aceptable' },
  { minimo: 0, nombre: 'principiante' },
];

function calcularPromedio(participantes) {
  const suma = participantes.reduce((acumulado, puntaje) => acumulado + puntaje, 0);
  return suma / participantes.length;
}

function obtenerClasificacion(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find(({ minimo }) => puntajeFinal >= minimo);
  return rango.nombre;
}

function calcularResultado({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin-datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio) + bono - penalizacion;
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: 'se promedio a los participantes, se sumo el bono y se resto la penalizacion.',
  };
}

module.exports = { calcularResultado };

if (require.main === module) {
  const casoNormal = calcularResultado({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  });
  console.log('Caso normal:', casoNormal);

  const casoBorde = calcularResultado({
    participantes: [],
    bono: 8,
    penalizacion: 3,
  });
  console.log('Caso borde (lista vacia):', casoBorde);

  const casoBajoRendimiento = calcularResultado({
    participantes: [5, 6, 4],
    bono: 1,
    penalizacion: 5,
  });
  console.log('Caso adicional (bajo rendimiento):', casoBajoRendimiento);
}