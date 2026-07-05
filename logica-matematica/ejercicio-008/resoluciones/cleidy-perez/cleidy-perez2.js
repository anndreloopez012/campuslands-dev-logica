function calcularPatronPuntuacion(peliculas) {


    if (!peliculas || peliculas.length === 0) {
        return [];
    }


    const BONO_DURACION = 10;
    const PENALIZACION_ANTIGUEDAD = 5;
    const resultados = [];


    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        let puntajeFinal = pelicula.puntosBase;
        const esLarga = pelicula.duracionMinutos > 120;
        if (esLarga) {
            puntajeFinal = puntajeFinal + BONO_DURACION;
        }
        const esVieja = pelicula.anioLanzamiento < 2000;
        if (esVieja) {
            puntajeFinal = puntajeFinal - PENALIZACION_ANTIGUEDAD;
        }


        let rango = "Estándar";
        if (puntajeFinal >= 90) {
            rango = "Obra Maestra";
        }


        resultados.push({
            titulo: pelicula.titulo,
            puntajeFinal: puntajeFinal,
            clasificacion: rango
        });
    }
    return resultados;
}


const catalogoSciFi = [
    { titulo: "Interstellar", puntosBase: 85, duracionMinutos: 169, anioLanzamiento: 2014 },
    { titulo: "Blade Runner", puntosBase: 90, duracionMinutos: 117, anioLanzamiento: 1982 }  
];


console.log("--- Caso Normal (Calcular Puntos) ---");
console.log(calcularPatronPuntuacion(catalogoSciFi));


console.log("\n--- Caso Borde (Lista Vacía) ---");
console.log(calcularPatronPuntuacion([]));
