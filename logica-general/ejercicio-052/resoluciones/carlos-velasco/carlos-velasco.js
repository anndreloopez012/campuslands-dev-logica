const recomendarPaleta = (paletas, estilo) => {
    if (paletas.length === 0) return { recomendada: null, razon: "No hay paletas disponibles." };

    const mejorPaleta = paletas.reduce((mejor, actual) => {
        const metrica = estilo === "defensivo" ? "control" : "velocidad";
        
        if (actual[metrica] > mejor[metrica]) return actual;
        if (actual[metrica] === mejor[metrica]) {
            return actual.peso < mejor.peso ? actual : mejor;
        }
        return mejor;
    });

    return {
        recomendada: mejorPaleta.modelo,
        razon: `Seleccionada por tener el mejor ${estilo === "defensivo" ? "control" : "velocidad"} y peso óptimo.`
    };
};

const catalogo = [
    { modelo: "ProControl", control: 95, velocidad: 70, peso: 160 },
    { modelo: "SpeedMaster", control: 70, velocidad: 98, peso: 180 },
    { modelo: "LightAttack", control: 75, velocidad: 98, peso: 150 }
];

console.log(recomendarPaleta(catalogo, "ofensivo"));