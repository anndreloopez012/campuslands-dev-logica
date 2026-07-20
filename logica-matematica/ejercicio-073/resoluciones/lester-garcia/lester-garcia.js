let x1 = 120;
let y1 = 80;
let x2 = 180;
let y2 = 160;

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

let categoria = "";

if (distancia >= 100) {
    categoria = "salto largo";
} else {
    categoria = "salto corto";
}

let explicacion = "se calculo la distancia entre dos coordenadas utilizando la formula de la distancia en el plano.";

console.log("distancia:", distancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);