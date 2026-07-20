const equipos = [
    {
        nombre_equipo: "Rangers", 
        partidos: 4,
        ganados: 2,
        empatados: 1,
        perdidos: 1  
    },
    {
        nombre_equipo: "Flashes",
        partidos: 4,
        ganados: 1,
        empatados: 1,
        perdidos: 2
    },
    {
        nombre_equipo: "Titanes",
        partidos: 4,
        ganados: 3,
        empatados: 1,
        perdidos: 0
    },
    {
        nombre_equipo: "Halcones",
        partidos: 4,
        ganados: 2,
        empatados: 0,
        perdidos: 2
    },
    {
        nombre_equipo: "Leones",
        partidos: 4,
        ganados: 1,
        empatados: 2,
        perdidos: 1
    },
    {
        nombre_equipo: "Panteras",
        partidos: 4,
        ganados: 0,
        empatados: 1,
        perdidos: 3
    },
    {
        nombre_equipo: "Águilas",
        partidos: 4,
        ganados: 2,
        empatados: 1,
        perdidos: 1
    }
];

const CalcPuntos = ({ganados=0 , empatados=0})=>{
    const puntosVictoria = 3;
    const puntosEmpate = 2;

    const puntosTotal =(ganados * puntosVictoria) + (empatados * puntosEmpate)

    return puntosTotal
}

const resultados = (puntosTotal) => {
    if (puntosTotal >= 10) {
        return "Campeón";
    } else if (puntosTotal >= 7) {
        return "Subcampeón";
    } else {
        return "No clasificado / Eliminado";
    }
};

console.log("Resultados de los equipos:");
equipos.forEach((equipo) => {
    const puntosTotal = CalcPuntos(equipo); 
    const resultado = resultados(puntosTotal);
    console.log(`Equipo: ${equipo.nombre_equipo}, Puntos: ${puntosTotal}, Resultado: ${resultado}`);
}
);