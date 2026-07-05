function procesarPeliculasSciFi(peliculas) {
    if (!peliculas || peliculas.length === 0) {
        return "Error: No hay películas para procesar en la lista.";
    }

    const listaPasos = [];

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];

        let clasificacionMensaje = "";
        if (pelicula.esParaMayores === true) {
            clasificacionMensaje = "Paso 1: Bloquear para menores de edad.";
        } else {
            clasificacionMensaje = "Paso 1: Permitir acceso libre.";
        }

        let recomendacionMensaje = "";
        if (pelicula.votosBuenos > 500) {
            recomendacionMensaje = "Paso 2: Poner en la página principal (Es un éxito).";
        } else {
            recomendacionMensaje = "Paso 2: Dejar en el catálogo normal.";
        }

        listaPasos.push({
            titulo: pelicula.titulo,
            pasoControl: clasificacionMensaje,
            pasoMarketing: recomendacionMensaje
        });
    }

    return listaPasos;
}

const misPeliculas = [
    { titulo: "Matrix", esParaMayores: true, votosBuenos: 900 },
    { titulo: "Wall-E", esParaMayores: false, votosBuenos: 1200 },
    { titulo: "Astroboy Viejo", esParaMayores: false, votosBuenos: 150 }
];

console.log("--- Caso Normal (Procesar Películas) ---");
console.log(procesarPeliculasSciFi(misPeliculas));

console.log("\n--- Caso Borde (Lista Vacía) ---");
console.log(procesarPeliculasSciFi([]));