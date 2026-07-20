// Ejercicio de Lógica 051: Temática Kickboxing

function gestionarPeleadores(items, prioridad, regla) {
    
    const mapaPrioridad = {
        "lesionado": 1,
        "pesaje_pendiente": 2,
        "apto": 3
    };

    const listaOrdenada = [...items].sort((a, b) => mapaPrioridad[a] - mapaPrioridad[b]);

    if (listaOrdenada.length === 0) {
        return {
            accion: "ninguna",
            motivo: "La lista de peleadores está vacía.",
            lista_ordenada: []
        };
    }

    const peleadorPrioritario = listaOrdenada[0];
    let accionInmediata = "";
    let motivoAccion = "";

    if (peleadorPrioritario === "lesionado" && prioridad === "alta" && regla === "revisar lesionados primero") {
        accionInmediata = "revisar lesionado";
        motivoAccion = "la regla prioriza riesgos médicos antes que trámites normales.";
    } else if (peleadorPrioritario === "pesaje_pendiente") {
        accionInmediata = "realizar pesaje";
        motivoAccion = "no hay lesionados, el siguiente paso es verificar el peso.";
    } else {
        accionInmediata = "enviar al ring";
        motivoAccion = "todos los peleadores están aptos y listos para competir.";
    }

    return {
        accion: accionInmediata,
        motivo: motivoAccion,
        lista_ordenada: listaOrdenada
    };
}

// Pruebas
const estadosPeleadores = ["apto", "pesaje_pendiente", "lesionado"];
const nivelPrioridad = "alta";
const reglaEstablecida = "revisar lesionados primero";

const resultado = gestionarPeleadores(estadosPeleadores, nivelPrioridad, reglaEstablecida);
console.log("Resultado del caso de prueba:", resultado);