let precios = [8200, 9500, 11200, 8700, 10500];

let mayor = precios[0];
let menor = precios[0];

for (let i = 1; i < precios.length; i++) {
    if (precios[i] > mayor) {
        mayor = precios[i];
    }

    if (precios[i] < menor) {
        menor = precios[i];
    }
}

let rango = mayor - menor;

let categoria = "";

if (mayor >= 11000 && rango >= 2500) {
    categoria = "inventario premium";
} else if (mayor >= 10000) {
    categoria = "inventario destacado";
} else {
    categoria = "inventario estandar";
}

let explicacion = "se identificaron el precio maximo y el minimo para calcular el rango y clasificar el inventario.";

console.log("precio_maximo:", mayor);
console.log("precio_minimo:", menor);
console.log("rango:", rango);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);