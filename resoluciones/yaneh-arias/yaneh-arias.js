
/**
 * Ejercicio 001: Operaciones aritméticas controladas
 * Nombre: Yaneht Arias
 */

function calcularPuntaje(participantes, bono, penalizacion) {
    // 1. Sumar todos los participantes
    const sumaTotal = participantes.reduce((acumulador, valor) => acumulador + valor, 0);

    // 2. Aplicar reglas: sumar bono y restar penalización
    const puntajeFinal = sumaTotal + bono - penalizacion;

    // 3. Definir clasificación (Regla lógica)
    // Ejemplo: si el puntaje es mayor a 20, es competitivo
    let clasificacion = puntajeFinal > 20 ? "competitivo" : "en desarrollo";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron los participantes (${sumaTotal}), se sumó el bono (${bono}) y se restó la penalización (${penalizacion}).`
    };
}

// --- CASOS DE PRUEBA ---

// Caso Normal (Ejemplo del enunciado)
const prueba1 = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log("Resultado Caso Normal:", prueba1);

// Caso Borde (Valores mínimos)
const prueba2 = calcularPuntaje([0, 0, 0], 0, 0);
console.log("Resultado Caso Borde:", prueba2);
