function recomendarRaqueta(raquetas, estiloJugador) {
    const opciones = raquetas.filter(r => r.estilo === estiloJugador);
    
    if (opciones.length === 0) return "No hay raquetas disponibles que se ajusten a tu estilo.";
    opciones.sort((a, b) => {
        const preferenciaA = (estiloJugador === 'ofensivo' ? (a.material === 'carbono' ? 1 : 0) : (a.material === 'madera' ? 1 : 0));
        const preferenciaB = (estiloJugador === 'ofensivo' ? (b.material === 'carbono' ? 1 : 0) : (b.material === 'madera' ? 1 : 0));
        return preferenciaB - preferenciaA;
    });

    return `Raqueta recomendada: ${opciones[0].nombre}`;
}