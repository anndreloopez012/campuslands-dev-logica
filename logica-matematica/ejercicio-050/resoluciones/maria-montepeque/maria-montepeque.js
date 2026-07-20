// Ejercicio 050 - Redondeo y precision

function evaluarViaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin_datos",
      explicacion: "no hay participantes para evaluar.",
    };
  }

  const suma = participantes.reduce((acumulado, puntaje) => acumulado + puntaje, 0);
  const promedioGeneral = Math.round(suma / participantes.length);

  const destacados = participantes.filter((puntaje) => puntaje > promedioGeneral);

  const puntajeFinal = destacados.length > 0
    ? Math.floor(destacados.reduce((acumulado, puntaje) => acumulado + puntaje, 0) / destacados.length)
    : promedioGeneral;

  const umbral = promedioGeneral + bono - penalizacion;

  let clasificacion;
  if (puntajeFinal >= umbral) {
    clasificacion = "competitivo";
  } else if (puntajeFinal >= umbral - 5) {
    clasificacion = "regular";
  } else {
    clasificacion = "bajo";
  }

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se redondeo el promedio general y se aplico piso al promedio de destacados segun las reglas.",
  };
}

console.log("Caso normal:", evaluarViaje([12, 18, 25, 30], 8, 3));
console.log("Caso borde - lista vacia:", evaluarViaje([], 8, 3));
console.log("Caso borde - todos empatados:", evaluarViaje([15, 15, 15], 5, 2));
console.log("Caso borde - sin destacados:", evaluarViaje([10, 10], 4, 1));

module.exports = { evaluarViaje };