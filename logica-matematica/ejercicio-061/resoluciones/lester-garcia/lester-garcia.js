let victorias = 18;
let derrotas = 5;
let bono = 10;
let penalizacion = 8;

let puntaje = victorias * 3;

if (victorias >= 15) {
    puntaje += bono;
}

if (derrotas > 4) {
    puntaje -= penalizacion;
}

let clasificacion = "";

if (puntaje >= 50) {
    clasificacion = "elite";
} else if (puntaje >= 35) {
    clasificacion = "competitivo";
} else {
    clasificacion = "en desarrollo";
}

let explicacion = "se calcularon los puntos por victorias, se aplico un bono por alto rendimiento y una penalizacion por exceso de derrotas.";

console.log("puntaje:", puntaje);
console.log("clasificacion:", clasificacion);
console.log("explicacion:", explicacion);