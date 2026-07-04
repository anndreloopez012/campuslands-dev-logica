const jugadorEntrada = { participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 };
const jugadorSinParticipante = { participantes: [], bono: 5, penalizacion: 0 };
const jugadorDeAltoRendimiento = { participantes: [35, 40, 42], bono: 10, penalizacion: 5 };

const calcularPuntajeFinal = ({ participantes, bono, penalizacion } = {}) => {
    const len = participantes?.length;
    if (!len) return { puntaje_final: 0, clasificacion: "descalificado",  explicacion: "Error: no se encuentran ningun particpante registrado" };

    const promedio = participantes.reduce((acc, p) => acc + p, 0) / len;
    const puntajeFinal = Math.round(promedio + bono - penalizacion);
    
    return {
        puntaje_final: puntajeFinal,
        clasificacion: puntajeFinal >= 25 ? "competitivo" : puntajeFinal >= 15 ? "Promedio" : "amateur",
        explicacion: `Se calculó el promedio base (${promedio.toFixed(1)}), se sumó el bono (+${bono}) y se restó la penalización (-${penalizacion}).`
    };
};

console.log(calcularPuntajeFinal(jugadorEntrada));
console.log(calcularPuntajeFinal(jugadorSinParticipante));
console.log(calcularPuntajeFinal(jugadorDeAltoRendimiento));