/**
 * Ejercicio 066: Lógica matemática - Conversión de unidades (Autos Hiperdeportivos)
 * Alumna: Yaneh Arias
 */

function convertirUnidadesHiperdeportivo(valor, unidadOrigen) {
    if (valor === undefined || valor === null || isNaN(valor)) {
        return {
            resultado: 0,
            unidad_destino: "inválido",
            explicacion: "El valor de entrada no es válido."
        };
    }

    let resultado = 0;
    let unidadDestino = "";

    if (unidadOrigen === "mph_a_kmh") {
        resultado = valor * 1.60934;
        unidadDestino = "km/h";
    } else if (unidadOrigen === "hp_a_kw") {
        resultado = valor * 0.7457;
        unidadDestino = "kW";
    } else {
        return {
            resultado: 0,
            unidad_destino: "desconocida",
            explicacion: "La unidad de origen especificada no está soportada."
        };
    }

    return {
        resultado: Number(resultado.toFixed(2)),
        unidad_destino: unidadDestino,
        explicacion: "Se aplicó la fórmula de conversión estándar para el sistema del hiperdeportivo."
    };
}

// Casos de prueba
const pruebaNormal = convertirUnidadesHiperdeportivo(250, "mph_a_kmh");
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = convertirUnidadesHiperdeportivo(0, "hp_a_kw");
console.log("Prueba Borde:", pruebaBorde);
