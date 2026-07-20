function detectarInconsistencias(canciones, umbral) {
    const inconsistencias = canciones
        .filter(c => c.duracion <= 0 || c.duracion > umbral)
        .map(c => c.nombre);
        
    return {
        lista_inconsistencias: inconsistencias,
        estado: inconsistencias.length > 0 
            ? "se detectaron inconsistencias en la playlist" 
            : "playlist validada correctamente"
    };
}