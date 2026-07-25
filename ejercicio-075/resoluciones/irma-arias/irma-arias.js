// Función 2: Evaluar reglas de negocio para Impresión (CMYK y alta resolución)
function evaluarReglasImpresion(proyecto) {
    if (proyecto.usoDestino.toLowerCase() === "impresion") {
        if (proyecto.resolucionDpi < 300) {
            return {
                cumple: false,
                motivo: "Para impresión comercial se requiere una resolución mínima de 300 DPI."
            };
        }
        if (proyecto.perfilColor.toUpperCase() !== "CMYK") {
            return {
                cumple: false,
                motivo: "Los proyectos de impresión deben usar estrictamente el perfil de color CMYK."
            };
        }
    }
    return { cumple: true, motivo: "Validación de impresión superada." };
}

// Función 3: Evaluar reglas de negocio para Web/Digital (RGB y optimización)
function evaluarReglasWeb(proyecto) {
    if (proyecto.usoDestino.toLowerCase() === "web") {
        if (proyecto.resolucionDpi > 150) {
            return {
                cumple: false,
                motivo: "Para uso web o digital, una resolución mayor a 150 DPI genera archivos innecesariamente pesados."
            };
        }
        if (proyecto.perfilColor.toUpperCase() !== "RGB") {
            return {
                cumple: false,
                motivo: "Los proyectos destinados a pantallas deben usar el perfil de color RGB."
            };
        }
    }
    return { cumple: true, motivo: "Validación web superada." };
}

// Función principal que coordina la aplicación de las reglas de negocio
function procesarReglasNegocioDibujo(proyecto) {
    if (!validarProyectoDibujo(proyecto)) {
        return {
            estado: "Rechazado",
            mensaje: "Error: No se proporcionaron datos válidos del proyecto de dibujo."
        };
    }

    // Aplicar reglas según el destino
    const reglaImpresion = evaluarReglasImpresion(proyecto);
    if (!reglaImpresion.cumple) {
        return {
            proyecto: proyecto.nombreLienzo,
            estadoValidacion: "No Aprobado",
            reglaIncumplida: "Negocio de Impresión",
            detalle: reglaImpresion.motivo
        };
    }

    const reglaWeb = evaluarReglasWeb(proyecto);
    if (!reglaWeb.cumple) {
        return {
            proyecto: proyecto.nombreLienzo,
            estadoValidacion: "No Aprobado",
            reglaIncumplida: "Negocio Digital/Web",
            detalle: reglaWeb.motivo
        };
    }

    return {
        proyecto: proyecto.nombreLienzo,
        estadoValidacion: "Aprobado para Exportación",
        detalle: "El lienzo cumple con todas las normativas técnicas y de negocio establecidas para su uso."
    };
}

// --- Casos de prueba ---
const proyectoNormal = {
    nombreLienzo: "Ilustración Cyberpunk 2077",
    usoDestino: "Impresion",
    resolucionDpi: 300,
    perfilColor: "CMYK"
};

const proyectoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarReglasNegocioDibujo(proyectoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarReglasNegocioDibujo(proyectoBorde), null, 2));