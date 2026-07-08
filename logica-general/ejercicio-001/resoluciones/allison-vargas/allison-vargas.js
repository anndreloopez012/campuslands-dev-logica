/**
 * Filtra los jugadores para encontrar a los mejores (Nivel Leyenda, sin daño y > 150 diamantes)
 * @param {Array} jugadores - Lista de objetos de jugadores
 * @returns {Array} - Jugadores que cumplen con los requisitos
 */
function filtrarMejoresJugadores(jugadores) {
  // Aplicamos las 3 reglas identificadas usando .filter()
  const aprobados = jugadores.filter(jugador => {
    const cumpleEstado = jugador.estado !== "Dañado";
    const cumpleDiamantes = jugador.diamantes > 150;
    const cumpleNivel = jugador.nivel === "Leyenda";

    return cumpleEstado && cumpleDiamantes && cumpleNivel;
  });

  // Si no hay jugadores que cumplan, puede retornar un mensaje o un array vacío []
  if (aprobados.length === 0) {
    return "No hay jugadores que cumplan con las reglas: 1. Estado válido, 2. Diamantes > 150, 3. Nivel Leyenda";
  }

  return aprobados;
}

// === PRUEBAS ===

const casoNormal = [
  { nombre: "Marvel", estado: "Dañado", diamantes: 80, nivel: "Maestro" },
  { nombre: "Dum", estado: "Mejorado", diamantes: 180, nivel: "Leyenda" },
  { nombre: "Alondra", estado: "Sin daño", diamantes: 170, nivel: "Gran maestro" }
];

console.log("Resultado Caso Normal:", filtrarMejoresJugadores(casoNormal));
// Salida: [ { nombre: 'Dum', estado: 'Mejorado', diamantes: 180, nivel: 'Leyenda' } ]


const casoBordeReal = [
  { nombre: "Marvel", estado: "Dañado", diamantes: 80, nivel: "Maestro" },
  { nombre: "Dum Falso", estado: "Mejorado", diamantes: 120, nivel: "Leyenda" } // <--- Falla por diamantes
];

console.log("Resultado Caso Borde:", filtrarMejoresJugadores(casoBordeReal));
// Salida: "No hay jugadores que cumplan con las reglas..."