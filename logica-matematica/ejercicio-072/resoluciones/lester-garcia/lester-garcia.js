let saquesExitosos = 18;
let totalSaques = 24;

let probabilidad = saquesExitosos / totalSaques;

let categoria = "";

if (probabilidad >= 0.75) {
    categoria = "saque efectivo";
} else {
    categoria = "saque en mejora";
}

let explicacion = "se calculo la probabilidad de exito dividiendo los saques exitosos entre el total de saques.";

console.log("probabilidad:", probabilidad);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);