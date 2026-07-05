function verificarSecuenciaPlaylist(canciones) {
    // 1. Identificar entradas y usar condicionales para validar datos vacíos
    if (!canciones || canciones.length === 0) {
        return "Error: La playlist no tiene canciones.";
    }


    const reporte = [];
    for (let i = 0; i < canciones.length; i++) {
        const cancionActual = canciones[i];
       
        const ordenEsperado = i + 1;
       
        const tieneErrorSecuencia = cancionActual.numeroOrden !== ordenEsperado;


        let estado = "Correcto";
        let accion = "Ninguna";


        if (tieneErrorSecuencia) {
            estado = "Inconsistente";
            accion = `Cambiar el número ${cancionActual.numeroOrden} por el número ${ordenEsperado}`;
        }


        reporte.push({
            titulo: cancionActual.titulo,
            numeroActual: cancionActual.numeroOrden,
            numeroCorrecto: ordenEsperado,
            estado: estado,
            accionRecomendada: accion
        });
    }
    return reporte;
}


// === PROBAR CASOS ===
const listaMusica = [
    { titulo: "Blinding Lights", numeroOrden: 1 },
    { titulo: "Starboy", numeroOrden: 3 },
    { titulo: "One Dance", numeroOrden: 3 }
];


console.log("--- Caso Normal ---");
console.log(verificarSecuenciaPlaylist(listaMusica));


console.log("\n--- Caso Borde ---");
console.log(verificarSecuenciaPlaylist([]));
