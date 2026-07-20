function ordenarPrioridades(vehiculos, capacidad) {
    const pesos = { "urgente": 1, "mantenimiento": 2, "estético": 3 };
    
    const ordenados = vehiculos.sort((a, b) => pesos[a.averia] - pesos[b.averia]);
    const listaAtencion = ordenados.slice(0, capacidad).map(v => v.nombre);
    
    return {
        lista_atencion: listaAtencion,
        estado_taller: vehiculos.length >= capacidad ? "ocupado" : "disponible"
    };
}