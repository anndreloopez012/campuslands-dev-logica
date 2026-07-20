let velocidad = 15;
let tiempo = 4;

let distancia = velocidad * tiempo;

let categoria = "";

if (distancia >= 50) {
    categoria = "avance rapido";
} else {
    categoria = "avance normal";
}

let explicacion = "se calculo la distancia recorrida multiplicando la velocidad por el tiempo.";

console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);