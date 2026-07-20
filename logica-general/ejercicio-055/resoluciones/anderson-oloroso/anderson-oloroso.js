function evaluarIlustraciones(ilustraciones) {
    const resultados = [];

    for (let i = 0; i < ilustraciones.length; i++) {
        const ilustracion = ilustraciones[i];
        let estado;

        if (ilustracion.capas < 1) {
            estado = "Rechazada";
        } else if (ilustracion.resolucion < 1080) {
            estado = "Requiere mejoras";
        } else {
            estado = "Aprobada";
        }

        resultados.push({
            titulo: ilustracion.titulo,
            estado: estado
        });
    }

    return resultados;
}

// Ejemplo
const ilustraciones = [
    { titulo: "Paisaje", capas: 5, resolucion: 1920 },
    { titulo: "Retrato", capas: 3, resolucion: 720 },
    { titulo: "Boceto", capas: 0, resolucion: 1080 }
];

console.log(evaluarIlustraciones(ilustraciones));