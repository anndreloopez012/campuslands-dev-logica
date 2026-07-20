// Ejercicio 049 - Modulos y divisibilidad

const REGLAS_CLASIFICACION = [
  { criterio: (duracion) => duracion % 15 === 0, categoria: 'maraton-completa' },
  { criterio: (duracion) => duracion % 3 === 0, categoria: 'sesion-doble' },
  { criterio: (duracion) => duracion % 5 === 0, categoria: 'funcion-especial' },
  { criterio: () => true, categoria: 'funcion-regular' },
];

function clasificarDuracion(duracion) {
  const regla = REGLAS_CLASIFICACION.find(({ criterio }) => criterio(duracion));
  return regla.categoria;
}

function clasificarMaratonPeliculas(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return { peliculas: [], resumen: {} };
  }

  const resumen = {};
  const clasificadas = peliculas.map(({ titulo, duracion }) => {
    const categoria = clasificarDuracion(duracion);
    resumen[categoria] = (resumen[categoria] || 0) + 1;
    return { titulo, duracion, categoria };
  });

  return { peliculas: clasificadas, resumen };
}

module.exports = { clasificarMaratonPeliculas };

// Pruebas manuales

const casoNormal = [
  { titulo: 'La Noche del Espejo', duracion: 90 },
  { titulo: 'Sombras en el Atico', duracion: 78 },
  { titulo: 'El Ultimo Grito', duracion: 80 },
  { titulo: 'Cabaña Sangrienta', duracion: 77 },
];
console.log('Caso normal:', JSON.stringify(clasificarMaratonPeliculas(casoNormal), null, 2));

const casoBorde = [];
console.log('Caso borde:', JSON.stringify(clasificarMaratonPeliculas(casoBorde), null, 2));