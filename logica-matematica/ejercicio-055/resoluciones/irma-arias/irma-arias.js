
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 10, 15],
    bono: 6,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con velocidad, tiempo y distancia
function calcularDibujoDigitalCinematica(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de cálculo físico aplicado a trazos digitales (ej: velocidad de trazo y tiempo de renderizado)
    let sumaVelocidades = 0;
    let distanciaTotalSimulada = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaVelocidades += valor;
        
        // Simulación: Distancia = Velocidad * Tiempo (asumiendo un tiempo constante de 2 unidades)
        let tiempoConstante = 2;
        distanciaTotalSimulada += (valor * tiempoConstante);
    }

    let promedioVelocidad = Math.round(sumaVelocidades / participantes.length);
    let promedioDistancia = Math.round(distanciaTotalSimulada / participantes.length);

    // Operación matemática combinando la cinemática de trazo, bono y penalización
    let puntajeFinal = Math.round((promedioDistancia / 4) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en dibujo digital
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "trazo fluido avanzado";
    } else if (puntajeFinal >= 15) {
        clasificacion = "estilo en desarrollo";
    } else {
        clasificacion = "trazos basicos";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio de velocidad: ${promedioVelocidad}, distancia de trazo estimada: ${promedioDistancia}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularDibujoDigitalCinematica(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularDibujoDigitalCinematica(casoBorde));