const normalizarPuntajes = (puntajes, max, ajuste) => {
    return puntajes.map(p => {
        let final = ((p / max) * 100) + ajuste;
        final = Math.max(0, Math.min(100, final));

        let clasificacion = "Reprobado";
        if (final >= 90) clasificacion = "Certificado";
        else if (final >= 70) clasificacion = "Aprobado";

        return { original: p, final: final.toFixed(2), clasificacion };
    });
};

const pruebas = [80, 45, 95];
console.log(normalizarPuntajes(pruebas, 100, 5));