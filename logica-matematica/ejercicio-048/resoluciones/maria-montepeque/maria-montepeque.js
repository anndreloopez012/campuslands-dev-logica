// Ejercicio 048 - Patrones de puntuacion

const UMBRALES = [
  { minimo: 8, categoria: 'sobresaliente' },
  { minimo: 5, categoria: 'aceptable' },
  { minimo: 0, categoria: 'deficiente' },
];

const ORDEN_CATEGORIAS = ['sobresaliente', 'aceptable', 'deficiente'];

const CLASIFICACIONES = {
  sobresaliente: 'coleccion destacada',
  aceptable: 'coleccion equilibrada',
  deficiente: 'coleccion floja',
};

const obtenerCategoria = (calificacion) =>
  UMBRALES.find((umbral) => calificacion >= umbral.minimo).categoria;

const analizarPatronPuntuacion = (peliculas) => {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      total: 0,
      promedio: 0,
      conteo: { sobresaliente: 0, aceptable: 0, deficiente: 0 },
      patronDominante: null,
      clasificacion: 'sin datos',
      detalle: [],
    };
  }

  const detalle = peliculas.map(({ titulo, calificacion }) => ({
    titulo,
    calificacion,
    categoria: obtenerCategoria(calificacion),
  }));

  const conteo = { sobresaliente: 0, aceptable: 0, deficiente: 0 };
  let sumaCalificaciones = 0;

  detalle.forEach(({ calificacion, categoria }) => {
    conteo[categoria] += 1;
    sumaCalificaciones += calificacion;
  });

  const total = peliculas.length;
  const promedio = Number((sumaCalificaciones / total).toFixed(2));

  const patronDominante = ORDEN_CATEGORIAS.reduce((mejor, categoria) =>
    conteo[categoria] > conteo[mejor] ? categoria : mejor,
  ORDEN_CATEGORIAS[0]);

  const clasificacion = CLASIFICACIONES[patronDominante];

  return { total, promedio, conteo, patronDominante, clasificacion, detalle };
};

module.exports = { analizarPatronPuntuacion };

const casoNormal = [
  { titulo: 'Interestelar', calificacion: 9 },
  { titulo: 'Dune', calificacion: 8.5 },
  { titulo: 'Prometheus', calificacion: 6 },
  { titulo: 'Waterworld', calificacion: 3 },
];

const casoBorde = [];

console.log('Caso normal:', JSON.stringify(analizarPatronPuntuacion(casoNormal), null, 2));
console.log('Caso borde:', JSON.stringify(analizarPatronPuntuacion(casoBorde), null, 2));