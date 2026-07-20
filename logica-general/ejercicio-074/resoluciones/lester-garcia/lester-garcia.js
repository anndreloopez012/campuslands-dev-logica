const sesion = {
    tintaDisponible: false,
    maquinaEsterilizada: true,
    clienteMayorEdad: true
};

let diagnostico = "";
let motivo = "";

if (!sesion.maquinaEsterilizada) {
    diagnostico = "error de seguridad";
    motivo = "La máquina no está esterilizada.";
} else if (!sesion.tintaDisponible) {
    diagnostico = "error de materiales";
    motivo = "No hay tinta disponible para realizar el tatuaje.";
} else if (!sesion.clienteMayorEdad) {
    diagnostico = "error de autorización";
    motivo = "El cliente no cumple con la edad mínima requerida.";
} else {
    diagnostico = "sin errores";
    motivo = "Todos los requisitos para iniciar la sesión se cumplen.";
}

console.log("diagnostico:", diagnostico);
console.log("motivo:", motivo);