
/**
 * Ejercicio 029: Módulos y Divisibilidad - Películas de Miedo
 * Regla: Verifica si los espectadores pueden distribuirse en salas de tamaño X
 * sin dejar a nadie fuera (si el resto es 0).
 */

function analizarDistribucionEspectadores(espectadores, capacidadSala) {
    if (capacidadSala <= 0) return "La capacidad de la sala debe ser mayor a 0";

    // Módulo (%) para hallar el residuo
    let sobrantes = espectadores % capacidadSala;
    let salasNecesarias = Math.ceil(espectadores / capacidadSala);

    return {
        espectadores: espectadores,
        salas_necesarias: salasNecesarias,
        sobrantes: sobrantes,
        distribucion_perfecta: (sobrantes === 0)
    };
}

// Pruebas
console.log("Distribución:", analizarDistribucionEspectadores(100, 20)); // Caso perfecto
console.log("Distribución:", analizarDistribucionEspectadores(105, 20)); // Caso con resto