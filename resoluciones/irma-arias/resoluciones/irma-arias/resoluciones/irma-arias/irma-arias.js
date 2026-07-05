
/**
 * Ejercicio 008: Flujos paso a paso - Películas de ciencia ficción
 * Autor: Irma Yaneht Arias García
 */

const pelicula = { titulo: "Interstellar", genero: "Ciencia Ficción", calificacion: 8.5 };

function evaluarPelicula(pelicula) {
    // Paso 1: Verificar género
    if (pelicula.genero !== "Ciencia Ficción") {
        return "Descartada: No es ciencia ficción.";
    }
    // Paso 2: Verificar calidad
    if (pelicula.calificacion < 7) {
        return "Descartada: Calificación baja.";
    }
    // Resultado final
    return `Aceptada para maratón: ${pelicula.titulo}`;
}

console.log(evaluarPelicula(pelicula));