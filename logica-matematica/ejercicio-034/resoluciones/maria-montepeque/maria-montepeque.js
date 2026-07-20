// Ejercicio 034 - Areas y perimetros

'use strict';

const TARIFAS_BASE = {
  circulo: 50,
  cuadrado: 40,
  rectangulo: 45,
  triangulo: 35,
};

const COSTO_POR_AREA = 2.5;

const RANGOS_TAMANIO = [
  { maximo: 50, categoria: 'pequeno' },
  { maximo: 150, categoria: 'mediano' },
  { maximo: Infinity, categoria: 'grande' },
];

function calcularAreaYPerimetro(figura) {
  switch (figura.tipo) {
    case 'circulo': {
      const { radio } = figura;
      return {
        area: Math.PI * radio ** 2,
        perimetro: 2 * Math.PI * radio,
      };
    }
    case 'cuadrado': {
      const { lado } = figura;
      return {
        area: lado ** 2,
        perimetro: lado * 4,
      };
    }
    case 'rectangulo': {
      const { base, altura } = figura;
      return {
        area: base * altura,
        perimetro: 2 * (base + altura),
      };
    }
    case 'triangulo': {
      const { base, altura, lado } = figura;
      return {
        area: (base * altura) / 2,
        perimetro: lado * 3,
      };
    }
    default:
      return null;
  }
}

function clasificarPorArea(area) {
  return RANGOS_TAMANIO.find((rango) => area <= rango.maximo).categoria;
}

function calcularDisenosTatuajes(disenos) {
  if (!Array.isArray(disenos) || disenos.length === 0) {
    return {
      disenos: [],
      totalCotizado: 0,
      mensaje: 'No hay disenos para procesar.',
    };
  }

  const resultados = [];
  let totalCotizado = 0;

  for (const figura of disenos) {
    const calculo = calcularAreaYPerimetro(figura);

    if (!calculo) {
      resultados.push({
        tipo: figura.tipo ?? 'desconocido',
        error: 'Figura no soportada.',
      });
      continue;
    }

    const area = Number(calculo.area.toFixed(2));
    const perimetro = Number(calculo.perimetro.toFixed(2));
    const categoria = clasificarPorArea(area);
    const precio = Number(
      (TARIFAS_BASE[figura.tipo] + area * COSTO_POR_AREA).toFixed(2)
    );

    totalCotizado += precio;

    resultados.push({ tipo: figura.tipo, area, perimetro, categoria, precio });
  }

  return {
    disenos: resultados,
    totalCotizado: Number(totalCotizado.toFixed(2)),
    mensaje: `Se procesaron ${resultados.length} diseno(s).`,
  };
}

module.exports = { calcularDisenosTatuajes };

console.log('Caso normal:');
console.log(
  JSON.stringify(
    calcularDisenosTatuajes([
      { tipo: 'circulo', radio: 5 },
      { tipo: 'rectangulo', base: 10, altura: 4 },
      { tipo: 'triangulo', base: 6, altura: 4, lado: 5 },
    ]),
    null,
    2
  )
);

console.log('\nCaso borde (lista vacia):');
console.log(JSON.stringify(calcularDisenosTatuajes([]), null, 2));

console.log('\nCaso figura no soportada:');
console.log(
  JSON.stringify(
    calcularDisenosTatuajes([
      { tipo: 'rombo', diagonalMayor: 8, diagonalMenor: 4 },
    ]),
    null,
    2
  )
);