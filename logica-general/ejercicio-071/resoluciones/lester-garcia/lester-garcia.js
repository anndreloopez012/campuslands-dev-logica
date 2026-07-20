const entrenamiento = {
    tecnicas: ["jab", "patada baja", "uppercut"],
    energia: 55,
    rival: "ofensivo"
};

let accion = "";
let motivo = "";

if (entrenamiento.energia < 30) {
    accion = "descansar";
    motivo = "La energia es insuficiente para mantener un entrenamiento seguro.";
} else if (entrenamiento.rival === "ofensivo") {
    accion = "practicar defensa";
    motivo = "Un rival ofensivo requiere mejorar bloqueos y contraataques.";
} else {
    accion = "practicar combinaciones";
    motivo = "Las condiciones permiten enfocarse en mejorar la tecnica.";
}

console.log("accion:", accion);
console.log("motivo:", motivo);