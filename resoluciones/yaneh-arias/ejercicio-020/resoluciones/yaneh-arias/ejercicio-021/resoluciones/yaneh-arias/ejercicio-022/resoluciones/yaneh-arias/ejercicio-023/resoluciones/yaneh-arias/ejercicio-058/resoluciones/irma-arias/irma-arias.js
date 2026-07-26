// irma-arias.js - Ejercicio 058: Soldadura (Normalización de puntajes)

// Función 1: Validar que la lista de puntajes brutos sea un arreglo numérico válido
function validarPuntajesBrutos(listaPuntajes) {
    if (!Array.isArray(listaPuntajes) || listaPuntajes.length === 0) {
        return false;
    }
    for (let puntaje of listaPuntajes) {
        if (typeof puntaje !== 'number' || isNaN(puntaje)) {
            return false;
        }
    }
    return true;
}

// Funktion 2: Normalizar puntajes utilizando la escala Min-Max (Valor - Min) / (Max - Min)
function normalizarPuntajesSoldadura(datosPrueba) {
    const { nombrePrueba, puntajesBrutos } = datosPrueba;

    if (!validarPuntajesBrutos(puntajesBrutos)) {
        return {
            estado: "Error",
            mensaje: "Lista de puntajes brutos inválida. Debe ser un arreglo numérico no vacío."
        };
    }

    const valorMinimo = Math.min(...puntajesBrutos);
    const valorMaximo = Math.max(...puntajesBrutos);

    // Caso borde: Si todos los puntajes son iguales, la normalización evita división por cero
    let puntajesNormalizados = [];
    if (valorMaximo === valorMinimo) {
        puntajesNormalizados = puntajesBrutos.map(() => 1.0);
    } else {
        puntajesNormalizados = puntajesBrutos.map(puntaje => {
            const normalizado = (puntaje - valorMinimo) / (valorMaximo - valorMinimo);
            return Number(normalizado.toFixed(4));
        });
    }

    // Clasificación de calidad de las probetas de soldadura según el puntaje normalizado
    const resultadosConClasificacion = puntajesBrutos.map((bruto, index) => {
        const norm = puntajesNormalizados[index];
        let calificacion = "No apto";
        if (norm >= 0.8) {
            calificacion = "Alta calidad estructural (Aprobado para alta presión)";
        } else if (norm >= 0.4) {
            calificacion = "Calidad aceptable (Uso industrial general)";
        } else {
            calificacion = "Deficiente (Requiere reproceso o pulido)";
        }

        return {
            probetaId: index + 1,
            puntajeBruto: bruto,
            puntajeNormalizado: norm,
            evaluacion: calificacion
        };
    });

    return {
        estado: "Exitoso",
        nombrePruebaCalidad: nombrePrueba,
        estadisticasOriginales: {
            minimo: valorMinimo,
            maximo: valorMaximo
        },
        probetasEvaluadas: resultadosConClasificacion,
        explicacion: `Se aplicó la fórmula de normalización Min-Max para transformar los puntajes de resistencia en soldadura a una escala estándar de 0 a 1.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Pruebas de resistencia a la tracción en probetas de soldadura (en Megapascales - MPa)
const pruebaNormal = {
    nombrePrueba: "Ensayo de Tracción de Juntas Metálicas",
    puntajesBrutos: [420, 480, 390, 510, 450]
};

// Caso Borde: Probetas con exactamente el mismo puntaje bruto para comprobar control de división por cero
const pruebaBorde = {
    nombrePrueba: "Ensayo Límite Uniforme",
    puntajesBrutos: [450, 450, 450]
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(normalizarPuntajesSoldadura(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(normalizarPuntajesSoldadura(pruebaBorde), null, 2));