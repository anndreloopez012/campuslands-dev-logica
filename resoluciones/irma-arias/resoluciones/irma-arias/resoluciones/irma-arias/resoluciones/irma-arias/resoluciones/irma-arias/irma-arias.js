
/**
 * Ejercicio 010: Lectura de instrucciones - Viajes y turismo
 * Autor: Irma Yaneht Arias García
 */

const paqueteViaje = { destino: "Guatemala", presupuesto: 500, costo: 600, cupos: 0 };

function validarPaquete(paquete) {
    // Reglas de negocio
    if (paquete.cupos <= 0) {
        return "Estado: No disponible (sin cupos).";
    }
    if (paquete.costo > paquete.presupuesto) {
        return "Estado: Excede presupuesto.";
    }
    return `Estado: Paquete reservado con éxito para ${paquete.destino}.`;
}

console.log(validarPaquete(paqueteViaje));