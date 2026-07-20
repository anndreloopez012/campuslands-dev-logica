const calcularMMR = (mmrBase, resultado, racha, desconexion) => {
    let ajuste = 0;

    if (desconexion) {
        ajuste = -50;
    } else if (resultado === "victoria") {
        ajuste = 20 + (racha * 5);
    } else {
        ajuste = (racha > 2) ? -5 : -15;
    }

    let nuevoMMR = Math.max(0, mmrBase + ajuste);
    
    let rango = "Bronce";
    if (nuevoMMR >= 2000) rango = "Oro";
    else if (nuevoMMR >= 1000) rango = "Plata";

    return {
        mmr_final: nuevoMMR,
        clasificacion: rango,
        explicacion: `Ajuste aplicado: ${ajuste}. ${desconexion ? 'Penalización por desconexión.' : ''}`
    };
};

// Pruebas
console.log(calcularMMR(1000, "victoria", 3, false)); // 1035, Plata
console.log(calcularMMR(100, "derrota", 0, true));    // 50, Bronce