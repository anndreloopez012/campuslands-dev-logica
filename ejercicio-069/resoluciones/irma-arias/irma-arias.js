function simularEstadoSupervivencia(personaje, eventos) {
    // 1. Validar datos de entrada (Caso borde)
    if (!personaje || !eventos || !Array.isArray(eventos) || eventos.length === 0) {
        return {
            estadoFinal: "Desconocido",
            mensaje: "Error: Datos de personaje o eventos de simulación inválidos/vacíos."
        };
    }

    // Estado inicial del personaje
    let estadoActual = personaje.estadoInicial || "tranquilo";
    let nivelMedioMiedo = personaje.miedo || 10;
    let historialTransiciones = [estadoActual];

    // 2. Simulación de estados paso a paso mediante eventos
    for (let evento of eventos) {
        if (estadoActual === "eliminado") break; // Si ya fue eliminado, la simulación se detiene

        switch (evento.tipo) {
            case "ruido_extraño":
                nivelMedioMiedo += 25;
                if (nivelMedioMiedo > 80) estadoActual = "aterrorizado";
                else estadoActual = "alerta";
                break;

            case "aparicion_fantasma":
                nivelMedioMiedo += 50;
                if (nivelMedioMiedo >= 100) estadoActual = "eliminado";
                else estadoActual = "en_panico";
                break;

            case "encontrar_refugio":
                nivelMedioMiedo = Math.max(10, nivelMedioMiedo - 30);
                if (nivelMedioMiedo < 50) estadoActual = "seguro";
                else estadoActual = "alerta";
                break;

            default:
                // Evento neutral
                break;
        }

        historialTransiciones.push(estadoActual);
    }

    // 3. Entregar resultado verificable de la simulación
    return {
        nombrePersonaje: personaje.nombre,
        estadoFinal: estadoActual,
        nivelMiedoFinal: nivelMedioMiedo,
        historialEstados: historialTransiciones
    };
}

// --- Casos de prueba ---
const personajeNormal = {
    nombre: "Laurie Strode",
    estadoInicial: "alerta",
    miedo: 20
};

const eventosNormales = [
    { tipo: "ruido_extraño" },
    { tipo: "aparicion_fantasma" },
    { tipo: "encontrar_refugio" }
];

const personajeBorde = null; // Caso borde para validar datos nulos
const eventosVacios = [];

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(simularEstadoSupervivencia(personajeNormal, eventosNormales), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(simularEstadoSupervivencia(personajeBorde, eventosVacios), null, 2));