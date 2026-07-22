// Ejercicio 048 - Logica general 048 - flujos paso a paso
// Autor: Stefani Sánchez

/**
 * Evalúa un flujo de trabajo de producción de películas de ciencia ficción paso a paso.
 * @param {Array<string>} items - Lista de estados de las escenas/tareas.
 * @param {string} prioridad - Nivel de prioridad ("alta", "media", "baja").
 * @param {string} regla - Regla de procesamiento aplicada.
 * @returns {Object} Resultado con acción y motivo.
 */
const procesarFlujoPeliculas = (items, prioridad = "alta", regla = "revisar bloqueados primero") => {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin accion",
      motivo: "la lista de tareas de la pelicula esta vacia o es invalida."
    };
  }

  const tieneBloqueados = items.includes("bloqueado");

  if (regla === "revisar bloqueados primero" && tieneBloqueados) {
    return {
      accion: "revisar bloqueado",
      motivo: "la regla prioriza riesgos antes de tareas normales."
    };
  }

  const pendiente = items.find(item => item === "pendiente");
  if (pendiente) {
    return {
      accion: "revisar pendiente",
      motivo: "no hay elementos bloqueados; se atiende la siguiente tarea pendiente."
    };
  }

  return {
    accion: "finalizar flujo",
    motivo: "todas las tareas de produccion han sido aprobadas."
  };
};

// Casos de prueba
console.log("Caso Normal:");
console.log(procesarFlujoPeliculas(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\nCaso Borde:");
console.log(procesarFlujoPeliculas([], "baja", "revisar bloqueados primero"));
