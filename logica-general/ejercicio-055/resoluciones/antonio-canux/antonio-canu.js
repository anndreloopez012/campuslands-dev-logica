// Ejercicio de Lógica 055 - Temática Dibujo Digital

function validarLienzoDigital(destino, modoColor, dpi) {
    let ajustesRequeridos = [];

    if (destino === "impresion") {
        if (modoColor !== "CMYK") {
            ajustesRequeridos.push(`El modo de color actual es ${modoColor}. Para impresión, debe ser estrictamente CMYK.`);
        }
        if (dpi < 300) {
            ajustesRequeridos.push(`La resolución actual es ${dpi} dpi. Para impresión de alta calidad, el mínimo es 300 dpi.`);
        }
    } else if (destino === "web") {
        if (modoColor !== "RGB") {
            ajustesRequeridos.push(`El modo de color actual es ${modoColor}. Para plataformas web y pantallas, debe ser RGB.`);
        }
        if (dpi > 150) {
            ajustesRequeridos.push(`Resolución innecesariamente alta (${dpi} dpi). Para web, se recomienda entre 72 y 150 dpi para optimizar el peso del archivo.`);
        }
    } else {
        return {
            estado: "error",
            mensaje: `El destino '${destino}' no es válido. Las reglas de negocio solo contemplan 'web' o 'impresion'.`,
            ajustes: []
        };
    }

    if (ajustesRequeridos.length > 0) {
        return {
            estado: "requiere_configuracion",
            mensaje: `El lienzo no cumple con los estándares para su publicación en ${destino}.`,
            ajustes: ajustesRequeridos
        };
    }

    return {
        estado: "aprobado",
        mensaje: `Configuración de lienzo perfecta para su publicación en ${destino}.`,
        ajustes: []
    };
}
// Pruebas
// 1. CASO NORMAL
console.log("--- Ejecutando Caso Normal (Web) ---");
const resultadoNormal = validarLienzoDigital("web", "RGB", 72);
console.log(resultadoNormal);

// 2. CASO BORDE
console.log("\n--- Ejecutando Caso Borde (Impresión con reglas a medias) ---");
const resultadoBorde = validarLienzoDigital("impresion", "RGB", 300);
console.log(resultadoBorde);