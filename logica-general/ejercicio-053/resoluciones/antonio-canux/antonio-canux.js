// Ejercicio de Lógica 053 - Temática Paracaidismo

function evaluarSaltoParacaidas(viento, altitud, equipoOk) {
    const LIMITE_VIENTO_KMH = 30;
    const ALTITUD_MINIMA_METROS = 1200;

    if (!equipoOk) {
        return {
            accion: "abortar",
            motivo: "El equipo no pasó la revisión técnica obligatoria. Salto cancelado por seguridad."
        };
    }

    if (viento > LIMITE_VIENTO_KMH) {
        return {
            accion: "abortar",
            motivo: `El viento actual (${viento} km/h) supera el límite seguro de ${LIMITE_VIENTO_KMH} km/h.`
        };
    }

    if (altitud < ALTITUD_MINIMA_METROS) {
        return {
            accion: "abortar",
            motivo: `La altitud actual (${altitud}m) es inferior a la mínima permitida de ${ALTITUD_MINIMA_METROS}m.`
        };
    }

    return {
        accion: "saltar",
        motivo: "Todas las condiciones (viento, altitud y equipo) están en rangos óptimos y seguros."
    };
}

// Pruebas
console.log("--- Ejecutando Caso Normal ---");
const resultadoNormal = evaluarSaltoParacaidas(20, 1500, true);
console.log(resultadoNormal);

// 2. CASO BORDE:
console.log("\n--- Ejecutando Caso Borde (Límites inclusivos) ---");
const resultadoBorde = evaluarSaltoParacaidas(30, 1199, true);
console.log(resultadoBorde);