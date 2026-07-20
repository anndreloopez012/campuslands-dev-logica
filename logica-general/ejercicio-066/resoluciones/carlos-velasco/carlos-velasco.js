const buscarHiperdeportivo = (inventario, criterio) => {
    const { marcaDeseada, velocidadMinima } = criterio;

    const candidatos = inventario.filter(auto => 
        auto.marca.toLowerCase() === marcaDeseada.toLowerCase() && 
        auto.velocidadMax >= velocidadMinima
    );

    if (candidatos.length === 0) {
        return {
            accion: "Continuar búsqueda",
            modelo_encontrado: "Ninguno",
            motivo: `No se encontraron autos de la marca ${marcaDeseada} que alcancen los ${velocidadMinima} km/h.`
        };
    }

    const autoOptimo = candidatos.reduce((exclusivo, actual) => 
        actual.unidadesProducidas < exclusivo.unidadesProducidas ? actual : exclusivo
    );

    return {
        accion: "Asignar vehículo al cliente",
        modelo_encontrado: `${autoOptimo.marca} ${autoOptimo.modelo}`,
        motivo: `Cumple con la velocidad de ${autoOptimo.velocidadMax} km/h y es el espécimen más exclusivo con solo ${autoOptimo.unidadesProducidas} unidades.`
    };
};

const garajeGiga = [
    { modelo: "Chiron", marca: "Bugatti", velocidadMax: 420, unidadesProducidas: 500 },
    { modelo: "Bolide", marca: "Bugatti", velocidadMax: 501, unidadesProducidas: 40 },
    { modelo: "Jesko", marca: "Koenigsegg", velocidadMax: 531, unidadesProducidas: 125 }
];

console.log(buscarHiperdeportivo(garajeGiga, { marcaDeseada: "Bugatti", velocidadMinima: 400 }));