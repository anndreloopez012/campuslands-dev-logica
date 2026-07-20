const proyecto = {
    tipoCuenta: "premium",
    capas: 18,
    formato: "PSD"
};

let resultado = "";
let motivo = "";

if (proyecto.tipoCuenta !== "premium") {
    resultado = "exportacion rechazada";
    motivo = "Solo las cuentas premium pueden exportar en formato PSD.";
} else if (proyecto.capas > 20) {
    resultado = "exportacion rechazada";
    motivo = "El proyecto supera el limite permitido de capas.";
} else {
    resultado = "exportacion aprobada";
    motivo = "El proyecto cumple todas las reglas para exportar en formato PSD.";
}

console.log("resultado:", resultado);
console.log("motivo:", motivo);