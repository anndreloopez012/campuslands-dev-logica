// Ejercicio de Lógica 057 - Temática Arquitectura 3D

function configurarIluminacion(entorno, momentoDia) {
    const tipoEntorno = entorno.toLowerCase();
    const tipoMomento = momentoDia.toLowerCase();

    const claveDecision = `${tipoEntorno}_${tipoMomento}`;

    const tablaDecisiones = {
        "interior_dia": {
            lucesArtificiales: false,
            rebotesLuz: 4,
            perfil: "Luz natural optimizada por ventanas"
        },
        "interior_noche": {
            lucesArtificiales: true,
            rebotesLuz: 2,
            perfil: "Iluminación focal artificial"
        },
        "exterior_dia": {
            lucesArtificiales: false,
            rebotesLuz: 6,
            perfil: "Iluminación global HDRI"
        },
        "exterior_noche": {
            lucesArtificiales: true,
            rebotesLuz: 1,
            perfil: "Mapeo de entorno nocturno"
        }
    };

    const configuracion = tablaDecisiones[claveDecision];

    if (!configuracion) {
        return {
            estado: "error",
            mensaje: `La combinación '${entorno}' y '${momentoDia}' no existe en la tabla de decisiones.`,
            parametros: null
        };
    }

    return {
        estado: "configurado",
        mensaje: `Configuración aplicada exitosamente para el perfil: ${configuracion.perfil}.`,
        parametros: {
            lucesArtificiales: configuracion.lucesArtificiales,
            rebotesLuz: configuracion.rebotesLuz
        }
    };
}

// Pruebas

console.log("--- Ejecutando Caso Normal ---");
const resultadoNormal = configurarIluminacion("interior", "dia");
console.log(resultadoNormal);

console.log("\n--- Ejecutando Caso Borde (Valores inválidos) ---");
const resultadoBorde = configurarIluminacion("fachada", "tarde");
console.log(resultadoBorde);