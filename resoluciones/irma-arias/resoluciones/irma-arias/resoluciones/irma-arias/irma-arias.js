
/**
 * Ejercicio 005: Taller mecánico - Ordenamiento de prioridades
 * Autor: Irma Yaneht Arias García
 */

const taller = [
    { vehiculo: "Moto", urgencia: "baja" },
    { vehiculo: "Camión", urgencia: "alta" },
    { vehiculo: "Auto", urgencia: "media" }
];

// Asignamos un valor numérico a la prioridad para poder ordenar
const valoresPrioridad = { alta: 1, media: 2, baja: 3 };

function ordenarTaller(lista) {
    return lista.sort((a, b) => valoresPrioridad[a.urgencia] - valoresPrioridad[b.urgencia]);
}

console.log("Vehículos ordenados por prioridad:");
console.table(ordenarTaller(taller));