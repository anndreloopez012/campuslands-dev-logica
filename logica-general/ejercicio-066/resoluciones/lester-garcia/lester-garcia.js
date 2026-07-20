const autos = [
    { modelo: "Bugatti Chiron", disponible: false, velocidadMaxima: 420 },
    { modelo: "Koenigsegg Jesko", disponible: true, velocidadMaxima: 483 },
    { modelo: "Rimac Nevera", disponible: true, velocidadMaxima: 412 }
];

let autoEncontrado = "";
let motivo = "";

for (let i = 0; i < autos.length; i++) {
    if (autos[i].disponible && autos[i].velocidadMaxima > 450) {
        autoEncontrado = autos[i].modelo;
        motivo = "Está disponible y supera los 450 km/h de velocidad máxima.";
        break;
    }
}

if (autoEncontrado === "") {
    autoEncontrado = "Ningún auto encontrado";
    motivo = "No existe un auto que cumpla todas las condiciones.";
}

console.log("auto:", autoEncontrado);
console.log("motivo:", motivo);