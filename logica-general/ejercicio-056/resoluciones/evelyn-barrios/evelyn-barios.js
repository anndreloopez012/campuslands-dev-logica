function escalarVertices(vertices, factor) {
  if (!vertices || vertices.length === 0 || typeof factor !== 'number') {
    return [];
  }
  return vertices.map(vertice => vertice.map(coordenada => coordenada * factor));
}

function calcularCentroide(vertices) {
  if (!vertices || vertices.length === 0) {
    return [0, 0, 0];
  }
  const numeroVertices = vertices.length;
  const sumaCoordenadas = vertices.reduce((acumulador, vertice) => {
    return [
      acumulador[0] + vertice[0],
      acumulador[1] + vertice[1],
      acumulador[2] + vertice[2]
    ];
  }, [0, 0, 0]);

  return [
    sumaCoordenadas[0] / numeroVertices,
    sumaCoordenadas[1] / numeroVertices,
    sumaCoordenadas[2] / numeroVertices
  ];
}

function procesarModelo3D(modelo) {
  const verticesEscalados = escalarVertices(modelo.vertices, modelo.escala);
  const centroideOriginal = calcularCentroide(modelo.vertices);
  const centroideEscalado = calcularCentroide(verticesEscalados);

  return {
    centroideOriginal: centroideOriginal.map(c => parseFloat(c.toFixed(2))),
    centroideEscalado: centroideEscalado.map(c => parseFloat(c.toFixed(2))),
    explicacion: `El modelo fue escalado por un factor de ${modelo.escala}. El centroide se movió de su posición original a una nueva posición calculada tras la transformación.`
  };
}

const modeloCubo = {
  vertices: [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]],
  escala: 2
};
console.log("--- Caso Normal: Cubo ---");
console.log(procesarModelo3D(modeloCubo));

const modeloPunto = {
  vertices: [[10, 20, 30]],
  escala: 0
};
console.log("\n--- Caso Borde: Un solo punto y escala cero ---");
console.log(procesarModelo3D(modeloPunto));