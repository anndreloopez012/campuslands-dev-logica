/**
 * Ejercicio 079: Lógica matemática - Validaciones numéricas (Fórmulas químicas)
 * Alumna: Yaneh Arias
 */

function validarCantidadesAtomicas(cantidades) {
    if (!cantidades || cantidades.length === 0) {
        return {
            es_valido: false,
            explicacion: "La lista de cantidades atómicas está vacía."
        };
    }

    for (let i = 0; i < cantidades.length; i++) {
        let valor = cantidades[i];
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
            return {
                es_valido: false,
                explicacion: "Se encontró un valor inválido: las cantidades de átomos deben ser números positivos mayores a cero."
            };
        }
    }

    return {
        es_valido: true,
        explicacion: "Todas las cantidades atómicas de la fórmula química son válidas y mayores a cero."
    };
}

// Casos de prueba
const pruebaNormal = validarCantidadesAtomicas([2, 1, 4]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = validarCantidadesAtomicas([2, 0, 3]);
console.log("Prueba Borde:", pruebaBorde);
