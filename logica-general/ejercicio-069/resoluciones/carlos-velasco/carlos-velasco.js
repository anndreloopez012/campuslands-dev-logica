// ejercicio logica - simulacion de estados - Ejercicio 069

const simularEstadoPersonaje = (evento) => {
    let estado = "calmado";
    let accion = "";

    switch (evento) {
        case "ruido_en_sotano":
            estado = "alerta";
            accion = "investigar con linterna";
            break;
        case "sombra_en_ventana":
            estado = "aterrado";
            accion = "correr y cerrar puertas";
            break;
        case "grito_lejano":
            estado = "panico";
            accion = "esconderse en armario";
            break;
        default:
            estado = "calmado";
            accion = "continuar viendo la pelicula";
    }

    return {
        estado_actual: estado,
        accion_sugerida: accion,
        riesgo: estado === "panico" ? "alto" : "bajo"
    };
};

console.log(simularEstadoPersonaje("ruido_en_sotano"));
console.log(simularEstadoPersonaje("grito_lejano"));