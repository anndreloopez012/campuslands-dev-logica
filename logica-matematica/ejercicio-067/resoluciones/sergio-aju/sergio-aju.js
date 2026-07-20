function calcularPlaylist(duraciones, transicion) {
    if (duraciones.length === 0) return { tiempo_total_sesion: 0, clasificacion_playlist: "sesión rápida" };
    
    const sumaCanciones = duraciones.reduce((acc, val) => acc + val, 0);
    const totalTransiciones = duraciones.length > 1 ? (duraciones.length - 1) * transicion : 0;
    const tiempoTotal = sumaCanciones + totalTransiciones;
    
    let categoria = "";
    if (tiempoTotal >= 3600) categoria = "sesión maratónica";
    else if (tiempoTotal >= 1800) categoria = "sesión estándar";
    else categoria = "sesión rápida";
    
    return { 
        tiempo_total_sesion: tiempoTotal, 
        clasificacion_playlist: categoria 
    };
}