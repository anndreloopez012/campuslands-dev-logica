const equiposKickboxing =[
    {id:1, equipo: "Los lunaticos", punteo: 10 },
    {id:2, equipo: "Las estrellas", punteo: 30},
    {id:3, equipo: "Las maravillas", punteo: 43},
    {id:4, equipo: "Los campeones", punteo: 30}
];

function organizacionDeKickboxing(equipos){
    if(!equipos || equipos.length === 0){
        console.log ("No se puede organizar nada")
        return;
    }

    let punteoGeneral =0;

    for (let i = 0; i < equipos.length; i++ ){
        punteoGenera += equipos[i].punteo
    };
const organizacionDelistas= [...equipos].sort((a,b)=>{
    return a.equipo.localeCampare(b.equip)
})
    console.log("Punteo general de los equipos: ", punteoGeneral+ "pts")
    console.log("Lista ordena alfabeticamente: ", organizacionDelistas)
};

organizacionDeKickboxing(equiposKickboxing);