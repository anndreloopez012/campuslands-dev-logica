// irma-arias.js - Ejercicio 095: Dibujo digital (Reglas de negocio)

// Función 1: Validar que los datos del encargo de dibujo digital no estén vacíos
function validarEncargoDibujo(encargo) {
    if (!encargo || typeof encargo !== 'object' || Object.keys(encargo).length === 0) {
        return false;
    }
    if (!encargo.cliente || typeof encargo.cliente !== 'string' || encargo.cliente.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Aplicar las reglas de negocio para calcular costos, licencias y viabilidad
function calcularReglasNegocioDibujo(encargo) {
    const { horasEstimadas, resolucionDPI, usoComercial, esUrgente } = encargo;

    if (horasEstimadas <= 0) {
        return {
            estadoEncargo: "Rechazado",
            motivo: "Las horas estimadas de trabajo deben ser mayores a cero."
        };
    }

    let tarifaBasePorHora = 25; // Tarifa estándar por hora de ilustración
    let subtotal = horasEstimadas * tarifaBasePorHora;

    // Regla de negocio 1: Exigir resolución mínima de 300 DPI para encargos profesionales
    if (resolucionDPI < 300) {
        return {
            estadoEncargo: "Rechazado por Calidad",
            motivo: "La resolución del lienzo es inferior a los 300 DPI exigidos por el estudio."
        };
    }

    // Regla de negocio 2: Aplicar recargo por uso comercial de la obra (30% adicional)
    if (usoComercial) {
        subtotal *= 1.30;
    }

    // Regla de negocio 3: Aplicar incremento por entrega urgente (25% adicional)
    if (esUrgente) {
        subtotal *= 1.25;
    }

    return {
        estadoEncargo: "Aprobado",
        costoTotalCalculado: Number(subtotal.toFixed(2)),
        reglasAplicadas: [
            "Resolución de 300+ DPI validada.",
            usoComercial ? "Licencia de uso comercial aplicada." : "Uso personal / sin recargo comercial.",
            esUrgente ? "Tarifa de entrega urgente aplicada." : "Plazo de entrega estándar."
        ]
    };
}

// Función principal que coordina el flujo de reglas de negocio para el dibujo digital
function procesarReglasNegocioDibujoDigital(encargo) {
    if (!validarEncargoDibujo(encargo)) {
        return {
            estado: "Error",
            mensaje: "Los datos del encargo de dibujo digital están incompletos o vacíos."
        };
    }

    const resultadoReglas = calcularReglasNegocioDibujo(encargo);

    return {
        accion: "Reglas de negocio - Estudio de Dibujo Digital",
        cliente: encargo.cliente,
        proyecto: encargo.proyecto || "Ilustración General",
        ...resultadoReglas
    };
}

// --- Casos de prueba ---
const encargoNormal = {
    cliente: "Valeria Ríos",
    proyecto: "Concept Art Personaje Fantasy",
    horasEstimadas: 12,
    resolucionDPI: 300,
    usoComercial: true,
    esUrgente: false
};

const encargoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarReglasNegocioDibujoDigital(encargoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarReglasNegocioDibujoDigital(encargoBorde), null, 2));