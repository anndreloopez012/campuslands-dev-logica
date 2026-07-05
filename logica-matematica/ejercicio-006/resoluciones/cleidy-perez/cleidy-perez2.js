function convertirVelocidadesAutos(autos) {
    // 1. Identificar entradas y usar condicionales para validar
    if (!autos || autos.length === 0) return [];

    // Factor de conversión: 1 milla por hora equivale a 1.60934 kilómetros por hora
    const FACTOR_MPH_A_KMH = 1.60934;
    const LIMITE_SUPERAUTO = 400; // Kilómetros por hora
    const resultados = [];

    // 2. Cálculo numérico y procesamiento
    for (let i = 0; i < autos.length; i++) {
        const auto = autos[i];

        // Validar datos fuera de rango o incorrectos
        if (auto.velocidadMph <= 0) continue; 

        // Operación matemática para cambiar de unidades (Conversión)
        const velocidadKmhCalculada = auto.velocidadMph * FACTOR_MPH_A_KMH;
        
        // Redondear el número para que sea fácil de leer (Razonamiento cuantitativo)
        const velocidadKmhRedondeada = Math.round(velocidadKmhCalculada);

        // Usar condicional para clasificar según la regla del límite
        let clasificacion = "Deportivo de alta gama";
        if (velocidadKmhRedondeada >= LIMITE_SUPERAUTO) {
            clasificacion = "Hiperdeportivo Leyenda";
        }

        resultados.push({
            nombre: auto.nombre,
            velocidadMph: auto.velocidadMph,
            velocidadKmh: velocidadKmhRedondeada,
            categoria: clasificacion
        });
    }

    // 3. Definir salidas
    return resultados;
}

// === PROBAR CASOS ===
const garajeAutos = [
    { nombre: "Bugatti Chiron", velocidadMph: 261 }, // 261 * 1.60934 = 419.99 (Pasa los 400)
    { nombre: "Ferrari LaFerrari", velocidadMph: 217 } // 217 * 1.60934 = 349.22 (No pasa los 400)
];

console.log("--- Caso Normal ---");
console.log(convertirVelocidadesAutos(garajeAutos));

console.log("\n--- Caso Borde (Lista vacía) ---");
console.log(convertirVelocidadesAutos([]));