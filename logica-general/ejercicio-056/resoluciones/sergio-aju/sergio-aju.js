function procesarCapas(lista) {
    const errorCapa = lista.find(c => c.estado === 'error');
    if (errorCapa) {
        return { accion: `priorizar capa ${errorCapa.nombre}`, motivo: "se detectó un error crítico" };
    }

    const esperaCapa = lista.find(c => c.estado === 'espera');
    if (esperaCapa) {
        return { accion: `procesar capa ${esperaCapa.nombre}`, motivo: "es la siguiente en la cola" };
    }

    return { accion: "nada que hacer", motivo: "todas las capas han sido renderizadas" };
}