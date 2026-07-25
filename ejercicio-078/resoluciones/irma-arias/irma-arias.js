// irma-arias.js - Ejercicio 078: Soldadura (Sistemas de turnos)

// Función 1: Validar que la lista de turnos y soldadores no esté vacía
function validarListaTurnos(soldadores) {
    if (!soldadores || !Array.isArray(soldadores) || soldadores.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Filtrar soldadores aptos según el tipo de proceso de soldadura requerido (ej: TIG, MIG)
function filtrarPorProceso(soldadores, procesoRequerido) {
    return soldadores.filter(s => s.procesoEspecialidad.toLowerCase() === procesoRequerido.toLowerCase());
}

// Función 3: Ordenar los soldadores disponibles por menor cantidad de horas acumuladas (equidad de turnos)
function ordenarPorEquidadTurno(soldadores) {
    return [...soldadores].sort((a, b) => a.horasAcumuladas - b.horasAcumuladas);
}

// Función principal que coordina la asignación del sistema de turnos
function gestionarSistemaTurnosSoldadura(soldadores, procesoRequerido) {
    if (!validarListaTurnos(soldadores)) {
        return {
            estado: "Error",
            mensaje: "La lista de soldadores está vacía o no es válida para el sistema de turnos."
        };
    }

    const filtrados = filtrarPorProceso(soldadores, procesoRequerido);

    if (filtrados.length === 0) {
        return {
            estado: "Sin disponibilidad",
            mensaje: `No se encontraron soldadores certificados para el proceso ${procesoRequerido}.`
        };
    }

    const turnosOrdenados = ordenarPorEquidadTurno(filtrados);
    const soldadorAsignado = turnosOrdenados[0]; // Se asigna al que tenga menos horas acumuladas

    return {
        accion: "Asignación de turno en línea de soldadura",
        procesoEvaluado: procesoRequerido,
        soldadorSeleccionado: soldadorAsignado.nombre,
        horasPrevias: soldadorAsignado.horasAcumuladas,
        estadoAsignacion: "Turno Asignado Exitosamente"
    };
}

// --- Casos de prueba ---
const listaSoldadoresNormal = [
    { nombre: "Carlos Pérez", procesoEspecialidad: "TIG", horasAcumuladas: 35 },
    { nombre: "Irma Arias", procesoEspecialidad: "TIG", horasAcumuladas: 20 }, // Menos horas, debe ser priorizada
    { nombre: "Andrés Gomez", procesoEspecialidad: "MIG", horasAcumuladas: 15 },
    { nombre: "Luisa Fernanda", procesoEspecialidad: "TIG", horasAcumuladas: 28 }
];

const listaSoldadoresBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(gestionarSistemaTurnosSoldadura(listaSoldadoresNormal, "TIG"), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(gestionarSistemaTurnosSoldadura(listaSoldadoresBorde, "TIG"), null, 2));