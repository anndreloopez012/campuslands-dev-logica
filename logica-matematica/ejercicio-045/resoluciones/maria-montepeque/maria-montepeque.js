// Ejercicio 045 - Logica matematica: minimos y limites

const COSTO_MINIMO_ACEPTABLE = 50;
const LIMITE_HORAS_DIARIAS = 8;

function evaluarTallerMecanico(ordenes, costoMinimo = COSTO_MINIMO_ACEPTABLE, limiteHoras = LIMITE_HORAS_DIARIAS) {
  if (!Array.isArray(ordenes) || ordenes.length === 0) {
    return {
      ordenesAceptadas: [],
      ordenesRechazadas: [],
      horasTotales: 0,
      dentroDelLimite: true,
      costoMinimoOrden: null,
    };
  }

  const ordenesAceptadas = [];
  const ordenesRechazadas = [];

  for (const orden of ordenes) {
    if (orden.costo >= costoMinimo) {
      ordenesAceptadas.push(orden);
    } else {
      ordenesRechazadas.push(orden);
    }
  }

  const horasTotales = ordenesAceptadas.reduce((total, orden) => total + orden.tiempoHoras, 0);
  const dentroDelLimite = horasTotales <= limiteHoras;
  const costoMinimoOrden = ordenesAceptadas.length > 0
    ? Math.min(...ordenesAceptadas.map((orden) => orden.costo))
    : null;

  return {
    ordenesAceptadas,
    ordenesRechazadas,
    horasTotales,
    dentroDelLimite,
    costoMinimoOrden,
  };
}

const casoNormal = [
  { vehiculo: "Toyota Corolla", costo: 120, tiempoHoras: 2 },
  { vehiculo: "Honda Civic", costo: 30, tiempoHoras: 1 },
  { vehiculo: "Nissan Sentra", costo: 200, tiempoHoras: 4 },
  { vehiculo: "Mazda 3", costo: 80, tiempoHoras: 3 },
];

console.log(evaluarTallerMecanico(casoNormal));
// Esperado: ordenesAceptadas -> Corolla, Sentra, Mazda 3 | ordenesRechazadas -> Civic
// horasTotales: 9, dentroDelLimite: false, costoMinimoOrden: 80

const casoBorde = [];

console.log(evaluarTallerMecanico(casoBorde));
// Esperado: ordenesAceptadas: [], ordenesRechazadas: [], horasTotales: 0, dentroDelLimite: true, costoMinimoOrden: null

module.exports = { evaluarTallerMecanico };