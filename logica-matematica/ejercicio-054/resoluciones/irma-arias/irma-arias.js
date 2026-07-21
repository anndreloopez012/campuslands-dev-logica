
/**
 * Lógica Matemática 054 - Áreas y Perímetros
 * Temática: Tatuajes
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [4, 6, 8],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con áreas y perímetros
function calcularTatuajesGeometricos(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de cálculo de área y perímetro (ej: usando elementos pares como ancho y e impares como alto, o factor geométrico)
    let sumaBase = 0;
    let areaTotalSimulada = 0;
    let perimetroTotalSimulado = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaBase += valor;
        
        // Simulación geométrica de diseño de tatuaje (asumiendo dimensiones basadas en los valores)
        let ancho = valor;
        let alto = Math.round(valor * 0.5); // Proporción geométrica simulada
        
        areaTotalSimulada += (ancho * alto);
        perimetroTotalSimulado += (2 * (ancho + alto));
    }

    let promedioArea = Math.round(areaTotalSimulada / participantes.length);
    let promedioPerimetro = Math.round(perimetroTotalSimulado / participantes.length);

    // Operación matemática integrando proporciones geométricas, bono y penalización
    let puntajeFinal = Math.round((promedioArea / promedioPerimetro) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en tatuajes
    let clasificacion = "";
    if (puntajeFinal > 20) {
        clasificacion = "tatuaje de manga completa";
    } else if (puntajeFinal >= 10) {
        clasificacion = "tatuaje mediano";
    } else {
        clasificacion = "tatuaje minimalista";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio de área simulada: ${promedioArea}, promedio de perímetro simulado: ${promedioPerimetro}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularTatuajesGeometricos(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularTatuajesGeometricos(casoBorde));