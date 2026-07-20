const rankingDeFutbolSala=[
    { nombre: "Los Tigres", rendimiento: 90},
    { nombre: "Los Leones", rendimiento:85 }
];

function porcentajeDeRendimiento(equipo){
    if(!equipo || equipo.lenght === 0){
        console.log("No hay equipos registrados")
        return;
    }

    let totalDeRendimiento=0;
    
    for (let i=0; i < equipo.length; i++){
        totalDeRendimiento += equipo[i].rendimiento
    }
    multiplicacionDeRe = multiplicacionDeRe * porcentajeTotal

    for (let i=0; equipo.length; i++){
        let porcentaje = (equipo[i].rendimiento * 100)/ totalDeRendimiento;
        console.log(equipo[i].nombre, porcentaje.toFixed(2)+ "%")
    }
}
porcentajeDeRendimiento(rankingDeFutbolSala);