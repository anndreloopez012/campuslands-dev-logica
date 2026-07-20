<<<<<<< HEAD
// Logica general 003 - toma de decisiones
// Estudiante: stefani-sanchez

// Entradas del problema
let jugadores = [
    { nombre: "Ana", estado: "aprobado" },
    { nombre: "Luis", estado: "pendiente" },
    { nombre: "Carlos", estado: "bloqueado" }
];

let prioridad = "alta";

// Reglas:
// 1. Si existe un jugador bloqueado, se revisa primero.
// 2. Si no hay bloqueados pero hay pendientes, se revisan pendientes.
// 3. Si todos están aprobados, el torneo puede continuar.

// Proceso
function decidirAccion(jugadores, prioridad) {

    let bloqueados = jugadores.filter(
        jugador => jugador.estado === "bloqueado"
    );

    let pendientes = jugadores.filter(
        jugador => jugador.estado === "pendiente"
    );

    if (bloqueados.length > 0) {
        return {
            accion: "revisar bloqueado",
            motivo: "La regla prioriza riesgos antes de tareas normales."
        };
    }

    if (pendientes.length > 0 && prioridad === "alta") {
        return {
            accion: "revisar pendientes",
            motivo: "Existen jugadores pendientes y la prioridad es alta."
        };
    }

    return {
        accion: "continuar torneo",
        motivo: "Todos los jugadores cumplen las reglas."
    };
}

// Resultado
let resultado = decidirAccion(jugadores, prioridad);

console.log("Accion:", resultado.accion);
console.log("Motivo:", resultado.motivo);


// Prueba normal
let prueba1 = [
    { nombre: "Maria", estado: "aprobado" },
    { nombre: "Pedro", estado: "pendiente" }
];

console.log("\nPrueba normal:");
console.log(decidirAccion(prueba1, "alta"));


// Caso borde: todos aprobados
let prueba2 = [
    { nombre: "Sofia", estado: "aprobado" },
    { nombre: "Juan", estado: "aprobado" }
];

console.log("\nCaso borde:");
console.log(decidirAccion(prueba2, "baja"));
=======
// Ejercicio 003 - Toma de decisiones
// Torneo de esports

function decidirAccion(equipo) {

  if (
    !equipo ||
    typeof equipo.nombre !== "string" ||
    typeof equipo.puntos !== "number" ||
    equipo.puntos < 0
  ) {
    return "Error: Datos inválidos.";
  }

  let accion = "";

  if (equipo.puntos >= 20) {
    accion = "Clasifica directamente a la siguiente ronda.";
  } else if (equipo.puntos >= 10) {
    accion = "Debe jugar una ronda de repechaje.";
  } else {
    accion = "Queda eliminado del torneo.";
  }

  return `${equipo.nombre}: ${accion}`;
}

// Prueba normal
console.log("Prueba 1");
console.log(
  decidirAccion({
    nombre: "Dragons",
    puntos: 22
  })
);

// Caso borde
console.log("\nPrueba 2");
console.log(
  decidirAccion({
    nombre: "Phoenix",
    puntos: 0
  })
);
>>>>>>> 0f99bf7 (feat: resolver ejercicio 003)
