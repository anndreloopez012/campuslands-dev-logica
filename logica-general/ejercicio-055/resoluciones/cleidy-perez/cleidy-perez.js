const misDibujosDigitales = [
    {id:1, nombreDelDibujo:"Paisaje de la playa", ancho:1920, alto:1080, cantidadDeCapas:5, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:2, nombreDelDibujo:"Logotipo para negocio", ancho:500, alto:500, cantidadDeCapas:1, paraDondeEs:"Imprimir en papel", tipoDeArchivo:"Editable de diseño"},
    {id:3, nombreDelDibujo:"Boceto de mi gato", ancho:0, alto:800, cantidadDeCapas:2, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:4, nombreDelDibujo:"Retrato familiar", ancho:2000, alto:2000, cantidadDeCapas:200, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:5, nombreDelDibujo:"Anuncio de internet", ancho:800, alto:600, cantidadDeCapas:3, paraDondeEs:"Imprimir en papel", tipoDeArchivo:"Imagen de WhatsApp/Web"}
];

function validarDibujos(dibujos){

    if(!dibujos || dibujos.length === 0){
        console.log("No hay dibujos registrados.");
        return;
    }

    let dibujosAprobados = 0;

    for(let i = 0; i < dibujos.length; i++){

        console.log("----------------------------");
        console.log("Dibujo: " + dibujos[i].nombreDelDibujo);

        if(dibujos[i].ancho <= 0 || dibujos[i].alto <= 0){
            console.log("Dimensiones inválidas.");
            continue;
        }

        let resolucion = dibujos[i].ancho * dibujos[i].alto;

        console.log("Resolución: " + resolucion + " píxeles");

        if(
            dibujos[i].paraDondeEs === "Pantalla" &&
            resolucion >= 1000000 &&
            dibujos[i].cantidadDeCapas <= 50
        ){

            console.log("Aprobado para pantalla.");
            dibujosAprobados++;

        }else if(
            dibujos[i].paraDondeEs === "Imprimir en papel" &&
            dibujos[i].tipoDeArchivo === "Editable de diseño"
        ){

            console.log("Aprobado para impresión.");
            dibujosAprobados++;

        }else{

            console.log("No cumple las reglas del negocio.");

        }

    }

    console.log("----------------------------");
    console.log("Total de dibujos aprobados: " + dibujosAprobados);

}

validarDibujos(misDibujosDigitales);