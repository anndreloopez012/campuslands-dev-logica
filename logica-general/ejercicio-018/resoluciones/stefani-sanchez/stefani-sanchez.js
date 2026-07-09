/*
Ejercicio 018 - Sistemas de Turnos
Temática: Soldadura
Autor: Stefani Sánchez
*/

// Entradas
const trabajos = [
    {
        operario: "Carlos",
        prioridad: "media",
        estado: "pendiente"
    },
    {
        operario: "Ana",
        prioridad: "alta",
        estado: "bloqueado"
    },
    {
        operario: "Luis",
        prioridad: "alta",
        estado: "pendiente"
    },
    {
        operario: "Marta",
        prioridad: "baja",
        estado: "pendiente"
    }
];

function asignarTurno(listaTrabajos) {

    if (listaTrabajos.length === 0) {
        console.log("No existen trabajos pendientes.");
        return;
    }

    let trabajoSeleccionado = null;

    // Regla 1: atender primero los bloqueados
    for (let trabajo of listaTrabajos) {
        if (trabajo.estado === "bloqueado") {
            trabajoSeleccionado = trabajo;
            break;
        }
    }

    // Regla 2: si no hay bloqueados, buscar prioridad alta
    if (!trabajoSeleccionado) {
        for (let trabajo of listaTrabajos) {
            if (trabajo.prioridad === "alta") {
                trabajoSeleccionado = trabajo;
                break;
            }
        }
    }

    // Regla 3: si no existe prioridad alta, tomar el primero
    if (!trabajoSeleccionado) {
        trabajoSeleccionado = listaTrabajos[0];
    }

    console.log("=== TURNO ASIGNADO ===");
    console.log("Operario:", trabajoSeleccionado.operario);
    console.log("Prioridad:", trabajoSeleccionado.prioridad);
    console.log("Estado:", trabajoSeleccionado.estado);
}

// Caso normal
console.log("CASO NORMAL");
asignarTurno(trabajos);

// Caso borde
console.log("\nCASO BORDE");
asignarTurno([]);