// Ejercicio 042 - Porcentajes y proporciones

// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

function calcularResultado(participantes, bono, penalizacion) {

    if (!Array.isArray(participantes) || participantes.length === 0) {
        return {
            error: "La lista de participantes está vacía."
        };
    }

    let suma = 0;

    for (let i = 0; i < participantes.length; i++) {

        if (participantes[i] < 0) {
            return {
                error: "No se permiten valores negativos."
            };
        }

        suma += participantes[i];
    }

    const promedio = suma / participantes.length;

    // Porcentaje de bono y penalización
    const aumento = promedio * (bono / 100);
    const descuento = promedio * (penalizacion / 100);

    const puntajeFinal = Math.round(promedio + aumento - descuento);

    let clasificacion;

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
        explicacion: "Se aplicó el porcentaje de bono y se descontó el porcentaje de penalización sobre el promedio."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(calcularResultado(participantes, bono, penalizacion));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(calcularResultado([], bono, penalizacion));