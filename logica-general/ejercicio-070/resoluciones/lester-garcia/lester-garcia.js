const viaje = {
    destino: "Antigua Guatemala",
    pasaporteValido: true,
    equipajeRegistrado: true,
    boletoConfirmado: true
};

let instruccion = "";
let motivo = "";

// Lectura paso a paso de las instrucciones
if (!viaje.boletoConfirmado) {
    instruccion = "Confirmar boleto";
    motivo = "No es posible iniciar el viaje sin un boleto confirmado.";
} else if (!viaje.pasaporteValido) {
    instruccion = "Renovar pasaporte";
    motivo = "El pasaporte debe estar vigente para viajar.";
} else if (!viaje.equipajeRegistrado) {
    instruccion = "Registrar equipaje";
    motivo = "El equipaje debe registrarse antes del abordaje.";
} else {
    instruccion = "Abordar el transporte";
    motivo = "Todos los requisitos del viaje se han cumplido.";
}

console.log("instruccion:", instruccion);
console.log("motivo:", motivo);