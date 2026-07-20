const saltosDeParacaidismo = [
    {id:1, participante:"Carlos", altura:4200, viento:18, equipo:"aprobado"},
    {id:2, participante:"Ana", altura:3800, viento:28, equipo:"aprobado"},
    {id:3, participante:"Luis", altura:4500, viento:35, equipo:"revisión"},
    {id:4, participante:"Sofía", altura:4000, viento:20, equipo:"aprobado"}
];

function evaluarSaltos(saltos){

    if(!saltos || saltos.length === 0){
        console.log("No hay saltos para evaluar.");
        return;
    }

    let saltosSeguros = 0;

    for(let i = 0; i < saltos.length; i++){

        let indiceSeguridad = saltos[i].altura - (saltos[i].viento * 50);
        console.log("Participante: " + saltos[i].participante);
        console.log("Índice de seguridad: " + indiceSeguridad);

        if(
            saltos[i].equipo.toLowerCase() === "aprobado" &&
            saltos[i].viento <= 20 &&
            indiceSeguridad >= 3000
        ){
            console.log("Salto seguro.");
            saltosSeguros++;

        }else if(
            saltos[i].equipo.toLowerCase() === "aprobado" &&
            saltos[i].viento <= 30
        ){
            console.log("Requiere revisión.");

        }else{
            console.log("No debe realizar el salto.");
        }

    }
    console.log("Total de saltos seguros: " + saltosSeguros);
}

evaluarSaltos(saltosDeParacaidismo);