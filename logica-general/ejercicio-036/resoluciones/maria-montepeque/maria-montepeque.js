/**
 * Ejercicio 036 - logica-general
 * Tematica: escena de animacion 3D
 *
 * Recibe una lista de elementos de una escena (personajes, camara, fondo, etc.)
 * junto a su estado de renderizado, y determina cual elemento necesita
 * atencion inmediata segun una prioridad fija.
 */

// Mapa de prioridad numerica: mientras mas bajo el numero, mas urgente el estado.
const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  'en-proceso': 3,
  completado: 4,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueos, se atiende lo que aun no ha iniciado.',
  'en-proceso': 'no hay bloqueos ni pendientes, se revisa el avance actual.',
  completado: 'todos los elementos ya fueron renderizados.',
};

/**
 * @param {{ nombre: string, estado: string }[]} elementos
 * @returns {{ accion: string, objetivo: string|null, motivo: string }}
 */
function analizarEscena(elementos) {
  if (!Array.isArray(elementos) || elementos.length === 0) {
    return {
      accion: 'sin-elementos',
      objetivo: null,
      motivo: 'la escena no tiene elementos para analizar.',
    };
  }

  let elementoPrioritario = null;
  let prioridadMinima = Infinity;

  for (const elemento of elementos) {
    const prioridad = PRIORIDAD[elemento.estado];

    if (prioridad === undefined) {
      throw new Error(`Estado no reconocido: "${elemento.estado}"`);
    }

    if (prioridad < prioridadMinima) {
      prioridadMinima = prioridad;
      elementoPrioritario = elemento;
    }
  }

  return {
    accion: `revisar ${elementoPrioritario.estado}`,
    objetivo: elementoPrioritario.nombre,
    motivo: MOTIVOS[elementoPrioritario.estado],
  };
}

module.exports = { analizarEscena };

// ---------------------------------------------------------------------------
// Pruebas manuales
// ---------------------------------------------------------------------------

function ejecutarPruebas() {
  // Caso normal: hay un elemento bloqueado entre varios estados.
  const casoNormal = analizarEscena([
    { nombre: 'personaje-principal', estado: 'pendiente' },
    { nombre: 'fondo', estado: 'bloqueado' },
    { nombre: 'camara', estado: 'en-proceso' },
  ]);
  console.log('Caso normal:', casoNormal);
  console.assert(
    casoNormal.accion === 'revisar bloqueado' && casoNormal.objetivo === 'fondo',
    'FALLO: caso normal deberia priorizar el elemento bloqueado'
  );

  // Caso borde: lista vacia, no hay elementos que analizar.
  const casoVacio = analizarEscena([]);
  console.log('Caso borde (vacio):', casoVacio);
  console.assert(
    casoVacio.accion === 'sin-elementos',
    'FALLO: lista vacia deberia devolver accion "sin-elementos"'
  );

  // Caso borde: todos los elementos ya estan completados.
  const casoCompleto = analizarEscena([
    { nombre: 'luces', estado: 'completado' },
    { nombre: 'texturas', estado: 'completado' },
  ]);
  console.log('Caso borde (todo completado):', casoCompleto);
  console.assert(
    casoCompleto.accion === 'revisar completado',
    'FALLO: si todo esta completado se debe revisar ese estado'
  );
}

ejecutarPruebas();