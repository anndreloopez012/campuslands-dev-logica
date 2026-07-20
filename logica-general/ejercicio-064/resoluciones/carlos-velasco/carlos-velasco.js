const filtrarMotos = (inventario, preferencias) => {
    const resultados = inventario.filter(moto => 
        moto.disponible && 
        moto.tipo === preferencias.tipoDeseado && 
        moto.precio <= preferencias.presupuestoMax
    );

    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No hay motos que cumplan con tus criterios." };
    }

    return { 
        encontrado: true, 
        modelos: resultados.map(m => m.modelo),
        motivo: "Se filtraron los resultados por disponibilidad, tipo y presupuesto."
    };
};

// Pruebas
const stock = [
    { modelo: "Sport-X", tipo: "deportiva", precio: 5000, disponible: true },
    { modelo: "Urban-Basic", tipo: "urbana", precio: 2000, disponible: true },
    { modelo: "Adventure-Pro", tipo: "urbana", precio: 8000, disponible: true }
];

console.log(filtrarMotos(stock, { tipoDeseado: "urbana", presupuestoMax: 3000 }));