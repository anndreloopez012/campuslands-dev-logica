function validarAbordaje(tienePasaporte, mesesVigencia, tieneVisa) {
    // Regla 1: Si no tiene pasaporte, no puede viajar
    if (tienePasaporte === false) {
        return "No puede viajar: Falta pasaporte.";
    }

    // Regla 2: Si el pasaporte tiene menos de 6 meses de vigencia, no puede viajar
    if (mesesVigencia < 6) {
        return "No puede viajar: Pasaporte próximo a vencer.";
    }

    // Regla 3: Si viaja a destino internacional, necesita visa
    if (tieneVisa === false) {
        return "No puede viajar: Falta visa.";
    }

    // Regla 4: Si cumple todo, puede viajar
    return "Abordaje aprobado.";
}

// Pruebas
console.log("Caso Normal:", validarAbordaje(true, 10, true)); // Debe aprobar
console.log("Caso Borde:", validarAbordaje(true, 3, true));   // Debe rechazar por vigencia