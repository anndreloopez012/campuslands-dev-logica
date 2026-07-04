/**
 * Lógica para ranking de fútbol sala
 * Autor: Irma Arias
 */

const equipos = [
    { nombre: "Leones", puntos: 6, golesFavor: 5, golesContra: 2 },
    { nombre: "Tigres", puntos: 6, golesFavor: 8, golesContra: 1 },
    { nombre: "Águilas", puntos: 3, golesFavor: 2, golesContra: 4 }
];

function obtenerRanking(listaEquipos) {
    // Usamos sort para ordenar. 
    // Si puntos son iguales, usamos la diferencia de goles.
    return [...listaEquipos].sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        }
        const difA = a.golesFavor - a.golesContra;
        const difB = b.golesFavor - b.golesContra;
        return difB - difA;
    });
}

const resultado = obtenerRanking(equipos);
console.table(resultado);