// Ejercicio 052 - Logica matematica - Probabilidad basica (pingpong)

const RANGOS_CLASIFICACION = [
  { min: 25, nombre: "competitivo" },
  { min: 15, nombre: "regular" },
  { min: -Infinity, nombre: "principiante" },
];

function obtenerClasificacion(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.min).nombre;
}

function calcularPuntaje({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin datos",
      explicacion: "no hay participantes para calcular el puntaje.",
    };
  }

  const promedio =
    participantes.reduce((acumulado, valor) => acumulado + valor, 0) /
    participantes.length;
  const promedioRedondeado = Math.ceil(promedio);
  const puntajeFinal = promedioRedondeado + bono - penalizacion;
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `se promedio a los participantes (${promedio}), se redondeo hacia arriba a ${promedioRedondeado}, se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}).`,
  };
}

module.exports = { calcularPuntaje };

// Pruebas manuales

const casoNormal = calcularPuntaje({
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3,
});
console.log("Caso normal:", casoNormal);

const casoBorde = calcularPuntaje({
  participantes: [],
  bono: 5,
  penalizacion: 2,
});
console.log("Caso borde:", casoBorde);
