function validarRegistroEquipo(golesFavor, golesContra, faltas) {
    if (golesFavor < 0 || golesContra < 0) {
        return "Error: Los goles no pueden ser negativos.";
    }
    if (faltas > 20) {
        return "Error: Exceso de faltas, registro bajo revisión disciplinaria.";
    }
    if (golesFavor + golesContra > 50) {
        return "Error: Datos atípicos, verificar planilla de juego.";
    }
    return "Registro validado correctamente.";
}

const partidos = [
    [10, 2, 5],
    [-1, 0, 2],
    [15, 10, 25],
    [5, 5, 2]
];

for (let i = 0; i < partidos.length; i++) {
    let p = partidos[i];
    let estado = validarRegistroEquipo(p[0], p[1], p[2]);
    console.log(`Partido ${i + 1}: ${estado}`);
}