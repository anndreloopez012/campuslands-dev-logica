
/**
 * Ejercicio 023: Toma de decisiones - Torneo de Esports
 * Estudiante: Irma Arias
 */

function evaluarDesempeno(puntuacion) {
    // 1. Identificar entradas: puntuacion
    
    // 2. Aplicar reglas de negocio
    let resultado = "";
    let motivo = "";

    if (puntuacion < 50) {
        resultado = "Eliminado";
        motivo = "Puntuación insuficiente para continuar en el torneo.";
    } else if (puntuacion >= 50 && puntuacion < 80) {
        resultado = "Amateur";
        motivo = "Has clasificado en la categoría Amateur.";
    } else {
        resultado = "Profesional";
        motivo = "Felicidades, has clasificado a la liga Profesional.";
    }

    // 3. Salida entregable
    return {
        accion: resultado,
        motivo: motivo
    };
}

// 4. Pruebas
const pruebaNormal = evaluarDesempeno(85);
console.log("Resultado 85 pts:", pruebaNormal);

const pruebaBorde = evaluarDesempeno(45);
console.log("Resultado 45 pts:", pruebaBorde);