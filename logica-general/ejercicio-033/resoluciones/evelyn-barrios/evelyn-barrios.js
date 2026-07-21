function analizarCalificaciones(calificaciones, notaAprobatoria) {
  if (!calificaciones || calificaciones.length === 0) {
    return null;
  }

  let sumaTotal = 0;
  let maxima = calificaciones[0];
  let minima = calificaciones[0];
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < calificaciones.length; i++) {
    const calificacionActual = calificaciones[i];
    sumaTotal += calificacionActual;

    if (calificacionActual > maxima) {
      maxima = calificacionActual;
    }
    if (calificacionActual < minima) {
      minima = calificacionActual;
    }

    if (calificacionActual >= notaAprobatoria) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  const promedio = sumaTotal / calificaciones.length;

  return { promedio, maxima, minima, aprobados, reprobados };
}

module.exports = analizarCalificaciones;