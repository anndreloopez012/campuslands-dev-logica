
// Función 1: Validar que los datos de entrada del proyecto arquitectónico no estén vacíos
function validarProyectoArquitectura(proyecto) {
    if (!proyecto || typeof proyecto !== 'object' || Object.keys(proyecto).length === 0) {
        return false;
    }
    return true;
}

// Función 2: Evaluar la tabla de decisión lógica para diseño estructural 3D
function evaluarTablaDecisionEstructural(tipoEstructura, zonaSismica, pesoEdificioToneladas) {
    // Tabla de decisión simulada mediante lógica estructurada de múltiples condiciones
    if (tipoEstructura.toLowerCase() === "rascacielos" && zonaSismica.toUpperCase() === "ALTA") {
        if (pesoEdificioToneladas > 5000) {
            return {
                cimentacionRequerida: "Pilotes profundos de acero y concreto reforzado",
                nivelRefuerzoSismico: "Máximo (Sistema de amortiguadores de masa)",
                aprobacionSimulacion: "Aprobado con restricciones de carga"
            };
        } else {
            return {
                cimentacionReturnType: "Losa de cimentación flotante",
                nivelRefuerzoSismico: "Alto (Estructura flexible disipadora)",
                aprobacionSimulacion: "Aprobado"
            };
        }
    } else if (tipoEstructura.toLowerCase() === "residencial" && zonaSismica.toUpperCase() === "BAJA") {
        return {
            cimentacionRequerida: "Zapatas corridas superficiales",
            nivelRefuerzoSismico: "Estándar",
            aprobacionSimulacion: "Aprobado"
        };
    } else {
        return {
            cimentacionRequerida: "Cimentación mixta estándar",
            nivelRefuerzoSismico: "Moderado",
            aprobacionSimulacion: "Aprobado bajo revisión técnica"
        };
    }
}

// Función principal que coordina la aplicación de la tabla de decisión
function procesarTablaDecisionArquitectura(proyecto) {
    if (!validarProyectoArquitectura(proyecto)) {
        return {
            estado: "Rechazado",
            mensaje: "Error: No se proporcionaron datos válidos del proyecto de arquitectura 3D."
        };
    }

    const resultadoDecision = evaluarTablaDecisionEstructural(
        proyecto.tipoEstructura, 
        proyecto.zonaSismica, 
        proyecto.pesoEdificioToneladas
    );

    return {
        proyecto: proyecto.nombreModelo,
        tipoEstructura: proyecto.tipoEstructura,
        zonaSismica: proyecto.zonaSismica,
        ...resultadoDecision
    };
}

// --- Casos de prueba ---
const proyectoNormal = {
    nombreModelo: "Torre Corporativa Central 3D",
    tipoEstructura: "rascacielos",
    zonaSismica: "ALTA",
    pesoEdificioToneladas: 6000
};

const proyectoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarTablaDecisionArquitectura(proyectoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarTablaDecisionArquitectura(proyectoBorde), null, 2));