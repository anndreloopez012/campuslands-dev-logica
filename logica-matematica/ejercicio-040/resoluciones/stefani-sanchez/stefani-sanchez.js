// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Función para calcular el puntaje
function calcularResultado(participantes, bono, penalizacion) {

    if (!Array.isArray(participantes) || participantes.length === 0) {
        return {
            error: "La lista de participantes está vacía."
        };
    }

    // Promedio de participantes
    let suma = 0;

    for (let i = 0; i < participantes.length; i++) {
        suma += participantes[i];
    }

    const promedio = suma / participantes.length;

    // Fórmula
    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    let clasificacion = "";

    if (puntajeFinal >= 30) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 20) {
        clasificacion = "intermedio";
    } else {
        clasificacion = "basico";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion,
        explicacion: "Se calculó el promedio, se sumó el bono y se restó la penalización."
    };
}

// Prueba 1
console.log("=== Prueba normal ===");
console.log(calcularResultado(participantes, bono, penalizacion));

// Prueba 2 (Caso borde)
console.log("\n=== Caso borde ===");
console.log(calcularResultado([], bono, penalizacion));