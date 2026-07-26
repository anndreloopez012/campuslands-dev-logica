/**
 * Ejercicio 086: Lógica matemática - Conversión de unidades (Autos hiperdeportivos)
 * Alumna: Yaneh Arias
 */

function convertirVelocidadHiperdeportivo(valor, unidadOrigen) {
    if (valor < 0) {
        return {
            resultado: 0,
            unidad_destino: "",
            explicacion: "El valor de velocidad no puede ser negativo."
        };
    }

    let resultado = 0;
    let unidadDestino = "";

    if (unidadOrigen === "kmh_a_ms") {
        // Kilómetros por hora a Metros por segundo (dividir entre 3.6)
        resultado = valor / 3.6;
        unidadDestino = "m/s";
    } else if (unidadOrigen === "ms_a_kmh") {
        // Metros por segundo a Kilómetros por hora (multiplicar por 3.6)
        resultado = valor * 3.6;
        unidadDestino = "km/h";
    } else {
        return {
            resultado: 0,
            unidad_destino: "desconocida",
            explicacion: "La unidad de conversión especificada no es válida."
        };
    }

    return {
        resultado: Number(resultado.toFixed(2)),
        unidad_destino: unidadDestino,
        explicacion: "Se aplicó la regla de conversión de unidades de velocidad para el análisis aerodinámico del auto hiperdeportivo."
    };
}

// Casos de prueba
const pruebaNormal = convertirVelocidadHiperdeportivo(360, "kmh_a_ms");
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = convertirVelocidadHiperdeportivo(0, "ms_a_kmh");
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
