function convertirVelocidadesAutos(autos) {
    if (!autos || autos.length === 0) return [];

    const FACTOR_MPH_A_KMH = 1.60934;
    const LIMITE_SUPERAUTO = 400; 
    const resultados = [];


    for (let i = 0; i < autos.length; i++) {
        const auto = autos[i];

        if (auto.velocidadMph <= 0) continue; 

        const velocidadKmhCalculada = auto.velocidadMph * FACTOR_MPH_A_KMH;
        
        const velocidadKmhRedondeada = Math.round(velocidadKmhCalculada);

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

    return resultados;
}


const garajeAutos = [
    { nombre: "Bugatti Chiron", velocidadMph: 261 }, 
    { nombre: "Ferrari LaFerrari", velocidadMph: 217 } 
];

console.log("--- Caso Normal ---");
console.log(convertirVelocidadesAutos(garajeAutos));

console.log("\n--- Caso Borde (Lista vacía) ---");
console.log(convertirVelocidadesAutos([]));