const inventarioTatuajes = [
    {id:1, estilo:"Realismo", zona:"Brazo", ancho:15, alto:20, estado:"Terminado"},
    {id:2, estilo:"Tradicional", zona:"Espalda", ancho:5, alto:30, estado:"En proceso"},
    {id:3, estilo:"Minimalista", zona:"Muñeca", ancho:2, alto:2, estado:"Terminado"},
    {id:4, estilo:"Artístico", zona:"Cuello", ancho:8, alto:0, estado:"Cancelado"}
];

function calcularAreaPerimetro(tatuajes){

    if(!tatuajes || tatuajes.length === 0){
        console.log("No hay tatuajes registrados.");
        return;
    }

    let tatuajesValidos = 0;

    for(let i = 0; i < tatuajes.length; i++){

        console.log("Estilo: " + tatuajes[i].estilo);

        if(tatuajes[i].ancho <= 0 || tatuajes[i].alto <= 0){
            console.log("Medidas inválidas.");
            continue;
        }

        let area = tatuajes[i].ancho * tatuajes[i].alto;
        let perimetro = 2 * (tatuajes[i].ancho + tatuajes[i].alto);

        console.log("Área: " + area + " cm²");
        console.log("Perímetro: " + perimetro + " cm");

        if(tatuajes[i].estado.toLowerCase() === "terminado" && area >= 50){

            console.log("Tatuaje finalizado correctamente.");
            tatuajesValidos++;

        }else if(tatuajes[i].estado.toLowerCase() === "en proceso"){

            console.log("El tatuaje continúa en elaboración.");

        }else{

            console.log("El tatuaje fue cancelado o no cumple los requisitos.");

        }

    }
    console.log("Total de tatuajes terminados: " + tatuajesValidos);

}

calcularAreaPerimetro(inventarioTatuajes);