"use strict";

//Ejercicio 031 - Logica matematica

function contarCombinaciones(n) {
  if (n < 2) return 0;
  return (n * (n - 1)) / 2;
}

const RANGOS_CLASIFICACION = [
  { minimo: 15, etiqueta: "competitivo" },
  { minimo: 8, etiqueta: "intermedio" },
  { minimo: 0, etiqueta: "principiante" },
];

function determinarClasificacion(puntajeFinal) {
  const rango = RANGOS_CLASIFICACION.find((r) => puntajeFinal >= r.minimo);
  return rango ? rango.etiqueta : "no_clasificado";
}

function evaluarTorneoKickboxing(participantes, bono = 0, penalizacion = 0) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin_datos",
      explicacion:
        "No hay participantes registrados, no es posible calcular combinaciones ni puntaje.",
    };
  }

  const participantesValidos = participantes.filter(
    (p) => typeof p === "number" && !Number.isNaN(p),
  );

  if (participantesValidos.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin_datos",
      explicacion: "Ningun participante tiene un puntaje numerico valido.",
    };
  }

  const bonoValido = typeof bono === "number" && !Number.isNaN(bono) ? bono : 0;
  const penalizacionValida =
    typeof penalizacion === "number" && !Number.isNaN(penalizacion)
      ? penalizacion
      : 0;

  const combinaciones = contarCombinaciones(participantesValidos.length);
  const puntajeFinal = combinaciones + bonoValido - penalizacionValida;
  const clasificacion = determinarClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `Se calcularon ${combinaciones} combinaciones posibles entre ${participantesValidos.length} participantes, se sumo el bono (${bonoValido}) y se resto la penalizacion (${penalizacionValida}).`,
  };
}

module.exports = {
  evaluarTorneoKickboxing,
  contarCombinaciones,
  determinarClasificacion,
};

if (require.main === module) {
  console.log(
    "--- Caso del README (referencia, no coincide, ver nota arriba) ---",
  );
  console.log(evaluarTorneoKickboxing([12, 18, 25, 30], 8, 3));

  console.log("\n--- Caso normal (5 participantes) ---");
  console.log(evaluarTorneoKickboxing([10, 20, 30, 40, 50], 5, 2));

  console.log("\n--- Caso borde: lista vacia ---");
  console.log(evaluarTorneoKickboxing([], 5, 2));

  console.log("\n--- Caso borde: un solo participante ---");
  console.log(evaluarTorneoKickboxing([15], 5, 2));

  console.log(
    "\n--- Caso borde: penalizacion mayor que bono + combinaciones ---",
  );
  console.log(evaluarTorneoKickboxing([1, 2], 0, 10));
}
