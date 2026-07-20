let victorias = 20;
let derrotas = 4;
let bono = 12;
let penalizacion = 6;

let puntaje = victorias * 3;

if (victorias >= 18) {
    puntaje += bono;
}

if (derrotas >= 4) {
    puntaje -= penalizacion;
}

let clasificacion = "";

if (puntaje >= 60 && derrotas <= 4) {
    clasificacion = "maestro";
} else if (puntaje >= 45) {
    clasificacion = "competitivo";
} else {
    clasificacion = "principiante";
}

let explicacion = "se calcularon los puntos obtenidos por las victorias y luego se aplicaron el bono y la penalizacion para clasificar al jugador.";

console.log("puntaje:", puntaje);
console.log("clasificacion:", clasificacion);
console.log("explicacion:", explicacion);