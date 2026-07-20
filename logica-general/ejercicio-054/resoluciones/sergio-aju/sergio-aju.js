function diagnosticarSesion(sesion) {
    if (!sesion.agujas_esteriles || !sesion.area_limpia) {
        return { proceder: false, diagnostico: "Riesgo sanitario" };
    }
    if (sesion.cliente_menor && !sesion.consentimiento_firmado) {
        return { proceder: false, diagnostico: "Falta de autorización legal" };
    }
    return { proceder: true, diagnostico: "Sesión lista" };
}