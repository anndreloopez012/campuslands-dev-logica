const jugadorEntrada = { participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 };
const jugadorSinParticipante = { participantes: [], bono: 5, penalizacion: 0 };
const jugadorDeAltoRendimiento = { participantes: [35, 40, 42], bono: 10, penalizacion: 5 };

const calcularPuntajeFinal = ({ participantes: p = [], bono: b, penalizacion: pen } = {}) => {
    if (!p.length) return { puntaje_final: 0, clasificacion: "descalificado", explicacion: "Error: no se encuentran ningun particpante registrado" };

    const prom = p.reduce((acc, x) => acc + x, 0) / p.length;
    const total = Math.round(prom + b - pen);

    return {
        puntaje_final: total,
        clasificacion: total >= 25 ? "competitivo" : total >= 15 ? "Promedio" : "amateur",
        explicacion: `Se calculó el promedio base (${prom.toFixed(1)}), se sumó el bono (+${b}) y se restó la penalización (-${pen}).`
    };
};

console.log(calcularPuntajeFinal(jugadorEntrada));
console.log(calcularPuntajeFinal(jugadorSinParticipante));
console.log(calcularPuntajeFinal(jugadorDeAltoRendimiento));