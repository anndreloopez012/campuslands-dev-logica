let puntajes = [82, 95, 76, 88, 91];

let suma = 0;

for (let i = 0; i < puntajes.length; i++) {
    suma += puntajes[i];
}

let promedio = suma / puntajes.length;

puntajes.sort(function(a, b) {
    return a - b;
});

let mediana = puntajes[Math.floor(puntajes.length / 2)];

let categoria = "";

if (promedio >= 85 && mediana >= 88) {
    categoria = "equipo elite";
} else if (promedio >= 80) {
    categoria = "equipo competitivo";
} else {
    categoria = "equipo en desarrollo";
}

let explicacion = "se calcularon el promedio y la mediana para clasificar el rendimiento del equipo.";

console.log("promedio:", promedio);
console.log("mediana:", mediana);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);