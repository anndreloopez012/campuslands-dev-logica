// irma-arias.js - Ejercicio 051: Kickboxing (Conteo combinatorio simple)

// Función auxiliar para calcular el factorial de un número (necesario para combinatoria)
function calcularFactorial(n) {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Función 1: Validar que las entradas de conteo combinatorio sean correctas
function validarDatosCombinatoria(totalTecnicasDisponibles, tecnicasASeleccionar) {
    if (
        typeof totalTecnicasDisponibles !== 'number' || 
        typeof tecnicasASeleccionar !== 'number' ||
        totalTecnicasDisponibles <= 0 ||
        tecnicasASeleccionar <= 0 ||
        tecnicasASeleccionar > totalTecnicasDisponibles
    ) {
        return false;
    }
    return true;
}

// Función 2: Calcular el número de combinaciones posibles sin repetición: C(n, k) = n! / (k! * (n - k)!)
function calcularCombinacionesKickboxing(totalTecnicasDisponibles, tecnicasASeleccionar) {
    if (!validarDatosCombinatoria(totalTecnicasDisponibles, tecnicasASeleccionar)) {
        return {
            estado: "Error",
            mensaje: "Datos de entrada inválidos. Verifica que k <= n y que los valores sean mayores a cero."
        };
    }

    const nFactorial = calcularFactorial(totalTecnicasDisponibles);
    const kFactorial = calcularFactorial(tecnicasASeleccionar);
    const nkFactorial = calcularFactorial(totalTecnicasDisponibles - tecnicasASeleccionar);

    const totalCombinaciones = nFactorial / (kFactorial * nkFactorial);

    return {
        estado: "Exitoso",
        totalTecnicas: totalTecnicasDisponibles,
        seleccionadasPorAsalto: tecnicasASeleccionar,
        combinacionesPosibles: totalCombinaciones,
        explicacion: `Se aplicó la fórmula de conteo combinatorio simple C(n,k) para determinar las secuencias de entrenamiento en el ring.`
    };
}

// --- Casos de prueba ---
// Caso Normal: 6 técnicas de kickboxing disponibles (ej. Jab, Directo, Crochet, Low Kick, Front Kick, Roundhouse) seleccionando rondas de 3
const pruebaNormal = calcularCombinacionesKickboxing(6, 3);

// Caso Borde: Seleccionar más técnicas de las disponibles o valores límite
const pruebaBorde = calcularCombinacionesKickboxing(4, 5); 

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(pruebaNormal, null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(pruebaBorde, null, 2));