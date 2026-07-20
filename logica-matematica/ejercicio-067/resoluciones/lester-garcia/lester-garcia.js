let reproducciones = [120, 135, 150, 165, 180];

let incremento = reproducciones[1] - reproducciones[0];
let secuenciaValida = true;

for (let i = 1; i < reproducciones.length; i++) {
    if (reproducciones[i] - reproducciones[i - 1] !== incremento) {
        secuenciaValida = false;
        break;
    }
}

let total = 0;

for (let i = 0; i < reproducciones.length; i++) {
    total += reproducciones[i];
}

let categoria = "";

if (secuenciaValida && total >= 700) {
    categoria = "playlist viral";
} else if (secuenciaValida) {
    categoria = "playlist estable";
} else {
    categoria = "playlist irregular";
}

let explicacion = "se organizo la lista de reproducciones, se verifico que formara una secuencia numerica y se calculo el total de reproducciones.";

console.log("incremento:", incremento);
console.log("total:", total);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);