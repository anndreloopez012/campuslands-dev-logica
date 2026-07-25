
function filtrarInventarioMotos(motos, criterioFiltro) {
    // 1. Validar datos vacíos (Caso borde)
    if (!motos || motos.length === 0) {
        return {
            resultado: [],
            mensaje: "Error: El inventario de motos está vacío."
        };
    }

    // 2. Aplicar reglas de filtrado por condiciones (ej: marca y cilindraje)
    const motosFiltradas = motos.filter(moto => {
        let cumpleMarca = criterioFiltro.marca ? moto.marca.toLowerCase() === criterioFiltro.marca.toLowerCase() : true;
        let cumpleCilindraje = criterioFiltro.cilindrajeMax ? moto.cilindraje <= criterioFiltro.cilindrajeMax : true;
        
        return cumpleMarca && cumpleCilindraje;
    });

    // 3. Entregar resultado verificable
    return {
        accion: "Filtrar inventario según condiciones de búsqueda",
        criterioAplicado: criterioFiltro,
        totalEncontradas: motosFiltradas.length,
        motos: motosFiltradas
    };
}

// --- Casos de prueba ---
const inventarioGeneral = [
    { id: 1, marca: "Yamaha", modelo: "MT-03", cilindraje: 321, disponible: true },
    { id: 2, marca: "Honda", modelo: "CB190R", cilindraje: 184, disponible: true },
    { id: 3, marca: "Yamaha", model: "FZ25", cilindraje: 249, disponible: false },
    { id: 4, marca: "Suzuki", modelo: "GIXXER 250", cilindraje: 249, disponible: true }
];

// Prueba normal (Filtrar por marca Yamaha)
const pruebaNormal = filtrarInventarioMotos(inventarioGeneral, { marca: "Yamaha", cilindrajeMax: 400 });

// Caso borde (Inventario vacío)
const pruebaBorde = filtrarInventarioMotos([], { marca: "Honda" });

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(pruebaNormal, null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(pruebaBorde, null, 2));