const escenas = [
    ["Modelado", "Completado", 100],
    ["Rigging", "Completado", 100],
    ["Animación", "En progreso", 75],
    ["Render", "Pendiente", 0]
];

let etapa = "";
let motivo = "";

for (let i = 0; i < escenas.length; i++) {
    if (
        escenas[i][1] !== "Completado" &&
        escenas[i][2] < 100
    ) {
        etapa = escenas[i][0];
        motivo = "Es la primera etapa que aún requiere trabajo.";
        break;
    }
}

if (etapa === "") {
    etapa = "Proyecto finalizado";
    motivo = "Todas las etapas están completadas.";
}

console.log("etapa:", etapa);
console.log("motivo:", motivo);