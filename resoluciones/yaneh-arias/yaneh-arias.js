/**
 * Ejercicio 007: Secuencias numéricas en lista de reproducción
 * Autor: Yaneht Arias
 */

function validarSecuencia(tempos) {
    if (tempos.length < 2) return "Secuencia válida (pocos datos)";

    // Verificar si es estrictamente ascendente
    let esAscendente = true;
    for (let i = 0; i < tempos.length - 1; i++) {
        if (tempos[i] >= tempos[i + 1]) {
            esAscendente = false;
            break;
        }
    }

    return {
        secuencia: tempos,
        esAscendente,
        mensaje: esAscendente ? "Flujo suave: Secuencia ascendente" : "Flujo mixto: Orden no lineal"
    };
}

// --- PRUEBAS ---
// Caso Normal: Secuencia ascendente
console.log("Caso Normal:", validarSecuencia([60, 80, 100, 120]));

// Caso Borde: Secuencia decreciente/desordenada
console.log("Caso Borde:", validarSecuencia([120, 60, 80]));