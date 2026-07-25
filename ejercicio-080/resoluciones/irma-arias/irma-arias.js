
// irma-arias.js - Ejercicio 080: Comida urbana (Estrategias de selección)

// Función 1: Validar que la lista de opciones de comida urbana no esté vacía
function validarOpcionesComida(opciones) {
    if (!opciones || !Array.isArray(opciones) || opciones.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Filtrar opciones que cumplan con un presupuesto máximo y calificación mínima
function filtrarCandidatosViables(opciones, presupuestoMaximo, calificacionMinima) {
    return opciones.filter(op => op.precio <= presupuestoMaximo && op.calificacion >= calificacionMinima);
}

// Función 3: Aplicar estrategia de selección (elegir el plato con mejor calificación y menor tiempo de espera)
function aplicarEstrategiaSeleccion(opcionesViables) {
    if (opcionesViables.length === 0) return null;

    // Ordenar de mayor a menor calificación, y en caso de empate, por menor tiempo de espera
    return [...opcionesViables].sort((a, b) => {
        if (b.calificacion !== a.calificacion) {
            return b.calificacion - a.calificacion;
        }
        return a.tiempoEsperaMinutos - b.tiempoEsperaMinutos;
    })[0];
}

// Función principal que coordina la estrategia de selección de comida urbana
function seleccionarMejorComidaUrbana(opciones, presupuestoMaximo, calificacionMinima) {
    if (!validarOpcionesComida(opciones)) {
        return {
            estado: "Error",
            mensaje: "La lista de opciones de comida urbana está vacía o no es válida."
        };
    }

    const viables = filtrarCandidatosViables(opciones, presupuestoMaximo, calificacionMinima);

    if (viables.length === 0) {
        return {
            estado: "Sin resultados",
            mensaje: "Ninguna opción de comida urbana cumple con los criterios de presupuesto y calificación definidos."
        };
    }

    const seleccionFinal = aplicarEstrategiaSeleccion(viables);

    return {
        accion: "Selección estratégica de comida urbana",
        criteriosAplicados: { presupuestoMaximo, calificacionMinima },
        platoSeleccionado: seleccionFinal.nombrePlato,
        puesto: seleccionFinal.nombrePuesto,
        precio: seleccionFinal.precio,
        calificacion: seleccionFinal.calificacion,
        tiempoEsperaMinutos: seleccionFinal.tiempoEsperaMinutos,
        estadoSeleccion: "Recomendación Exitosa"
    };
}

// --- Casos de prueba ---
const opcionesNormal = [
    { nombrePuesto: "Tacos El Chido", nombrePlato: "Tacos al Pastor", precio: 15, calificacion: 4.8, tiempoEsperaMinutos: 10 },
    { nombrePuesto: "Burguer Street", nombrePlato: "Hamburguesa Urbana", precio: 22, calificacion: 4.9, tiempoEsperaMinutos: 25 },
    { nombrePuesto: "Arepas del Barrio", nombrePlato: "Arepa Rellena", precio: 12, calificacion: 4.5, tiempoEsperaMinutos: 5 }
];

const opcionesBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(seleccionarMejorComidaUrbana(opcionesNormal, 20, 4.5), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(seleccionarMejorComidaUrbana(opcionesBorde, 20, 4.5), null, 2));