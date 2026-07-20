const animacion3D = [
    [2, 4, 6],
    [4, 6, 8],
    [6, 8, 10],
    [8, 10, 12],
    [10, 12, 14]
];

function reproducirAnimacion(matriz) {
    let sumaPosiciones = 0;

    console.log("=== Animación 3D ===");

    for (let i = 0; i < matriz.length; i++) {

        console.log(`Fotograma ${i + 1}`);

        for (let j = 0; j < matriz[i].length; j++) {

            if (matriz[i][j] >= 0) {
                console.log(`Posición ${j + 1}: ${matriz[i][j]}`);
                sumaPosiciones += matriz[i][j];
            } else {
                console.log("Valor inválido");
            }

        }

        console.log("----------------");
    }

    return sumaPosiciones;
}

const total = reproducirAnimacion(animacion3D);

console.log("Suma total de posiciones:", total);