// Ejercicio 045 - Taller Mecánico

function analizarSensorTransmision(lecturas, limiteCritico) {
    if (!Array.isArray(lecturas) || lecturas.length === 0) {
        return { error: "El registro del escáner no contiene datos." };
    }

    let temperaturaMinima = lecturas[0];
    
    let advertenciaLimite = false;
    const picosDeCalor = [];

    for (let i = 0; i < lecturas.length; i++) {
        const tempActual = lecturas[i];

        if (tempActual < temperaturaMinima) {
            temperaturaMinima = tempActual;
        }

        if (tempActual >= limiteCritico) {
            advertenciaLimite = true;
            picosDeCalor.push(tempActual);
        }
    }

    const estadoDiagnostico = advertenciaLimite ? "Fallo térmico detectado" : "Operación normal";

    return {
        temperatura_minima_registrada: temperaturaMinima,
        supero_limite: advertenciaLimite,
        picos_registrados: picosDeCalor,
        diagnostico: estadoDiagnostico
    };
}

// Pruebas

console.log("--- Caso Normal (Transmisión con sobrecalentamiento) ---");
console.log(analizarSensorTransmision([85, 92, 98, 106, 110, 102, 95], 105));

console.log("\n--- Caso Borde (Operación estable y fría) ---");
console.log(analizarSensorTransmision([40, 55, 68, 75, 82, 80], 105));