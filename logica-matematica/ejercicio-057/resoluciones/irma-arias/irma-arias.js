
/**
 * Lógica Matemática 057 - Estadísticas de Ranking
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
    participantes: [45, 50, 55],
    bono: 12,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas con estadísticas de ranking
function calcularArquitecturaRanking(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de estadísticas de ranking (ordenamiento de mayor a menor y obtención de puntaje máximo/mínimo)
    let listaOrdenada = [...participantes].sort((a, b) => b - a);
    let puntajeMaximo = listaOrdenada[0];
    let puntajeMinimo = listaOrdenada[listaOrdenada.length - 1];
    
    // Calcular promedio del ranking
    let sumaTotal = participantes.reduce((acc, val) => acc + val, 0);
    let promedioRanking = Math.round(sumaTotal / participantes.length);

    // Operación matemática integrando el valor superior del ranking, bono y penalización
    let puntajeFinal = Math.round((promedioRanking + puntajeMaximo) / 2 + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en arquitectura 3D
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion = "render fotorrealista master";
    } else if (puntajeFinal >= 20) {
        clasificacion = "modelado arquitectonico avanzado";
    } else {
        clasificacion = "boceto estructural 3D";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Puntaje máximo en ranking: ${puntajeMaximo}, promedio del ranking: ${promedioRanking}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularArquitecturaRanking(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularArquitecturaRanking(casoBorde));