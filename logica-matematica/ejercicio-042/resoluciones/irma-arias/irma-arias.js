
/**
 * Lógica Matemática 042 - Porcentajes y Proporciones
 * Temática: Ranking de Fútbol Sala
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 20],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con porcentajes y proporciones
function calcularRankingFutbolSala(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y cálculo proporcional (ej: tomando el 75% de la suma total como rendimiento táctico)
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Aplicación de porcentaje/proporción (75% del puntaje acumulado)
    let proporcionTactica = Math.round(sumaPuntajes * 0.75);

    // Operación matemática integrando la proporción, bono y penalización
    let puntajeFinal = proporcionTactica + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de fútbol sala
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "equipo de playoff";
    } else if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "fase de grupos";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, proporción aplicada (75%): ${proporcionTactica}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularRankingFutbolSala(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularRankingFutbolSala(casoBorde));