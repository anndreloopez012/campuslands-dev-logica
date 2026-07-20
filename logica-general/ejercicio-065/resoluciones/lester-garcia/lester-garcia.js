let tiemposReparacion = [6, 4, 7, 5, 8];
let limite = 5;
let reparacionesUrgentes = 2;

let tiempoMinimo = tiemposReparacion[0];

for (let i = 1; i < tiemposReparacion.length; i++) {
    if (tiemposReparacion[i] < tiempoMinimo) {
        tiempoMinimo = tiemposReparacion[i];
    }
}

let estado = "";

if (tiempoMinimo <= limite && reparacionesUrgentes <= 2) {
    estado = "servicio eficiente";
} else if (tiempoMinimo <= limite) {
    estado = "servicio aceptable";
} else {
    estado = "servicio lento";
}

let explicacion = "se identifico el menor tiempo de reparacion y se evaluo junto con la cantidad de reparaciones urgentes.";

console.log("tiempo_minimo:", tiempoMinimo);
console.log("estado:", estado);
console.log("explicacion:", explicacion);