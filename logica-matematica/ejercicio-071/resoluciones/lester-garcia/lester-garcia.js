let golpesDirectos = 6;
let golpesCirculares = 4;

let combinaciones = golpesDirectos * golpesCirculares;

let categoria = "";

if (combinaciones >= 20) {
    categoria = "estrategia avanzada";
} else {
    categoria = "estrategia basica";
}

let explicacion = "se calcularon las combinaciones posibles multiplicando los tipos de golpes disponibles.";

console.log("combinaciones:", combinaciones);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);