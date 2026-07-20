const validarPosicion = (matriz, pos) => {
    if (pos.fila < 0 || pos.fila >= matriz.length || pos.columna < 0 || pos.columna >= matriz[0].length) {
        return { accion: "Error", motivo: "Posición fuera de los límites del entorno 3D." };
    }

    if (matriz[pos.fila][pos.columna] === 1) {
        return { accion: "Bloqueado", motivo: "La celda ya está ocupada por otro objeto." };
    }

    return { accion: "Permitido", motivo: "Posición libre, objeto colocado con éxito." };
};

const entorno = [
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 0]
];

console.log(validarPosicion(entorno, { fila: 1, columna: 1 })); 
console.log(validarPosicion(entorno, { fila: 0, columna: 0 })); 