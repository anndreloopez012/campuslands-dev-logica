// Ejercicio de Lógica 054 - Temática Tatuajes

function diagnosticarCitaTatuaje(edadCliente, zonaCuerpo, consentimientoFirmado) {
    let erroresEncontrados = [];

    if (edadCliente < 18) {
        erroresEncontrados.push("El cliente es menor de 18 años. Está prohibido tatuar a menores de edad.");
    }

    const zonasRestringidas = ["cara", "cuello", "manos"];

    if (zonasRestringidas.includes(zonaCuerpo.toLowerCase()) && edadCliente < 21) {
        erroresEncontrados.push(`La zona elegida ('${zonaCuerpo}') está restringida para menores de 21 años.`);
    }

    if (!consentimientoFirmado) {
        erroresEncontrados.push("Falta la firma en el documento de consentimiento informado y riesgos médicos.");
    }

    if (erroresEncontrados.length > 0) {
        return {
            estado: "rechazado",
            mensaje: "No se puede proceder con la sesión. Se encontraron los siguientes bloqueos:",
            detalleErrores: erroresEncontrados
        };
    }

    return {
        estado: "aprobado",
        mensaje: "Diagnóstico completado sin errores. La sesión de tatuaje puede comenzar.",
        detalleErrores: []
    };
}

// PRuebas, caso normal
console.log("--- Ejecutando Caso Normal ---");
const resultadoNormal = diagnosticarCitaTatuaje(25, "espalda", true);
console.log(resultadoNormal);

// Caso con errores múltiples
console.log("\n--- Ejecutando Caso con Múltiples Errores ---");
const resultadoErrores = diagnosticarCitaTatuaje(17, "cara", false);
console.log(resultadoErrores);

// Caso borde
console.log("\n--- Ejecutando Caso Borde (Límite de edad para zona restringida) ---");
const resultadoBorde = diagnosticarCitaTatuaje(21, "cuello", true);
console.log(resultadoBorde);