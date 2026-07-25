
// Función 1: Validar que los datos de entrada del caso no estén vacíos
function validarDatosCaso(saltoData) {
    if (!saltoData || typeof saltoData !== 'object' || Object.keys(saltoData).length === 0) {
        return false;
    }
    return true;
}

// Función 2: Evaluar las condiciones climáticas y de viento
function evaluarClima(vientoVelocidadKmh, visibilidadKm) {
    if (vientoVelocidadKmh > 25) {
        return { apto: false, motivo: "Velocidad del viento demasiado alta (riesgo extremo)." };
    }
    if (visibilidadKm < 5) {
        return { apto: false, motivo: "Visibilidad insuficiente en la zona de aterrizaje." };
    }
    return { apto: true, motivo: "Condiciones meteorológicas favorables." };
}

// Función 3: Evaluar el equipo de seguridad (paracaídas principal y reserva)
function evaluarEquipo(equipoRevisado) {
    if (!equipoRevisado) {
        return { apto: false, motivo: "El equipo de paracaídas no ha sido inspeccionado y empacado por un profesional." };
    }
    return { apto: true, motivo: "Equipo de seguridad verificado correctamente." };
}

// Función principal que coordina la resolución del caso de salto
function resolverCasoParacaidismo(saltoData) {
    if (!validarDatosCaso(saltoData)) {
        return {
            estadoResolucion: "Rechazado",
            mensaje: "Error: No se proporcionaron datos válidos para evaluar el caso de paracaidismo."
        };
    }

    // Aplicar validaciones modulares
    const evaluacionClima = evaluarClima(saltoData.vientoKmh, saltoData.visibilidadKm);
    if (!evaluacionClima.apto) {
        return {
            paracaidista: saltoData.nombre,
            estadoResolucion: "Salto Cancelado",
            faseEvaluada: "Clima",
            diagnostico: evaluacionClima.motivo
        };
    }

    const evaluacionEquipo = evaluarEquipo(saltoData.equipoInspeccionado);
    if (!evaluacionEquipo.apto) {
        return {
            paracaidista: saltoData.nombre,
            estadoResolucion: "Salto Cancelado",
            faseEvaluada: "Equipo",
            diagnostico: evaluacionEquipo.motivo
        };
    }

    // Si supera todas las reglas
    return {
        paracaidista: saltoData.nombre,
        estadoResolucion: "Salto Aprobado",
        altitudAsignadaMetros: saltoData.altitudMetros || 4000,
        diagnostico: "Todas las validaciones de seguridad y clima fueron superadas exitosamente."
    };
}

// --- Casos de prueba ---
const casoNormal = {
    nombre: "Irma Arias",
    vientoKmh: 12,
    visibilidadKm: 8,
    equipoInspeccionado: true,
    altitudMetros: 3500
};

const casoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(resolverCasoParacaidismo(casoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(resolverCasoParacaidismo(casoBorde), null, 2));