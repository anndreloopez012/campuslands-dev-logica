
/**
 * Lógica Matemática 034 - Áreas y Perímetros
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
    participantes: [4, 8],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeTatuajes(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y simulación de cálculo de áreas y perímetros basados en las medidas
    let sumaPuntajes = 0;
    let areaTotalAproximada = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        
        // Simulando cálculo geométrico (ej: área de un cuadrado imaginario de lado 'valor')
        let areaUnidad = valor * valor;
        areaTotalAproximada += areaUnidad;
    }

    // Operación matemática con bono y penalización combinada con el promedio de área
    let factorGeometrico = Math.round(areaTotalAproximada / (participantes.length * 10));
    let puntajeFinal = sumaPuntajes + factorGeometrico + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de tatuajes
    let clasificacion = "";
    if (puntajeFinal > 100) {
        clasificacion = "tatuador master";
    } else if (puntajeFinal >= 40) {
        clasificacion = "estudio profesional";
    } else {
        clasificacion = "aprendiz de diseño";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, factor de área geométrica: ${factorGeometrico}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeTatuajes(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeTatuajes(casoBorde));