
/**
 * Sistema de decisión para arquitectura 3D
 * @param {Array} objetos - Lista de objetos { id, distancia, poligonos }
 */
function procesarArquitectura(objetos) {
    // Regla 1: Ordenar por prioridad (Ranking)
    // En caso de empate en distancia, mayor poligonos gana
    objetos.sort((a, b) => a.distancia - b.distancia || b.poligonos - a.poligonos);

    return objetos.map(obj => {
        // Regla 2: Aplicación paso a paso
        let accion = "";

        if (obj.distancia < 5) {
            accion = "Alta resolución (LOD 0)";
        } else if (obj.distancia < 20) {
            accion = "Resolución media (LOD 1)";
        } else {
            accion = "Baja resolución (LOD 2)";
        }

        return { id: obj.id, accion: accion };
    });
}

// --- PRUEBAS ---
const escena = [
    { id: "ventana", distancia: 10, poligonos: 500 },
    { id: "puerta", distancia: 10, poligonos: 800 }, // Empate en distancia con ventana
    { id: "muro", distancia: 2, poligonos: 100 }
];

console.log("Resultado del procesamiento:", procesarArquitectura(escena));