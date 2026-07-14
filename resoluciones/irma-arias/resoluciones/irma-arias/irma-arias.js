
/**
 * Lógica General 035 - Gestión de Prioridades de Dibujo Digital
 * Autor: Irma Arias
 */

function procesarDibujos(tareas) {
    if (!tareas || tareas.length === 0) return "No hay tareas para procesar.";

    // Regla 1: Buscar bloqueados (Riesgo máximo)
    const bloqueado = tareas.find(t => t.estado === 'bloqueado');
    if (bloqueado) {
        return {
            accion: `Revisar: ${bloqueado.nombre}`,
            motivo: "La regla prioriza riesgos (bloqueados) antes de tareas normales."
        };
    }

    // Regla 2: Priorizar tareas de alta importancia
    const altaPrioridad = tareas.find(t => t.prioridad === 'alta' && t.estado !== 'aprobado');
    if (altaPrioridad) {
        return {
            accion: `Procesar: ${altaPrioridad.nombre}`,
            motivo: "Tarea de alta prioridad detectada."
        };
    }

    return { accion: "Sin acción urgente", motivo: "Todas las tareas están en curso o aprobadas." };
}

// Pruebas
const casoNormal = [{nombre: "Sketch", estado: "pendiente", prioridad: "media"}, {nombre: "Color", estado: "bloqueado", prioridad: "alta"}];
const casoBorde = [{nombre: "Finalizado", estado: "aprobado", prioridad: "baja"}];

console.log("Caso Normal:", procesarDibujos(casoNormal));
console.log("Caso Borde:", procesarDibujos(casoBorde));