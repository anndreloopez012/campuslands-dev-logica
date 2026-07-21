
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

// Caso borde o inventado (ej: lista vacía o valores extremos)
const casoBorde = {
    participantes: [5, 10],
    bono: 2,
    penalizacion: 10
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeFinal(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    // Validar si la lista está vacía para evitar errores
    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y cálculo numérico usando ciclos
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Aplicar bono y penalización según las reglas del problema
    let puntajeFinal = sumaPuntajes + bono - penalizacion;

    // 4. Definir reglas de clasificación condicional
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "veterano estelar";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "novato espacial";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron los puntajes base (${sumaPuntajes}), se sumó el bono (${bono}) y se restó la penalización (${penalizacion}).`
    };
}

// 5. Ejecución y pruebas
console.log("--- RESULTADO CASO EJEMPLO ---");
const resultadoEjemplo = calcularPuntajeFinal(datosEjemplo);
console.log(resultadoEjemplo);

console.log("\n--- RESULTADO CASO BORDE ---");
const resultadoBorde = calcularPuntajeFinal(casoBorde);
console.log(resultadoBorde);