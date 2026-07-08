
/**
 * Ejercicio 009: Módulos y divisibilidad en cine de terror
 * Autor: Yaneht Arias
 */

function verificarDistribucion(totalPeliculas, grupos) {
    // 1. Calcular residuo
    const residuo = totalPeliculas % grupos;

    return {
        totalPeliculas,
        grupos,
        esDivisibleExacto: residuo === 0,
        peliculasSobrantes: residuo,
        mensaje: residuo === 0 
            ? "Distribución perfecta: No quedan películas sueltas." 
            : `Distribución desigual: Sobran ${residuo} películas.`
    };
}

// --- PRUEBAS ---
// Caso Normal: 20 películas en 4 grupos
console.log("Caso Normal:", verificarDistribucion(20, 4));

// Caso Borde: 21 películas en 4 grupos
console.log("Caso Borde:", verificarDistribucion(21, 4));