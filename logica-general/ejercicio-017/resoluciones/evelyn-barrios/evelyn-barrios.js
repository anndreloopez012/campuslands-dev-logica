/**
 * EJERCICIO 17: CÁLCULO DE ÁREA DE UN POLÍGONO
 *
 * Implementa la Fórmula de la Lazada (Shoelace formula) para calcular el área
 * de un polígono simple a partir de las coordenadas de sus vértices.
 *
 * @param {Array<Object>} vertices - Un arreglo de objetos con las coordenadas {x, y} de los vértices del polígono.
 * @returns {number|null} El área calculada del polígono, o null si la entrada no es válida.
 */
function calcularAreaPoligono(vertices) {
  // Para formar un polígono, necesitamos al menos 3 vértices.
  // También validamos que la entrada sea un arreglo.
  if (!Array.isArray(vertices) || vertices.length < 3) {
    return null; // Retornamos null para indicar un cálculo no válido.
  }

  let sumaProductosCruzados = 0;
  const numeroDeVertices = vertices.length;

  // Aplicamos la fórmula de la lazada.
  // Iteramos sobre cada vértice para calcular los productos cruzados.
  for (let i = 0; i < numeroDeVertices; i++) {
    const verticeActual = vertices[i];
    // El operador módulo (%) asegura que el último vértice se conecte con el primero.
    const verticeSiguiente = vertices[(i + 1) % numeroDeVertices];

    // (x₁ * y₂) - (y₁ * x₂)
    sumaProductosCruzados += (verticeActual.x * verticeSiguiente.y) - (verticeSiguiente.x * verticeActual.y);
  }

  // El área es la mitad del valor absoluto de la suma total.
  const areaFinal = Math.abs(sumaProductosCruzados) / 2;

  return areaFinal;
}

// --- BLOQUE DE PRUEBAS ---
// Para verificar que la solución es correcta, ejecutamos algunas pruebas.

console.log("--- Iniciando Pruebas del Ejercicio 17 ---");

// Prueba 1: Un cuadrado simple de 10x10. El área debe ser 100.
const verticesCuadrado = [
  { x: 0, y: 0 },
  { x: 10, y: 0 },
  { x: 10, y: 10 },
  { x: 0, y: 10 },
];
const areaCuadrado = calcularAreaPoligono(verticesCuadrado);
console.log(`Prueba 1 (Cuadrado): Área calculada = ${areaCuadrado}. Esperado: 100.`);

// Prueba 2: Un polígono irregular. El área esperada es 22.
const verticesIrregular = [
  { x: 1, y: 5 },
  { x: 3, y: 1 },
  { x: 7, y: 2 },
  { x: 5, y: 9 },
];
const areaIrregular = calcularAreaPoligono(verticesIrregular);
console.log(`Prueba 2 (Polígono Irregular): Área calculada = ${areaIrregular}. Esperado: 22.`);

// Prueba 3: Un caso inválido con solo dos vértices.
const verticesLinea = [{ x: 0, y: 0 }, { x: 5, y: 5 }];
const areaInvalida = calcularAreaPoligono(verticesLinea);
console.log(`Prueba 3 (Datos Inválidos): Resultado = ${areaInvalida}. Esperado: null.`);

console.log("--- Pruebas Finalizadas ---");