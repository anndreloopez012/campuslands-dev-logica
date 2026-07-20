const salto = {
    altura: 3500,
    paracaidasAbierto: true,
    clima: "despejado"
};

let resultado = "";
let motivo = "";

if (!salto.paracaidasAbierto) {
    resultado = "salto cancelado";
    motivo = "El paracaídas no está abierto y no es seguro continuar.";
} else if (salto.clima !== "despejado") {
    resultado = "esperar";
    motivo = "Las condiciones climáticas no son adecuadas para aterrizar con seguridad.";
} else {
    resultado = "continuar descenso";
    motivo = "El paracaídas está abierto y las condiciones son favorables.";
}

console.log("resultado:", resultado);
console.log("motivo:", motivo);