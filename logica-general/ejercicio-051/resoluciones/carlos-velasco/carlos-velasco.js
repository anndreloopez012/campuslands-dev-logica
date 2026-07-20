const organizarCartelera = (peleadores) => {
    const niveles = ["Principiante", "Intermedio", "Profesional"];
    let cartelera = {};

    niveles.forEach(nivel => {
        const grupo = peleadores.filter(p => p.nivel === nivel)
                                .sort((a, b) => a.peso - b.peso);
        
        if (grupo.length > 0) {
            cartelera[nivel] = grupo;
        }
    });

    return cartelera;
};

const listaPeleadores = [
    { nombre: "Juan", peso: 70, nivel: "Intermedio" },
    { nombre: "Pedro", peso: 65, nivel: "Principiante" },
    { nombre: "Luis", peso: 80, nivel: "Intermedio" },
    { nombre: "Ana", peso: 60, nivel: "Principiante" }
];

console.log(JSON.stringify(organizarCartelera(listaPeleadores), null, 2));