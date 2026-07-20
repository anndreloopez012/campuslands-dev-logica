const decidirEstadoTorneo = (ping, estado) => {
    if (estado === "caido") {
        return { accion: "Suspender Partida", motivo: "Conexión interrumpida." };
    }

    if (estado === "inestable" || ping > 150) {
        return { accion: "Activar Pausa Técnica", motivo: "Latencia alta detectada." };
    }

    return { accion: "Continuar Partida", motivo: "Condiciones óptimas para competir." };
};

console.log(decidirEstadoTorneo(40, "estable"));   
console.log(decidirEstadoTorneo(200, "estable"));  
console.log(decidirEstadoTorneo(10, "caido"));     