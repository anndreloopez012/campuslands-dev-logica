
function ordenarPrioridadesTaller(vehiculos) {
    // 1. Validar datos vacíos (Caso borde)
    if (!vehiculos || vehiculos.length === 0) {
        return {
            resultado: [],
            mensaje: "Error: No hay vehículos registrados en la cola del taller."
        };
    }

    // 2. Definir un mapa de pesos para las prioridades (Urgente > Moderado > Rutina)
    const nivelesPrioridad = {
        "urgente": 1,
        "moderado": 2,
        "rutina": 3
    };

    // 3. Aplicar reglas de ordenamiento
    const vehiculosOrdenados = [...vehiculos].sort((a, b) => {
        const prioridadA = nivelesPrioridad[a.prioridad.toLowerCase()] || 4;
        const prioridadB = nivelesPrioridad[b.prioridad.toLowerCase()] || 4;

        if (prioridadA !== prioridadB) {
            return prioridadA - prioridadB; // Ordenar por nivel de prioridad
        }
        return a.tiempoEsperaHoras - b.tiempoEsperaHoras; // Desempate por mayor tiempo de espera
    });

    // 4. Entregar resultado verificable
    return {
        accion: "Ordenar cola de vehículos por prioridad en el taller mecánico",
        totalVehiculos: vehiculosOrdenados.length,
        colaAtencion: vehiculosOrdenados
    };
}

// --- Casos de prueba ---
const colaTallerNormal = [
    { placa: "ABC-123", servicio: "Cambio de aceite", prioridad: "rutina", tiempoEsperaHoras: 5 },
    { placa: "XYZ-789", servicio: "Frenos dañados", prioridad: "urgente", tiempoEsperaHoras: 2 },
    { placa: "MNO-456", servicio: "Revisión eléctrica", prioridad: "urgente", tiempoEsperaHoras: 4 }, // Gana en empate por mayor tiempo
    { placa: "DEF-456", servicio: "Alineación", prioridad: "moderado", tiempoEsperaHoras: 1 }
];

const colaTallerBorde = []; // Lista vacía

// Ejecutar pruebas
console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(ordenarPrioridadesTaller(colaTallerNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(ordenarPrioridadesTaller(colaTallerBorde), null, 2));