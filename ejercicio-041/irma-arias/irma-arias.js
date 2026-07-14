
/**
 * Lógica General 042 - Validación de datos (Fútbol Sala)
 * Autor: Irma Arias
 */

function validarJugador(jugador) {
    const errores = [];

    // Regla 1: Edad mínima
    if (jugador.edad < 18) errores.push("Edad insuficiente (mínimo 18).");
    
    // Regla 2: Goles coherentes
    if (jugador.goles < 0) errores.push("Los goles no pueden ser negativos.");
    
    // Regla 3: Número de camiseta válido
    if (jugador.camiseta < 1 || jugador.camiseta > 99) errores.push("Número de camiseta fuera de rango (1-99).");

    return {
        valido: errores.length === 0,
        jugador: jugador.nombre,
        errores: errores
    };
}

// Pruebas
const jugadorNormal = { nombre: "Irma", edad: 25, goles: 5, camiseta: 10 };
const jugadorInvalido = { nombre: "Junior", edad: 16, goles: -1, camiseta: 200 };

console.log("Validación Normal:", validarJugador(jugadorNormal));
console.log("Validación Errores:", validarJugador(jugadorInvalido));