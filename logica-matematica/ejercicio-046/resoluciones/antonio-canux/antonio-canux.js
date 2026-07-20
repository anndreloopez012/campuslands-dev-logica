// Ejercicio 046 - Conversión de Unidades (Autos Hiperdeportivos)

function convertirRendimientoHiperdeportivo(velocidadMph, potenciaHp) {
    if (typeof velocidadMph !== "number" || velocidadMph < 0 || 
        typeof potenciaHp !== "number" || potenciaHp < 0) {
        return { error: "Los datos de rendimiento deben ser números válidos y positivos." };
    }

    const FACTOR_MPH_A_KMH = 1.60934;
    const FACTOR_HP_A_KW = 0.7457;

    // 1. Convertir Mph a Km/h
    const velocidadKmh = velocidadMph * FACTOR_MPH_A_KMH;

    // 2. Convertir Hp a kW
    const potenciaKw = potenciaHp * FACTOR_HP_A_KW;

    const categoria = velocidadKmh >= 400 ? "Hypercar - Leyenda (Megacar)" : "Hypercar - Estándar";

    return {
        especificaciones_originales: {
            velocidad_mph: velocidadMph + " mph",
            potencia_hp: potenciaHp + " hp"
        },
        especificaciones_metricas: {
            velocidad_kmh: parseFloat(velocidadKmh.toFixed(2)) + " km/h",
            potencia_kw: parseFloat(potenciaKw.toFixed(2)) + " kW"
        },
        clasificacion_rendimiento: categoria
    };
}

// Pruebas

console.log("--- Caso Normal (Bugatti Chiron o similar) ---");
console.log(convertirRendimientoHiperdeportivo(261, 1500));

console.log("\n--- Caso Borde (Valores de inicio / En reposo) ---");
console.log(convertirRendimientoHiperdeportivo(0, 0));