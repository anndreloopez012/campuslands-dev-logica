
/**
 * Ejercicio 028: Patrones de Puntuación - Sci-Fi Movies
 * Regla: 
 * - Si Max - Min > 5, el patrón es "Polarizante".
 * - Si Max - Min <= 5, el patrón es "Consistente".
 */

function analizarPatronPuntuacion(calificaciones) {
    if (!calificaciones || calificaciones.length < 2) return "Se requieren al menos 2 notas";

    let maximo = Math.max(...calificaciones);
    let minimo = Math.min(...calificaciones);
    let diferencia = maximo - minimo;

    // Determinación del patrón
    let patron = (diferencia > 5) ? "Polarizante" : "Consistente";
    
    // Cálculo de promedio como dato complementario
    let suma = calificaciones.reduce((a, b) => a + b, 0);
    let promedio = (suma / calificaciones.length).toFixed(1);

    return {
        promedio: promedio,
        rango: diferencia,
        patron: patron
    };
}

// Pruebas
console.log("Sci-Fi Movie A:", analizarPatronPuntuacion([9, 8, 9, 7, 8])); // Consistente
console.log("Sci-Fi Movie B:", analizarPatronPuntuacion([10, 2, 9, 3, 8])); // Polarizante