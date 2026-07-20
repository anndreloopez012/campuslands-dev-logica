let distancias = [125.8, 98.4, 140.2, 110.6];

let distanciasRedondeadas = [];

let total = 0;

for (let i = 0; i < distancias.length; i++) {
    let valor = Math.round(distancias[i]);
    distanciasRedondeadas.push(valor);
    total += valor;
}

let promedio = total / distanciasRedondeadas.length;

let categoria = "";

if (promedio >= 120) {
    categoria = "ruta extensa";
} else if (promedio >= 100) {
    categoria = "ruta equilibrada";
} else {
    categoria = "ruta corta";
}

let explicacion = "se organizaron las distancias, se redondearon al entero mas cercano y luego se calculo el promedio.";

console.log("distancias_redondeadas:", distanciasRedondeadas);
console.log("promedio:", promedio);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);