function filtrarInventario(motos, estadoBuscado) {
    const encontradas = motos.filter(moto => moto.estado === estadoBuscado);
    
    return {
        motos_encontradas: encontradas,
        cantidad: encontradas.length
    };
}