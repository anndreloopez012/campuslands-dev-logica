// Ejercicio 041 - Operaciones aritméticas controladas

// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Función principal
function calcularPuntaje(participantes, bono, penalizacion) {

    // Validación
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return {
            error: "La lista de participantes está vacía."
        };
    }

    // Acumulador
    let suma = 0;

    // Ciclo
    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i] < 0) {
            return {
                error: "No se permiten valores negativos."
            };
        }
        suma += participantes[i];
    }

    // Promedio
    const promedio = suma / participantes.length;

    // Operación controlada
    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    // Clasificación
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
        explicacion: "Se calculó el promedio de participantes, se sumó el bono y se restó la penalización."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(calcularPuntaje(participantes, bono, penalizacion));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(calcularPuntaje([], bono, penalizacion));