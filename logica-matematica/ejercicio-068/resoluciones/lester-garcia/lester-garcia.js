let puntuaciones = [9, 8, 9, 10, 9];

let total = 0;

for (let i = 0; i < puntuaciones.length; i++) {
    total += puntuaciones[i];
}

let promedio = total / puntuaciones.length;

let ascendente = true;

for (let i = 1; i < puntuaciones.length; i++) {
    if (puntuaciones[i] < puntuaciones[i - 1]) {
        ascendente = false;
        break;
    }
}

let categoria = "";

if (promedio >= 9 && ascendente) {
    categoria = "patron excelente";
} else if (promedio >= 8.5) {
    categoria = "patron consistente";
} else {
    categoria = "patron irregular";
}

let explicacion = "se organizo la lista de puntuaciones, se calculo el promedio y se verifico si seguia un patron ascendente.";

console.log("promedio:", promedio);
console.log("patron_ascendente:", ascendente);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);