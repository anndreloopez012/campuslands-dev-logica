const proyecto = {
    clientePremium: false,
    presupuesto: 30000,
    render4K: true,
    entregaUrgente: true
};

let servicio = "";
let motivo = "";

if (proyecto.clientePremium && proyecto.render4K && proyecto.entregaUrgente) {
    servicio = "Render 4K prioritario";
    motivo = "El cliente premium cumple todos los requisitos para el servicio prioritario.";
} else if (proyecto.render4K && proyecto.presupuesto >= 25000) {
    servicio = "Render 4K estándar";
    motivo = "El presupuesto permite realizar un render en 4K.";
} else if (proyecto.presupuesto >= 15000) {
    servicio = "Modelo arquitectónico";
    motivo = "El presupuesto permite desarrollar el modelo arquitectónico.";
} else {
    servicio = "Diseño conceptual";
    motivo = "El presupuesto solo permite un diseño conceptual.";
}

console.log("servicio:", servicio);
console.log("motivo:", motivo);