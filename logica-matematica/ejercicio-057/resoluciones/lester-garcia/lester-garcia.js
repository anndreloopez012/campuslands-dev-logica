let puntuaciones = [92, 85, 97, 88, 90];

let suma = 0;
let mayor = puntuaciones[0];
let menor = puntuaciones[0];

for (let i = 0; i < puntuaciones.length; i++) {
    suma += puntuaciones[i];

    if (puntuaciones[i] > mayor) {
        mayor = puntuaciones[i];
    }

    if (puntuaciones[i] < menor) {
        menor = puntuaciones[i];
    }
}

let promedio = suma / puntuaciones.length;
let rango = mayor - menor;

let categoria = "";

if (promedio >= 90 && rango <= 12) {
    categoria = "ranking sobresaliente";
} else if (promedio >= 85) {
    categoria = "ranking competitivo";
} else {
    categoria = "ranking en desarrollo";
}

let explicacion = "se calcularon el promedio y el rango de puntuaciones para clasificar el rendimiento del ranking.";

console.log("promedio:", promedio);
console.log("puntuacion_maxima:", mayor);
console.log("puntuacion_minima:", menor);
console.log("rango:", rango);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);