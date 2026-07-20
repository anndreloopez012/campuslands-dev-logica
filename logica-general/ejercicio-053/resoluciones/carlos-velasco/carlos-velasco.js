const evaluarSalto = (condiciones) => {
    if (condiciones.velocidadViento > 40) {
        return { estado: "Cancelado", motivo: "Exceso de velocidad del viento." };
    }
    if (condiciones.visibilidadMetros < 1000) {
        return { estado: "Cancelado", motivo: "Visibilidad insuficiente." };
    }
    if (["Tormenta", "Lluvia"].includes(condiciones.estadoClima)) {
        return { estado: "Cancelado", motivo: "Condiciones climáticas adversas." };
    }

    return { estado: "Aprobado", motivo: "Condiciones óptimas para el salto." };
};

const condicionesActuales = { velocidadViento: 25, visibilidadMetros: 1500, estadoClima: "Soleado" };
console.log(evaluarSalto(condicionesActuales));