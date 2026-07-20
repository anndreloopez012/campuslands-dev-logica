const saltosDeParacaidismo = [
    {
        id:1,
        participante:"Carlos",
        altura:4200,
        viento:18,
        equipo:"aprobado",
        avion:{x:10,y:20},
        aterrizaje:{x:30,y:45}
    },
    {
        id:2,
        participante:"Ana",
        altura:3800,
        viento:28,
        equipo:"aprobado",
        avion:{x:5,y:10},
        aterrizaje:{x:20,y:18}
    },
    {
        id:3,
        participante:"Luis",
        altura:4500,
        viento:35,
        equipo:"revisión",
        avion:{x:12,y:8},
        aterrizaje:{x:18,y:40}
    },
    {
        id:4,
        participante:"Sofía",
        altura:4000,
        viento:20,
        equipo:"aprobado",
        avion:{x:7,y:15},
        aterrizaje:{x:15,y:25}
    }
];

function calcularDistancia(saltos){

    if(!saltos || saltos.length === 0){
        console.log("No hay registros para calcular la distancia.");
        return;
    }

    let saltosSeguros = 0;

    for(let i = 0; i < saltos.length; i++){

        let diferenciaX = saltos[i].aterrizaje.x - saltos[i].avion.x;
        let diferenciaY = saltos[i].aterrizaje.y - saltos[i].avion.y;

        let distancia = Math.sqrt(
            Math.pow(diferenciaX,2) +
            Math.pow(diferenciaY,2)
        );
        console.log("Participante: " + saltos[i].participante);
        console.log("Distancia: " + distancia.toFixed(2) + " km");

        if(
            distancia <= 30 &&
            saltos[i].equipo.toLowerCase() === "aprobado"
        ){

            console.log("Ruta segura.");
            saltosSeguros++;

        }else if(distancia <= 40){

            console.log("Ruta con precaución.");

        }else{

            console.log("Ruta no recomendada.");

        }

    }
    console.log("Saltos seguros: " + saltosSeguros);

}

calcularDistancia(saltosDeParacaidismo);