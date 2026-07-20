const turnos = [
    { soldador: "Ana", turno: "Mañana", disponible: false, certificado: true },
    { soldador: "Luis", turno: "Tarde", disponible: true, certificado: false },
    { soldador: "Carlos", turno: "Noche", disponible: true, certificado: true }
];

let asignacion = "";
let motivo = "";

for (let i = 0; i < turnos.length; i++) {
    if (turnos[i].disponible && turnos[i].certificado) {
        asignacion = `${turnos[i].soldador} - ${turnos[i].turno}`;
        motivo = "Es el primer soldador disponible y con certificación vigente.";
        break;
    }
}

if (asignacion === "") {
    asignacion = "Sin asignación";
    motivo = "No existe un soldador que cumpla todas las condiciones.";
}

console.log("asignacion:", asignacion);
console.log("motivo:", motivo);