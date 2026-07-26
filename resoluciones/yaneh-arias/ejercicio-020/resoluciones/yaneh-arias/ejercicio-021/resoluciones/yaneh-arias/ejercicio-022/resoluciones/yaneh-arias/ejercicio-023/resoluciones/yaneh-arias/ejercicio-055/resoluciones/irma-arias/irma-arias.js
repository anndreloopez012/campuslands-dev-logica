// irma-arias.js - Ejercicio 055: Dibujo digital (Velocidad, tiempo y distancia)

// Función 1: Validar que los datos de entrada para velocidad, tiempo y distancia sean coherentes
function validarDatosCinematica(distanciaPikseles, tiempoSegundos) {
    if (
        typeof distanciaPikseles !== 'number' || 
        typeof tiempoSegundos !== 'number' ||
        distanciaPikseles < 0 ||
        tiempoSegundos <= 0
    ) {
        return false;
    }
    return true;
}

// Función 2: Calcular la velocidad del trazo digital (Velocidad = Distancia / Tiempo)
function calcularVelocidadTrazo(datosTrazo) {
    const { nombreHerramienta, distanciaPikseles, tiempoSegundos } = datosTrazo;

    if (!validarDatosCinematica(distanciaPikseles, tiempoSegundos)) {
        return {
            estado: "Error",
            mensaje: "Datos inválidos. El tiempo debe ser mayor a cero y la distancia no puede ser negativa."
        };
    }

    const velocidadPxS = distanciaPikseles / tiempoSegundos;
    const velocidadRedondeada = Number(velocidadPxS.toFixed(2));

    let clasificacionTrazo = "Estándar";
    if (velocidadRedondeada > 500) {
        clasificacionTrazo = "Trazo ultra rápido (Ideal para líneas de acción o bocetos veloces)";
    } else if (velocidadRedondeada >= 100) {
        clasificacionTrazo = "Trazo fluido y controlado (Ideal para entintado normal)";
    } else {
        clasificacionTrazo = "Trazo lento y minucioso (Ideal para detalles finos y sombras)";
    }

    return {
        estado: "Exitoso",
        herramienta: nombreHerramienta,
        distanciaRecorridaPx: distanciaPikseles,
        tiempoTranscurridofs: tiempoSegundos,
        velocidadPxPorSegundo: velocidadRedondeada,
        clasificacion: clasificacionTrazo,
        explicacion: `Se aplicó la fórmula física de velocidad dividiendo la distancia en píxeles entre el tiempo en segundos durante la ejecución del dibujo digital.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Un pincel digital recorriendo 1200 píxeles en 4 segundos
const pruebaNormal = {
    nombreHerramienta: "Pincel de Entintado G-Pen",
    distanciaPikseles: 1200,
    tiempoSegundos: 4
};

// Caso Borde: Tiempo en cero para verificar el manejo de errores
const pruebaBorde = {
    nombreHerramienta: "Aerógrafo de Detalles",
    distanciaPikseles: 300,
    tiempoSegundos: 0
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(calcularVelocidadTrazo(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(calcularVelocidadTrazo(pruebaBorde), null, 2));