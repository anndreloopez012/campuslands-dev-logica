// irma-arias.js - Ejercicio 097: Arquitectura 3D (Tablas de decisión)

// Función 1: Validar que el objeto de entrada del plano arquitectónico no esté vacío
function validarDatosProyectoArquitectura(proyecto) {
    if (!proyecto || typeof proyecto !== 'object' || Object.keys(proyecto).length === 0) {
        return false;
    }
    if (!proyecto.nombreProyecto || typeof proyecto.nombreProyecto !== 'string' || proyecto.nombreProyecto.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Aplicar la tabla de decisión lógica para la viabilidad estructural del proyecto 3D
function evaluarTablaDecisionEstructural(proyecto) {
    const { tipoSuelo, zonaSismica, usaConcretoReforzado } = proyecto;

    // Tabla de Decisión Lógica:
    // Suelo rocoso o arcilloso firme en zona sísmica baja/media con concreto reforzado -> Aprobado
    // Suelo arenoso o blando en zona sísmica alta sin concreto reforzado -> Rechazado crítico
    
    if (tipoSuelo === "arenoso_blando" && zonaSismica === "alta" && !usaConcretoReforzado) {
        return {
            estadoViabilidad: "Rechazado - Riesgo Estructural Severo",
            accionRequerida: "Modificar cimentación: Es obligatorio el uso de concreto reforzado en suelos blandos con alta sismicidad."
        };
    }

    if (tipoSuelo === "arcilloso_humedo" && zonaSismica === "alta") {
        return {
            estadoViabilidad: "Aprobado con Restricciones Técnicas",
            accionRequerida: "Se requiere añadir pilotes de profundidad y estudio geotécnico adicional."
        };
    }

    return {
        estadoViabilidad: "Aprobado - Estructura Viable",
        accionRequerida: "El diseño 3D cumple con los parámetros estándar de la tabla de decisión estructural."
    };
}

// Función principal que coordina el proceso de evaluación de arquitectura 3D
function procesarTablaDecisionArquitectura(proyecto) {
    if (!validarDatosProyectoArquitectura(proyecto)) {
        return {
            estado: "Error",
            mensaje: "Los datos del proyecto de arquitectura 3D están incompletos o vacíos."
        };
    }

    const resultadoDecision = evaluarTablaDecisionEstructural(proyecto);

    return {
        accion: "Tablas de decisión - Validación de Proyecto Arquitectura 3D",
        proyecto: proyecto.nombreProyecto,
        arquitecto: proyecto.arquitecto || "Irma Arias",
        ...resultadoDecision
    };
}

// --- Casos de prueba ---
const proyectoNormal = {
    nombreProyecto: "Torre Mirador Andino 3D",
    tipoSuelo: "arcilloso_humedo",
    zonaSismica: "alta",
    usaConcretoReforzado: true
};

const proyectoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarTablaDecisionArquitectura(proyectoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarTablaDecisionArquitectura(proyectoBorde), null, 2));