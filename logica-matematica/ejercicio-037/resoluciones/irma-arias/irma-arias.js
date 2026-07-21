
/**
 * Lógica Matemática 037 - Estadísticas de Ranking
 * Temática: Arquitectura 3D
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 45, 20],
    bono: 5,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas del reto
function calcularRankingArquitectura(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y estadísticas de ranking (búsqueda del puntaje máximo y suma base)
    let sumaPuntajes = 0;
    let puntajeMaximo = participantes[0];

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        
        if (valor > puntajeMaximo) {
            puntajeMaximo = valor;
        }
    }

    // Operación matemática combinando la suma, el puntaje líder del ranking, bono y penalización
    let puntajeFinal = Math.round((sumaPuntajes / participantes.length) + puntajeMaximo + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en la temática de arquitectura 3D
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "arquitecto senior BIM";
    } else if (puntajeFinal >= 25) {
        clasificacion = "modelador 3D estructurado";
    } else {
        clasificacion = "diseñador novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base promedio, puntaje líder del ranking (${puntajeMaximo}), aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularRankingArquitectura(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularRankingArquitectura(casoBorde));