const calcularPuntos = (pg, pe) => (pg * 3) + pe;

const calcularDiferenciaGoles = (gf, gc) => gf - gc;

const validarEquipo = (equipo) => {
    if (!equipo.nombre || typeof equipo.nombre !== 'string') return false;
    if (equipo.pj !== (equipo.pg + equipo.pe + equipo.pp)) return false;
    if (equipo.gf < 0 || equipo.gc < 0) return false;
    return true;
};

const procesarRanking = (equipos) => {
    const equiposValidos = equipos.filter(validarEquipo);

    const ranking = equiposValidos.map(equipo => ({
        nombre: equipo.nombre,
        puntos: calcularPuntos(equipo.pg, equipo.pe),
        difGoles: calcularDiferenciaGoles(equipo.gf, equipo.gc)
    }));

    return ranking.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        }
        return b.difGoles - a.difGoles;
    });
};

const torneoDatos = [
    { nombre: "Alpha FC", pj: 3, pg: 2, pe: 1, pp: 0, gf: 8, gc: 3 },
    { nombre: "Beta Futsal", pj: 3, pg: 2, pe: 1, pp: 0, gf: 6, gc: 2 },
    { nombre: "Gamma Team", pj: 3, pg: 1, pe: 0, pp: 2, gf: 4, gc: 5 },
    { nombre: "Error FC", pj: 3, pg: 5, pe: 0, pp: 0, gf: 2, gc: 1 } 
];

const rankingFinal = procesarRanking(torneoDatos);
console.log(rankingFinal);
