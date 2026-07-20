const calcularPosiblesEnfrentamientos = (participantes) => {
    const n = participantes.length;
    if (n < 2) return { posibles: 0, explicacion: "Se requieren al menos 2 peleadores." };

    // Fórmula de combinaciones: n * (n - 1) / 2
    const combinaciones = (n * (n - 1)) / 2;

    return {
        participantes_totales: n,
        posibles_enfrentamientos: combinaciones,
        explicacion: `Con ${n} peleadores, cada uno puede enfrentarse contra todos los demás una sola vez.`
    };
};

console.log(calcularPosiblesEnfrentamientos(["A", "B", "C", "D"]));
console.log(calcularPosiblesEnfrentamientos(["A"]));