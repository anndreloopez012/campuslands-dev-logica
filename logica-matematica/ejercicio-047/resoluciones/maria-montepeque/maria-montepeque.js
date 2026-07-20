// Ejercicio 047 - Secuencias numericas en una playlist musical

function analizarSecuenciaPlaylist(reproducciones) {
  if (!Array.isArray(reproducciones) || reproducciones.length === 0) {
    return {
      reproducciones: [],
      diferencias: [],
      esAritmetica: false,
      razonComun: null,
      siguienteValor: null,
      tendencia: "sin_datos",
      promedioReproducciones: 0,
    };
  }

  if (reproducciones.length === 1) {
    return {
      reproducciones,
      diferencias: [],
      esAritmetica: false,
      razonComun: null,
      siguienteValor: null,
      tendencia: "insuficiente",
      promedioReproducciones: reproducciones[0],
    };
  }

  const diferencias = reproducciones
    .slice(1)
    .map((valor, i) => valor - reproducciones[i]);

  const razonComun = diferencias[0];
  const esAritmetica = diferencias.every((delta) => delta === razonComun);
  const siguienteValor = esAritmetica
    ? reproducciones[reproducciones.length - 1] + razonComun
    : null;

  const sumaDiferencias = diferencias.reduce((acc, delta) => acc + delta, 0);
  const tendencia = determinarTendencia(diferencias, sumaDiferencias);

  const promedioReproducciones =
    reproducciones.reduce((acc, valor) => acc + valor, 0) / reproducciones.length;

  return {
    reproducciones,
    diferencias,
    esAritmetica,
    razonComun: esAritmetica ? razonComun : null,
    siguienteValor,
    tendencia,
    promedioReproducciones,
  };
}

function determinarTendencia(diferencias, sumaDiferencias) {
  const todasCero = diferencias.every((delta) => delta === 0);
  const todasPositivas = diferencias.every((delta) => delta > 0);
  const todasNegativas = diferencias.every((delta) => delta < 0);

  if (todasCero) return "estable";
  if (todasPositivas) return "creciente";
  if (todasNegativas) return "decreciente";
  return sumaDiferencias >= 0 ? "irregular_creciente" : "irregular_decreciente";
}

module.exports = { analizarSecuenciaPlaylist };

console.log("Caso normal - secuencia aritmetica creciente:");
console.log(analizarSecuenciaPlaylist([10, 20, 30, 40]));

console.log("Caso normal - secuencia irregular:");
console.log(analizarSecuenciaPlaylist([5, 12, 9, 20]));

console.log("Caso borde - lista vacia:");
console.log(analizarSecuenciaPlaylist([]));

console.log("Caso borde - un solo elemento:");
console.log(analizarSecuenciaPlaylist([42]));

console.log("Caso borde - secuencia estable:");
console.log(analizarSecuenciaPlaylist([15, 15, 15, 15]));