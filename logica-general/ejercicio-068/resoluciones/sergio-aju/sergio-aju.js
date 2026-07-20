function evaluarFlujoProduccion(pelicula, fase) {
    switch (fase) {
        case "desarrollo":
            return { siguiente_fase: "rodaje", explicacion: "presupuesto aprobado" };
        case "rodaje":
            return { siguiente_fase: "postproducción", explicacion: "cronograma de grabación finalizado" };
        case "postproducción":
            if (pelicula.recaudacion >= (pelicula.presupuesto * 2)) {
                return { siguiente_fase: "estreno", explicacion: "rentabilidad confirmada" };
            }
            return { siguiente_fase: "cancelada", explicacion: "rentabilidad insuficiente" };
        default:
            return { siguiente_fase: "finalizada", explicacion: "proceso completado" };
    }
}