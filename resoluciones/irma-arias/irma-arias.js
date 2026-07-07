
/**
 * Ejercicio 013: Paracaidismo - Resolución de casos
 * Estudiante: Irma Yaneht Arias García
 * 
 * Reglas de negocio:
 * 1. Viento > 20 km/h: Salto cancelado (Riesgo alto).
 * 2. Altitud < 3000 m: Salto cancelado (Altitud insuficiente).
 * 3. Resto de casos: Salto autorizado.
 */

function evaluarSalto(altitud, velocidadViento) {
    if (velocidadViento > 20) {
        return {
            accion: "cancelado",
            motivo: "Viento demasiado fuerte (supera los 20 km/h)."
        };
    }
    if (altitud < 3000) {
        return {
            accion: "cancelado",
            motivo: "Altitud insuficiente (debe ser mayor a 3000m)."
        };
    }
    return {
        accion: "autorizado",
        motivo: "Condiciones atmosféricas óptimas."
    };
}

// --- Casos de Prueba ---

// Caso Normal (Autorizado)
console.log("Caso Normal:", evaluarSalto(4000, 15));

// Caso Borde (Cancelado por viento)
console.log("Caso Viento:", evaluarSalto(4000, 25));

// Caso Borde (Cancelado por altitud)
console.log("Caso Altitud:", evaluarSalto(2500, 10));