// Ejercicio 051 - Logica matematica - Conteo combinatorio simple

const RANGOS_CLASIFICACION = [
  { limite: 0, nombre: 'sin torneo' },
  { limite: 3, nombre: 'torneo pequeño' },
  { limite: 10, nombre: 'torneo mediano' },
  { limite: Infinity, nombre: 'torneo grande' },
];

function clasificarTorneo(totalCombates) {
  return RANGOS_CLASIFICACION.find((rango) => totalCombates <= rango.limite).nombre;
}

function contarCombatesKickboxing(participantes) {
  if (!Array.isArray(participantes)) {
    throw new TypeError('participantes debe ser un arreglo');
  }

  const totalParticipantes = participantes.length;
  const totalCombates =
    totalParticipantes >= 2 ? (totalParticipantes * (totalParticipantes - 1)) / 2 : 0;

  const clasificacion = clasificarTorneo(totalCombates);

  return {
    totalCombates,
    clasificacion,
    explicacion: `con ${totalParticipantes} participante(s) se pueden formar ${totalCombates} combate(s) unico(s) (combinacion de 2 sin repetir), clasificando el torneo como "${clasificacion}".`,
  };
}

module.exports = { contarCombatesKickboxing };

// Pruebas manuales

console.log(contarCombatesKickboxing(['Ana', 'Luis', 'Marco', 'Sofia']));
// { totalCombates: 6, clasificacion: 'torneo mediano', explicacion: '...' }

console.log(contarCombatesKickboxing(['Ana', 'Luis']));
// { totalCombates: 1, clasificacion: 'torneo pequeño', explicacion: '...' }

console.log(contarCombatesKickboxing(['Ana']));
// { totalCombates: 0, clasificacion: 'sin torneo', explicacion: '...' }

console.log(contarCombatesKickboxing([]));
// { totalCombates: 0, clasificacion: 'sin torneo', explicacion: '...' }

console.log(
  contarCombatesKickboxing([
    'Ana', 'Luis', 'Marco', 'Sofia', 'Pedro', 'Karla',
  ])
);
// { totalCombates: 15, clasificacion: 'torneo grande', explicacion: '...' }