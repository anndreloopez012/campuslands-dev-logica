let puntajes = [65, 78, 92, 85, 88];
let puntajeEvaluado = 85;

let mayor = puntajes[0];
let menor = puntajes[0];

for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] > mayor) {
        mayor = puntajes[i];
    }

    if (puntajes[i] < menor) {
        menor = puntajes[i];
    }
}

let puntajeNormalizado = (puntajeEvaluado - menor) / (mayor - menor);

let categoria = "";

if (puntajeNormalizado >= 0.7 && puntajeEvaluado >= 80) {
    categoria = "soldadura certificada";
} else if (puntajeNormalizado >= 0.5) {
    categoria = "soldadura aceptable";
} else {
    categoria = "requiere practica";
}

let explicacion = "se normalizo el puntaje evaluado utilizando los valores minimo y maximo y se verifico el puntaje original para clasificar el resultado.";

console.log("puntaje_normalizado:", puntajeNormalizado);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);