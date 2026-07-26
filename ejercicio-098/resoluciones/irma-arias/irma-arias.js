// irma-arias.js - Ejercicio 098: Soldadura (Sistemas de turnos)

// Función 1: Validar que la cola de turnos de soldadura no esté vacía
function validarColaTurnos(colaTurnos) {
    if (!colaTurnos || !Array.isArray(colaTurnos) || colaTurnos.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Asignar puntaje de prioridad según el tipo de proceso de soldadura y urgencia
function calcularPrioridadSoldadura(soldador) {
    const { tipoProceso, esUrgente, experienciaAnios } = soldador;
    let puntaje = experienciaAnios * 2;

    // Regla de procesos: TIG y MIG estructural tienen mayor prioridad técnica
    if (tipoProceso === "TIG_Estructural") {
        puntaje += 20;
    } else if (tipoProceso === "MIG") {
        puntaje += 10;
    } else {
        puntaje += 5; // Soldadura por electrodo revestido estándar
    }

    // Si el proyecto cuenta con etiqueta de urgencia industrial
    if (esUrgente) {
        puntaje += 15;
    }

    return puntaje;
}

// Función 3: Organizar y asignar turnos en la estación de trabajo de manera secuencial
function gestionarTurnosEstacion(colaTurnos) {
    // Ordenar de mayor a menor prioridad calculada
    const colaOrdenada = [...colaTurnos].sort((a, b) => {
        return calcularPrioridadSoldadura(b) - calcularPrioridadSoldadura(a);
    });

    // Asignar turnos numéricos secuenciales
    return colaOrdenada.map((soldador, index) => {
        return {
            turnoAsignado: index + 1,
            soldador: soldador.nombre,
            proceso: soldador.tipoProceso,
            puntajePrioridad: calcularPrioridadSoldadura(soldador),
            estacionAsignada: `Estacion de Soldadura #${(index % 3) + 1}`
        };
    });
}

// Función principal que coordina el sistema de turnos de soldadura
function procesarSistemaTurnosSoldadura(colaTurnos) {
    if (!validarColaTurnos(colaTurnos)) {
        return {
            estado: "Error",
            mensaje: "La cola de turnos para las estaciones de soldadura está vacía o no es válida."
        };
    }

    const asignaciones = gestionarTurnosEstacion(colaTurnos);

    return {
        accion: "Sistemas de turnos - Asignación de Estaciones de Soldadura",
        totalSoldadoresEnCola: colaTurnos.length,
        cronogramaTurnos: asignaciones
    };
}

// --- Casos de prueba ---
const colaTurnosNormal = [
    { nombre: "Carlos Méndez", tipoProceso: "Electrodo", esUrgente: false, experienciaAnios: 3 },
    { nombre: "Irma Arias", tipoProceso: "TIG_Estructural", esUrgente: true, experienciaAnios: 5 }, // Alta prioridad
    { nombre: "Esteban Rojas", tipoProceso: "MIG", esUrgente: true, experienciaAnios: 4 }
];

const colaTurnosBorde = []; // Caso borde: Cola vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarSistemaTurnosSoldadura(colaTurnosNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarSistemaTurnosSoldadura(colaTurnosBorde), null, 2));