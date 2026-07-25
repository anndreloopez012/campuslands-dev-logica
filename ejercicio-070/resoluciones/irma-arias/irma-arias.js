
function procesarInstruccionesViaje(itinerario, restriccionesPasajero) {
    // 1. Validar datos vacíos (Caso borde)
    if (!itinerario || !restriccionesPasajero) {
        return {
            estado: "Rechazado",
            mensaje: "Error: Faltan datos del itinerario o de las restricciones del pasajero."
        };
    }

    let pasosCumplidos = [];
    let observaciones = [];

    // Regla 1: Validar vigencia del pasaporte según destino internacional
    if (itinerario.esInternacional) {
        if (restriccionesPasajero.mesesVigenciaPasaporte >= 6) {
            pasosCumplidos.push("Pasaporte vigente validado correctamente (> 6 meses).");
        } else {
            observaciones.push("Alerta: El pasaporte tiene menos de 6 meses de vigencia.");
        }
    } else {
        pasosCumplidos.push("Viaje nacional: Pasaporte no requerido de forma obligatoria.");
    }

    // Regla 2: Validar visado o requisitos sanitarios
    if (itinerario.requiereVisa && !restriccionesPasajero.tieneVisa) {
        return {
            estado: "No apto para viajar",
            pasoActual: "Validación de visado",
            motivo: "El destino requiere visa obligatoria y el pasajero no la posee."
        };
    } else if (itinerario.requiereVisa) {
        pasosCumplidos.push("Visado verificado y aprobado.");
    }

    // 3. Entregar resultado final verificable
    return {
        destino: itinerario.destino,
        estadoItinerario: "Aprobado para el viaje",
        pasosValidados: pasosCumplidos,
        advertencias: observaciones
    };
}

// --- Casos de prueba ---
const itinerarioNormal = {
    destino: "Tokio, Japón",
    esInternacional: true,
    requiereVisa: false
};

const pasajeroNormal = {
    mesesVigenciaPasaporte: 8,
    tieneVisa: true
};

const itinerarioBorde = null; // Caso borde para validar datos nulos
const pasajeroBorde = null;

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarInstruccionesViaje(itinerarioNormal, pasajeroNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarInstruccionesViaje(itinerarioBorde, pasajeroBorde), null, 2));