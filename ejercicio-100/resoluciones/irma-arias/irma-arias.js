// irma-arias.js - Ejercicio 100: Comida urbana (Estrategias de selección)

// Función 1: Validar que el listado de opciones de comida urbana no esté vacío
function validarOpcionesComidaUrbana(opciones) {
    if (!opciones || !Array.isArray(opciones) || opciones.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Calcular el índice de conveniencia y calidad de cada plato urbano
function calcularPuntajePlatoUrbano(plato) {
    const sabor = plato.calificacionSabor || 0; // Escala de 1 a 10
    const velocidadMinutos = plato.tiempoPreparacionMinutos || 1; // Menor tiempo es mejor
    const precio = plato.precioPesos || 1; // Menor costo incrementa accesibilidad
    const esVegano = plato.esVegano ? 1.2 : 1.0; // Bonificación si es inclusivo con dietas

    // Fórmula de selección: (Sabor * 50) + (EsVegano * 20) - (Velocidad * 2) - (Precio / 1000)
    const puntajeEstrategia = (sabor * 50 * esVegano) - (velocidadMinutos * 2) - (precio / 1000);

    return Number(puntajeEstrategia.toFixed(2));
}

// Función 3: Aplicar la estrategia de selección para encontrar el mejor plato urbano
function seleccionarMejorPlatoUrbano(opciones) {
    let mejorPlato = opciones[0];
    let mayorPuntaje = calcularPuntajePlatoUrbano(mejorPlato);

    for (let i = 1; i < opciones.length; i++) {
        const puntajeActual = calcularPuntajePlatoUrbano(opciones[i]);
        if (puntajeActual > mayorPuntaje) {
            mayorPuntaje = puntajeActual;
            mejorPlato = opciones[i];
        }
    }

    return {
        platoSeleccionado: mejorPlato,
        puntajeEstrategia: mayorPuntaje
    };
}

// Función principal que coordina el flujo de estrategias de selección en comida urbana
function procesarEstrategiaComidaUrbana(opciones) {
    if (!validarOpcionesComidaUrbana(opciones)) {
        return {
            estado: "Error",
            mensaje: "El listado de opciones de comida urbana está vacío o no es válido."
        };
    }

    const resultadoSeleccion = seleccionarMejorPlatoUrbano(opciones);

    return {
        accion: "Estrategias de selección - Menú de Comida Urbana",
        totalOpcionesAnalizadas: opciones.length,
        ...resultadoSeleccion
    };
}

// --- Casos de prueba ---
const opcionesMenuNormal = [
    { nombre: "Tacos al Pastor Callejeros", calificacionSabor: 9.0, tiempoPreparacionMinutos: 10, precioPesos: 15000, esVegano: false },
    { nombre: "Hamburguesa Smash Urbana", calificacionSabor: 9.5, tiempoPreparacionMinutos: 15, precioPesos: 22000, esVegano: false },
    { nombre: "Hot Dog Artesanal Giga", calificacionSabor: 8.5, tiempoPreparacionMinutos: 8, precioPesos: 12000, esVegano: false }
];

const opcionesMenuBorde = []; // Caso borde: Listado vacío

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarEstrategiaComidaUrbana(opcionesMenuNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarEstrategiaComidaUrbana(opcionesMenuBorde), null, 2));