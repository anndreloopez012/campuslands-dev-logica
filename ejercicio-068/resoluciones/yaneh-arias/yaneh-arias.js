/**
 * Ejercicio 068: Lógica matemática - Patrones de puntuación (Películas de ciencia ficción)
 * Alumna: Yaneh Arias
 */

function evaluarPuntuacionPeliculas(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return {
            promedio: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de puntajes está vacía."
        };
    }

    let suma = 0;
    let maximo = puntajes[0];
    let minimo = puntajes[0];

    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
        if (puntajes[i] > maximo) maximo = puntajes[i];
        if (puntajes[i] < minimo) minimo = puntajes[i];
    }

    let promedio = suma / puntajes.length;
    let clasificacion = promedio >= 4 ? "Obra Maestra" : "Estándar";

    return {
        promedio: Number(promedio.toFixed(2)),
        maximo: maximo,
        minimo: minimo,
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio, el puntaje máximo y mínimo de las valoraciones de las películas de ciencia ficción."
    };
}

// Casos de prueba
const pruebaNormal = evaluarPuntuacionPeliculas([4.5, 3.8, 5.0, 4.2]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = evaluarPuntuacionPeliculas([]);
console.log("Prueba Borde:", pruebaBorde);
