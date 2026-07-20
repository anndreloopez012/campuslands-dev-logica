const compararPaletas = (opcionA, opcionB) => {
    const calcularScore = (paleta) => (paleta.velocidad + paleta.control) / 2;

    const scoreA = calcularScore(opcionA);
    const scoreB = calcularScore(opcionB);

    if (scoreA > scoreB) {
        return { mejor: opcionA.modelo, motivo: "Superioridad en balance velocidad-control." };
    } else if (scoreB > scoreA) {
        return { mejor: opcionB.modelo, motivo: "Superioridad en balance velocidad-control." };
    } else {
        return { mejor: "Empate", motivo: "Ambas paletas ofrecen el mismo rendimiento." };
    }
};

const paleta1 = { modelo: "Pro-Spin", velocidad: 8, control: 7 };
const paleta2 = { modelo: "Speed-Master", velocidad: 9, control: 5 };

console.log(compararPaletas(paleta1, paleta2));
console.log(compararPaletas(paleta1, { modelo: "Igual", velocidad: 7.5, control: 7.5 }));