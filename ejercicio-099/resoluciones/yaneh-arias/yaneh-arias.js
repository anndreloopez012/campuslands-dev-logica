/**
 * Ejercicio 099: Lógica matemática - Validaciones numéricas (Fórmulas químicas)
 * Alumna: Yaneh Arias
 */

function validarSubindicesFormula(subindices) {
    if (!subindices || subindices.length === 0) {
        return {
            es_valido: false,
            explicacion: "La lista de subíndices de la fórmula química está vacía."
        };
    }

    let esValido = true;
    for (let i = 0; i < subindices.length; i++) {
        let valor = subindices[i];
        // Validar que cada subíndice sea un número entero positivo mayor a cero
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0 || !Number.isInteger(valor)) {
            esValido = false;
            break;
        }
    }

    return {
        es_valido: esValido,
        explicacion: esValido 
            ? "Todos los subíndices de la fórmula química cumplen con las reglas de validación numérica (enteros positivos)." 
            : "Se encontraron valores inválidos (negativos, decimales o no numéricos) en los subíndices de la fórmula química."
    };
}

// Casos de prueba
const pruebaNormal = validarSubindicesFormula([2, 1, 4]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = validarSubindicesFormula([2, -1, 3]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
