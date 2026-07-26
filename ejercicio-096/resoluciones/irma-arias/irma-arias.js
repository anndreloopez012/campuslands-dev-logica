// irma-arias.js - Ejercicio 096: Animación 3D (Matrices simples)

// Función 1: Validar que la matriz de entrada (cuadrícula de fotograma/vértices) no esté vacía
function validarMatrizAnimacion(matriz) {
    if (!matriz || !Array.isArray(matriz) || matriz.length === 0) {
        return false;
    }
    for (let i = 0; i < matriz.length; i++) {
        if (!Array.isArray(matriz[i]) || matriz[i].length === 0) {
            return false;
        }
    }
    return true;
}

// Función 2: Recorrer la matriz mediante ciclos y aplicar reglas analíticas sobre los valores de los vértices
function procesarMatrizVertices(matriz) {
    let totalElementos = 0;
    let sumaValores = 0;
    let valorMaximo = -Infinity;
    let valorMinimo = Infinity;

    for (let fila = 0; fila < matriz.length; fila++) {
        for (let col = 0; col < matriz[fila].length; col++) {
            const actual = matriz[fila][col];
            totalElementos++;
            sumaValores += actual;
            if (actual > valorMaximo) {
                valorMaximo = actual;
            }
            if (actual < valorMinimo) {
                valorMinimo = actual;
            }
        }
    }

    const promedioValores = sumaValores / totalElementos;

    return {
        filas: matriz.length,
        columnas: matriz[0].length,
        totalVerticesEvaluados: totalElementos,
        promedioCoordenadaZ: Number(promedioValores.toFixed(2)),
        limiteMaximoZ: valorMaximo,
        limiteMinimoZ: valorMinimo
    };
}

// Función principal que coordina el flujo de análisis de matrices en animación 3D
function procesarMatricesAnimacion3D(matriz) {
    if (!validarMatrizAnimacion(matriz)) {
        return {
            estado: "Error",
            mensaje: "La matriz de coordenadas 3D está vacía o presenta una estructura irregular no válida."
        };
    }

    const metricasMatriz = procesarMatrizVertices(matriz);

    return {
        accion: "Matrices simples - Auditoría de fotograma de animación 3D",
        estadoAuditoria: "Aprobado",
        ...metricasMatriz
    };
}

// --- Casos de prueba ---
const matrizNormal = [
    [12.5, 14.0, 11.2],
    [15.8, 19.4, 13.1],
    [10.1, 16.5, 18.2]
];

const matrizBorde = []; // Caso borde: Matriz vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarMatricesAnimacion3D(matrizNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarMatricesAnimacion3D(matrizBorde), null, 2));