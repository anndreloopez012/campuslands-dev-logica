/**
 * Clasifica a un jugador según su nivel y estado de cuenta.
 * @param {number} nivel - Rango del jugador (1-100)
 * @param {string} estadoCuenta - Estado: "activo", "suspendido" o "nuevo"
 * @returns {object} - Resultado con categoría y motivo
 */
function clasificarJugador(nivel, estadoCuenta) {
   
    if (estadoCuenta === "suspendido") {
        return { categoria: "NO APTO", motivo: "Cuenta bajo sanción." };
    }

    if (estadoCuenta === "nuevo") {
        return { categoria: "PRINCIPIANTE", motivo: "Cuenta de reciente creación." };
    }

    if (estadoCuenta === "activo") {
        return nivel >= 80 
            ? { categoria: "ÉLITE", motivo: "Nivel alto de competencia." }
            : { categoria: "REGULAR", motivo: "Nivel estándar de juego." };
    }

    return { categoria: "ERROR", motivo: "Estado de cuenta no reconocido." };
}

const casosPrueba = [
    { nivel: 85, estado: "activo" },    // Caso normal (ÉLITE)
    { nivel: 10, estado: "suspendido" }, // Caso borde (NO APTO)
    { nivel: 90, estado: "nuevo" }      // Caso borde (PRINCIPIANTE - prevalece estado sobre nivel)
];

casosPrueba.forEach((caso, index) => {
    const resultado = clasificarJugador(caso.nivel, caso.estado);
    console.log(`Prueba ${index + 1}:`, { entrada: caso, salida: resultado });
});