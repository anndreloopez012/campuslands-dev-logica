
/**
 * Ejercicio 009: Simulación de estados - Películas de miedo
 * Autor: Irma Yaneht Arias García
 */

const pelicula = { titulo: "El Conjuro", nivelSusto: 8 };

function simularEstado(pelicula) {
    // Definición de estados según reglas de negocio
    if (pelicula.nivelSusto > 9) {
        return "Estado: Espectador ha huido de la sala.";
    } else if (pelicula.nivelSusto >= 5) {
        return "Estado: Espectador está asustado pero sigue viendo.";
    } else {
        return "Estado: Espectador tranquilo.";
    }
}

console.log(simularEstado(pelicula));