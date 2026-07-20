// Ejercicio de Lógica 052 - Temática Pingpong

function seleccionarRaqueta(raquetaA, raquetaB, estiloJuego) {
    if (estiloJuego !== "ofensivo" && estiloJuego !== "defensivo") {
        return {
            eleccion: "ninguna",
            motivo: "El estilo de juego no está definido en las reglas (debe ser 'ofensivo' o 'defensivo')."
        };
    }

    let raquetaElegida = {};
    let motivoEleccion = "";

    if (estiloJuego === "ofensivo") {
        if (raquetaA.velocidad > raquetaB.velocidad) {
            raquetaElegida = raquetaA;
            motivoEleccion = "La opción A tiene mayor velocidad, ideal para un estilo ofensivo.";
        } else if (raquetaB.velocidad > raquetaA.velocidad) {
            raquetaElegida = raquetaB;
            motivoEleccion = "La opción B tiene mayor velocidad, ideal para un estilo ofensivo.";
        } else {
            raquetaElegida = raquetaA;
            motivoEleccion = "Ambas tienen la misma velocidad. Se elige la opción A por defecto.";
        }
    } else if (estiloJuego === "defensivo") {
        if (raquetaA.control > raquetaB.control) {
            raquetaElegida = raquetaA;
            motivoEleccion = "La opción A tiene mayor control, ideal para un estilo defensivo.";
        } else if (raquetaB.control > raquetaA.control) {
            raquetaElegida = raquetaB;
            motivoEleccion = "La opción B tiene mayor control, ideal para un estilo defensivo.";
        } else {
            raquetaElegida = raquetaA;
            motivoEleccion = "Ambas tienen el mismo control. Se elige la opción A por defecto.";
        }
    }

    return {
        eleccion: raquetaElegida.nombre,
        motivo: motivoEleccion
    };
}

// Pruebas
const opcionA = { nombre: "Raqueta Halcón", velocidad: 9, control: 5 };
const opcionB = { nombre: "Raqueta Escudo", velocidad: 6, control: 9 };
const estiloJugador = "ofensivo";

const resultado = seleccionarRaqueta(opcionA, opcionB, estiloJugador);
console.log("Resultado del caso de prueba:", resultado);