
/**
 * Diagnóstico de fotograma 3D (Matriz)
 * @param {Array<Array<number>>} grid - Matriz de estados
 */
function diagnosticarFotograma(grid) {
    if (!grid || grid.length === 0) return { estado: "Error", motivo: "Matriz vacía" };

    let totalObjetos = 0;

    // Recorremos la matriz (matriz de 2x2, 3x3, etc.)
    for (let fila of grid) {
        for (let celda of fila) {
            if (celda === "error") return { estado: "Corrupto", motivo: "Se detectó un error en el render" };
            totalObjetos += celda;
        }
    }

    if (totalObjetos === 0) return { estado: "Vacío", motivo: "No hay objetos en el espacio 3D" };

    return {
        estado: "Renderizable",
        densidad: totalObjetos,
        motivo: `El fotograma contiene ${totalObjetos} objetos.`
    };
}

// --- PRUEBAS ---
const escena1 = [[0, 1], [1, 0]]; // Escena normal
const escena2 = [[0, 0], [0, 0]]; // Vacío
const escena3 = [[1, "error"], [0, 1]]; // Caso borde (corrupto)

console.log("Escena 1:", diagnosticarFotograma(escena1));
console.log("Escena 2:", diagnosticarFotograma(escena2));
console.log("Escena 3:", diagnosticarFotograma(escena3));