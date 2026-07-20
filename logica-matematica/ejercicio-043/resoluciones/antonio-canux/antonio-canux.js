// Ejercicio 043 - Torneo de Esports

function analizarRendimientoEsports(puntuaciones) {
    if (!Array.isArray(puntuaciones) || puntuaciones.length === 0) {
        return { error: "El registro de puntuaciones no puede estar vacío." };
    }

    const suma = puntuaciones.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntuaciones.length;

    const puntuacionesOrdenadas = [...puntuaciones].sort((a, b) => a - b);
    const mitad = Math.floor(puntuacionesOrdenadas.length / 2);
    
    let mediana;
    if (puntuacionesOrdenadas.length % 2 === 0) {
        mediana = (puntuacionesOrdenadas[mitad - 1] + puntuacionesOrdenadas[mitad]) / 2;
    } else {
        mediana = puntuacionesOrdenadas[mitad];
    }

    const perfil = mediana >= promedio ? "Consistente" : "Irregular";

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        mediana: parseFloat(mediana.toFixed(2)),
        perfil_jugador: perfil
    };
}

// Pruebas

console.log("--- Caso Normal (Jugador Consistente) ---");
console.log(analizarRendimientoEsports([28, 30, 29, 32, 10]));

console.log("\n--- Caso Borde (Jugador Irregular con racha impar) ---");
console.log(analizarRendimientoEsports([5, 40, 8, 35, 12, 10, 42]));