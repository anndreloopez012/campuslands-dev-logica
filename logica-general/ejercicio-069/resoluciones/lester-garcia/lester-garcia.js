const reproduccion = {
    pelicula: "La Casa Oscura",
    lucesApagadas: true,
    volumen: 70,
    pausa: false
};

let estado = "";
let motivo = "";

if (reproduccion.pausa) {
    estado = "Pausada";
    motivo = "La reproducción fue detenida por el usuario.";
} else if (!reproduccion.lucesApagadas) {
    estado = "Modo ambiente";
    motivo = "Se recomienda apagar las luces para una mejor experiencia.";
} else if (reproduccion.volumen < 50) {
    estado = "Volumen bajo";
    motivo = "El volumen es insuficiente para disfrutar los efectos de sonido.";
} else {
    estado = "Reproduciendo";
    motivo = "La película se reproduce con las condiciones ideales.";
}

console.log("estado:", estado);
console.log("motivo:", motivo);