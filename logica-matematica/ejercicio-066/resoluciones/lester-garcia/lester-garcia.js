let velocidadKmh = 324;
let tiempoMinutos = 45;

let tiempoHoras = tiempoMinutos / 60;
let velocidadMs = velocidadKmh / 3.6;
let distancia = velocidadKmh * tiempoHoras;

let categoria = "";

if (distancia >= 200) {
    categoria = "recorrido largo";
} else if (distancia >= 100) {
    categoria = "recorrido medio";
} else {
    categoria = "recorrido corto";
}

let explicacion = "se convirtieron las unidades de tiempo y velocidad antes de calcular la distancia recorrida.";

console.log("tiempo_horas:", tiempoHoras);
console.log("velocidad_ms:", velocidadMs);
console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);