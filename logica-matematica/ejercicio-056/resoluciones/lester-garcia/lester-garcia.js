let presupuesto = 3200;
let descuento = 15;
let escenas = 12;

let montoDescuento = presupuesto * (descuento / 100);
let presupuestoFinal = presupuesto - montoDescuento;

let categoria = "";

if (presupuestoFinal <= 2800 && escenas >= 10) {
    categoria = "proyecto optimizado";
} else if (presupuestoFinal <= 3000) {
    categoria = "proyecto rentable";
} else {
    categoria = "proyecto costoso";
}

let explicacion = "se calculo el presupuesto final aplicando el descuento y se evaluo junto con la cantidad de escenas.";

console.log("presupuesto_final:", presupuestoFinal);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);