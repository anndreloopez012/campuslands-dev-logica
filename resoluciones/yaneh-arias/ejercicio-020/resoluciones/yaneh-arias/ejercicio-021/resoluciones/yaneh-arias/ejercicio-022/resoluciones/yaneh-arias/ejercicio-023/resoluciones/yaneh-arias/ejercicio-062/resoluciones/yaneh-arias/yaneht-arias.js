/**
 * Ejercicio 062: Lógica matemática - Porcentajes y proporciones (Fútbol Sala)
 * Alumna: Irma Yaneht Arias García
 */

function calcularRankingFutsal(puntajesBase, porcentajeMejora, penalizacionPorFalta) {
    // Validar si el arreglo está vacío para evitar errores comunes
    if (!puntajesBase || puntajesBase.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "no válido",
            explicacion: "El arreglo de puntajes está vacío."
        };
    }

    // 1. Calcular el promedio base de los puntajes
    let suma = 0;
    for (let i = 0; i < puntajesBase.length; i++) {
        suma += puntajesBase.Item ? puntajesBase[i] : puntajesBase[i];
    }
    let promedioBase = suma / puntajesBase.length;

    // 2. Aplicar el porcentaje de proporción/mejora
    let aumentoProporcional = promedioBase * (porcentajeMejora / 100);
    let puntajeCalculado = promedioBase + aumentoProporcional - penalizacionPorFalta;

    // Redondear el resultado final
    let puntajeFinal = Math.round(puntajeCalculado);

    // 3. Definir la clasificación según el puntaje final
    let clasificacion = "";
    if (puntajeFinal > 25) {
        clasificacion = "elite";
    } else if (puntajeFinal >= 15) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio base, se aplicó el porcentaje de mejora, se restó la penalización y se clasificó según el rango."
    };
}

// --- CASO DE PRUEBA 1 (Normal) ---
const pruebaNormal = calcularRankingFutsal([20, 25, 30, 35], 10, 2);
console.log("Resultado Prueba Normal:", pruebaNormal);

// --- CASO DE PRUEBA 2 (Caso borde: puntajes bajos y penalización alta) ---
const pruebaBorde = calcularRankingFutsal([5, 8, 10], 5, 4);
console.log("Resultado Prueba Borde:", pruebaBorde);