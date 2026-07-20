const pelicula = {
    titulo: "Galaxia Infinita",
    clasificacion: "A",
    disponible: true,
    subtitulos: true
};

let resultado = "";
let motivo = "";

// Paso 1: Verificar disponibilidad
if (!pelicula.disponible) {
    resultado = "Reproducción cancelada";
    motivo = "La película no está disponible.";
} else {
    // Paso 2: Verificar clasificación
    if (pelicula.clasificacion !== "A") {
        resultado = "Acceso restringido";
        motivo = "La clasificación requiere una validación adicional.";
    } else {
        // Paso 3: Verificar subtítulos
        if (pelicula.subtitulos) {
            resultado = "Iniciar reproducción";
            motivo = "La película está disponible y cuenta con subtítulos.";
        } else {
            resultado = "Iniciar reproducción";
            motivo = "La película está disponible, pero no tiene subtítulos.";
        }
    }
}

console.log("resultado:", resultado);
console.log("motivo:", motivo);