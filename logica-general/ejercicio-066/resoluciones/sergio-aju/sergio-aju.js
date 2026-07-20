function buscarAutosPorVelocidad(autos, velocidadObjetivo) {
    const encontrados = autos.filter(a => a.velocidad_maxima >= velocidadObjetivo);
    
    return {
        autos_encontrados: encontrados.map(a => a.modelo),
        resultado: encontrados.length > 0 
            ? `se encontró ${encontrados.length} vehículo con el rendimiento solicitado`
            : "no hay autos que alcancen esa velocidad"
    };
}