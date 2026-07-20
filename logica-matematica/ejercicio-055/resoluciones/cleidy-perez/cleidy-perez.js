const misDibujosDigitales = [
    {
        id:1,
        nombreDelDibujo:"Paisaje de la playa",
        ancho:1920,
        alto:1080,
        cantidadDeCapas:5,
        paraDondeEs:"Pantalla",
        tipoDeArchivo:"Imagen normal",
        velocidad:80,
        tiempo:2
    },
    {
        id:2,
        nombreDelDibujo:"Logotipo para negocio",
        ancho:500,
        alto:500,
        cantidadDeCapas:1,
        paraDondeEs:"Imprimir en papel",
        tipoDeArchivo:"Editable de diseño",
        velocidad:60,
        tiempo:3
    },
    {
        id:3,
        nombreDelDibujo:"Boceto de mi gato",
        ancho:0,
        alto:800,
        cantidadDeCapas:2,
        paraDondeEs:"Pantalla",
        tipoDeArchivo:"Imagen normal",
        velocidad:70,
        tiempo:1
    },
    {
        id:4,
        nombreDelDibujo:"Retrato familiar",
        ancho:2000,
        alto:2000,
        cantidadDeCapas:200,
        paraDondeEs:"Pantalla",
        tipoDeArchivo:"Imagen normal",
        velocidad:90,
        tiempo:4
    },
    {
        id:5,
        nombreDelDibujo:"Anuncio de internet",
        ancho:800,
        alto:600,
        cantidadDeCapas:3,
        paraDondeEs:"Imprimir en papel",
        tipoDeArchivo:"Imagen de WhatsApp/Web",
        velocidad:50,
        tiempo:2
    }
];

function calcularDistancia(dibujos){

    if(!dibujos || dibujos.length === 0){
        console.log("No hay dibujos registrados.");
        return;
    }

    let entregasCompletas = 0;

    for(let i = 0; i < dibujos.length; i++){

        let distancia = dibujos[i].velocidad * dibujos[i].tiempo;

        console.log("-----------------------");
        console.log("Dibujo: " + dibujos[i].nombreDelDibujo);
        console.log("Distancia: " + distancia + " km");

        if(distancia >= 150){
            console.log("Entrega completada.");
            entregasCompletas++;
        }else{
            console.log("Entrega pendiente.");
        }

    }

    console.log("-----------------------");
    console.log("Total de entregas completadas: " + entregasCompletas);
}

calcularDistancia(misDibujosDigitales);