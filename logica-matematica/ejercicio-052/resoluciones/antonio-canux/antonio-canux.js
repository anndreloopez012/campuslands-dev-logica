// Ejercicio 052: Probabilidad Básica - Pingpong

function calcularProbabilidadSaque(saquesExitosos, saquesFallidos) {
    const totalSaques = saquesExitosos + saquesFallidos;

    if (totalSaques === 0) {
        return {
            probabilidad_exito_porcentaje: 0,
            clasificacion: "sin datos",
            explicacion: "No hay historial de saques para calcular la probabilidad."
        };
    }

    const probabilidad = saquesExitosos / totalSaques;
    
    const porcentajeExito = Math.round((probabilidad * 100) * 100) / 100;

    let clasificacion = "";
    if (porcentajeExito >= 70) {
        clasificacion = "ofensivo implacable";
    } else if (porcentajeExito >= 40) {
        clasificacion = "jugador balanceado";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        probabilidad_exito_porcentaje: porcentajeExito,
        clasificacion: clasificacion,
        explicacion: `De ${totalSaques} saques registrados, ${saquesExitosos} fueron exitosos. La probabilidad de que el proximo saque sea exitoso es del ${porcentajeExito}%.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = calcularProbabilidadSaque(45, 15);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularProbabilidadSaque(0, 0);
console.log(resultadoBorde);