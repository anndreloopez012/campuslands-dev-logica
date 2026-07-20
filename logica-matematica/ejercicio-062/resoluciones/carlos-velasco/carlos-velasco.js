const calcularEfectividad = (equipo) => {
    const totalJugados = equipo.ganados + equipo.empatados + equipo.perdidos;
    if (totalJugados === 0) return { efectividad: 0, clasificacion: "Sin datos" };

    const puntosObtenidos = (equipo.ganados * 3) + (equipo.empatados * 1);
    const puntosPosibles = totalJugados * 3;
    const efectividad = (puntosObtenidos / puntosPosibles) * 100;

    let clasificacion = "En desarrollo";
    if (efectividad >= 80) clasificacion = "Élite";
    else if (efectividad >= 50) clasificacion = "Competitivo";

    return {
        efectividad_porcentual: efectividad.toFixed(2) + "%",
        clasificacion: clasificacion,
        explicacion: `Equipo ${equipo.nombre} obtuvo ${puntosObtenidos} de ${puntosPosibles} puntos posibles.`
    };
};

// Pruebas
console.log(calcularEfectividad({ nombre: "Dragones", ganados: 2, empatados: 1, perdidos: 0 }));
console.log(calcularEfectividad({ nombre: "Novatos", ganados: 0, empatados: 0, perdidos: 3 }));