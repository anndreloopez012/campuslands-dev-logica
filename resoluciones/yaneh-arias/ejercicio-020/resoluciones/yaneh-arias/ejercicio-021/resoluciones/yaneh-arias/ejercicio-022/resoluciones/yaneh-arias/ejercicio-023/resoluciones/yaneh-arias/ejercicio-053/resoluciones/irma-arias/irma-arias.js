// irma-arias.js - Ejercicio 053: Paracaidismo (Coordenadas y distancia)

// Función 1: Validar que las coordenadas de entrada sean numéricas y válidas
function validarCoordenadas(puntoA, puntoB) {
    if (
        typeof puntoA.x !== 'number' || typeof puntoA.y !== 'number' ||
        typeof puntoB.x !== 'number' || typeof puntoB.y !== 'number'
    ) {
        return false;
    }
    return true;
}

// Función 2: Calcular la distancia euclidiana entre dos puntos: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
function calcularDistanciaAterrizaje(coordenadaObjetivo, coordenadaReal) {
    if (!validarCoordenadas(coordenadaObjetivo, coordenadaReal)) {
        return {
            estado: "Error",
            mensaje: "Las coordenadas deben contener valores numéricos válidos (x, y)."
        };
    }

    const deltaX = coordenadaReal.x - coordenadaObjetivo.x;
    const deltaY = coordenadaReal.y - coordenadaObjetivo.y;
    
    // Distancia Euclidiana
    const distanciaMetros = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
    const distanciaRedondeada = Number(distanciaMetros.toFixed(2));

    let evaluacionPrecision = "Fuera de rango";
    if (distanciaRedondeada <= 5) {
        evaluacionPrecision = "Diana perfecta - Zona de máxima puntuación";
    } else if (distanciaRedondeada <= 15) {
        evaluacionPrecision = "Aterrizaje excelente - Buen control de descenso";
    } else if (distanciaRedondeada <= 30) {
        evaluacionPrecision = "Aterrizaje aceptable - Margen moderado";
    } else {
        evaluacionPrecision = "Aterrizaje desviado - Zona de riesgo";
    }

    return {
        estado: "Exitoso",
        objetivo: coordenadaObjetivo,
        aterrizajeReal: coordenadaReal,
        desviacionMetros: distanciaRedondeada,
        evaluacion: evaluacionPrecision,
        explicacion: `Se aplicó el cálculo de distancia euclidiana basada en coordenadas cartesianas para medir la precisión del paracaidista.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Centro de la diana en (0,0) y aterrizaje real en (3 metros este, 4 metros norte) -> Distancia exacta de 5m
const pruebaNormal = calcularDistanciaAterrizaje({ x: 0, y: 0 }, { x: 3, y: 4 });

// Caso Borde: Coordenadas con valores vacíos o mal formados
const pruebaBorde = calcularDistanciaAterrizaje({ x: 0, y: 0 }, { x: "invalido", y: 10 });

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(pruebaNormal, null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(pruebaBorde, null, 2));