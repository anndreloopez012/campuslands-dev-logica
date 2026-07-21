
/**
 * Lógica Matemática 038 - Normalización de Puntajes
 * Temática: Soldadura
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 50],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeSoldadura(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y normalización simple (dividiendo cada valor o el acumulado respecto al valor máximo)
    let sumaPuntajes = 0;
    let maxValor = participantes[0];

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        if (valor > maxValor) {
            maxValor = valor;
        }
    }

    // Normalización de la suma base respecto al valor máximo del lote
    let valorNormalizado = Math.round((sumaPuntajes / maxValor) * 10);

    // Operación matemática con el valor normalizado, bono y penalización
    let puntajeFinal = valorNormalizado + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de soldadura
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion: "soldador experto MIG/TIG";
        clasificacion = "soldador experto MIG/TIG";
    } else if (puntajeFinal >= 15) {
        clasificacion = "calidad estructural aprobada";
    } else {
        clasificacion = "revision de cordon requerida";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, valor normalizado base: ${valorNormalizado}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeSoldadura(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeSoldadura(casoBorde));