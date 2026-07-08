
/**
 * Ejercicio 011: Conteo combinatorio en Kickboxing
 * Autor: Yaneht Arias
 */

function calcularEnfrentamientos(luchadores) {
    if (luchadores < 2) return 0;

    // Fórmula combinatoria: n * (n - 1) / 2
    const combinaciones = (luchadores * (luchadores - 1)) / 2;

    return {
        totalLuchadores: luchadores,
        enfrentamientosPosibles: combinaciones,
        mensaje: `Con ${luchadores} luchadores, hay ${combinaciones} enfrentamientos posibles.`
    };
}

// --- PRUEBAS ---
// Caso Normal: 4 luchadores
console.log("Caso Normal:", calcularEnfrentamientos(4));

// Caso Borde: 2 luchadores (único enfrentamiento)
console.log("Caso Borde:", calcularEnfrentamientos(2));