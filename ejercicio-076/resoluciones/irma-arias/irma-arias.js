// Función 1: Validar que la matriz de entrada sea válida y no esté vacía
function validarMatriz(matriz) {
    if (!matriz || !Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
        return false;
    }
    return true;
}

// Función 2: Analizar y contar elementos dentro de la matriz según una condición (ej: píxeles corruptos o con errores de render)
function analizarMatrizRender(matriz) {
    let totalCeldas = 0;
    let celdasConError = 0;
    let coordenadasErrores = [];

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let col = 0; col < matriz[fila].length; col++) {
            totalCeldas++;
            // Suponemos que un valor de 0 o negativo representa un error de renderizado en la celda 3D
            if (matriz[fila][col] <= 0) {
                celdasConError++;
                coordenadasErrores.push({ fila, columna: col, valor: matriz[fila][col] });
            }
        }
    }

    return {
        totalCeldas,
        celdasConError,
        coordenadasErrores
    };
}

// Función principal que coordina el análisis de la matriz de animación
function procesarMatrizAnimacion3D(matrizGrid) {
    if (!validarMatriz(matrizGrid)) {
        return {
            estado: "Error",
            mensaje: "La matriz ingresada no es válida o se encuentra vacía."
        };
    }

    const resultadoAnalisis = analizarMatrizRender(matrizGrid);

    if (resultadoAnalisis.celdasConError > 0) {
        return {
            estadoRender: "Con advertencias",
            mensaje: "Se detectaron fallos en la matriz de la escena 3D.",
            ...resultadoAnalisis
        };
    }

    return {
        estadoRender: "Óptimo",
        mensaje: "La matriz de renderizado no presenta errores.",
        totalCeldas: resultadoAnalisis.totalCeldas,
        celdasConError: 0
    };
}

// --- Casos de prueba ---
const matrizNormal = [
    [100, 255, 120],
    [50, 0, 90],    // El 0 representa un error de render
    [200, 150, 255]
];

const matrizBorde = []; // Caso borde: Matriz vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarMatrizAnimacion3D(matrizNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarMatrizAnimacion3D(matrizBorde), null, 2));