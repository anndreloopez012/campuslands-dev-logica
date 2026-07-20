// Ejercicio 048 - Patrones de puntuación (Películas de Ciencia Ficción)

function analizarPuntuacionSciFi(reseñas) {
    if (!Array.isArray(reseñas) || reseñas.length === 0) {
        return { error: "El arreglo de reseñas no puede estar vacío." };
    }

    let puntajeBase = 0;
    let bonoHype = 0;
    let rachaPerfecta = false;

    for (let i = 0; i < reseñas.length; i++) {
        const calificacionActual = reseñas[i];
        
        puntajeBase += calificacionActual;

        if (i > 0 && calificacionActual === 10 && reseñas[i - 1] === 10) {
            bonoHype += 5;
            rachaPerfecta = true;
        }
    }

    const puntajeTotal = puntajeBase + bonoHype;

    const categoria = puntajeTotal >= 45 ? "Obra Maestra de Sci-Fi" : "Película Estándar";

    return {
        puntaje_base: puntajeBase,
        bonos_aplicados: bonoHype,
        puntaje_total: puntajeTotal,
        patron_detectado: rachaPerfecta,
        clasificacion: categoria
    };
}

// Pruebas

console.log("--- Caso Normal (Película con patrón de hype) ---");
console.log(analizarPuntuacionSciFi([8, 10, 10, 9, 10]));

console.log("\n--- Caso Borde (Película sin patrón y puntajes bajos) ---");
console.log(analizarPuntuacionSciFi([6, 7, 8, 7, 9]));