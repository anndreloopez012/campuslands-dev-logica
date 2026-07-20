function verificarItinerario(instrucciones, actividades) {
    const resultado = [];

    for (let i = 0; i < instrucciones.length; i++) {
        const instruccion = instrucciones[i];

        if (actividades.includes(instruccion)) {
            resultado.push({
                actividad: instruccion,
                estado: "Completada"
            });
        } else {
            resultado.push({
                actividad: instruccion,
                estado: "Pendiente"
            });
        }
    }

    return resultado;
}

// Ejemplo
const instruccionesViaje = [
    "Reservar hotel",
    "Comprar boletos",
    "Preparar equipaje",
    "Realizar check-in"
];

const actividadesRealizadas = [
    "Reservar hotel",
    "Preparar equipaje"
];

console.log(verificarItinerario(instruccionesViaje, actividadesRealizadas));