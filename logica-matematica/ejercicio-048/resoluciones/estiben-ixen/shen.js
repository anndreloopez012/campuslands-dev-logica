function evaluarPelicula(puntuaciones) {
    if (puntuaciones.length === 0) {
        return "No hay puntuaciones para evaluar.";
    }

    let suma = 0;

    for (let i = 0; i < puntuaciones.length; i++) {
        suma += puntuaciones[i];
    }

    let promedio = suma / puntuaciones.length;
    let clasificacion = "";

    if (promedio >= 8) {
        clasificacion = "Excelente";
    } else if (promedio >= 6) {
        clasificacion = "Buena";
    } else {
        clasificacion = "Regular";
    }

    return {
        promedio: promedio.toFixed(1),
        clasificacion: clasificacion
    };
}

console.log("Caso normal:");
console.log(evaluarPelicula([9, 8, 10, 7, 8]));

console.log("");

console.log("Caso borde:");
console.log(evaluarPelicula([]));

console.log("");

console.log("Caso adicional:");
console.log(evaluarPelicula([5, 6, 4, 7]));