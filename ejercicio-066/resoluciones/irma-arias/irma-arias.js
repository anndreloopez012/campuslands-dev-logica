function buscarHiperdeportivo(catalogo, criterioBusqueda) {
    // 1. Validar datos vacíos (Caso borde)
    if (!catalogo || catalogo.length === 0) {
        return {
            encontrado: false,
            mensaje: "Error: El catálogo de autos hiperdeportivos está vacío."
        };
    }

    // 2. Aplicar la regla de búsqueda por coincidencia exacta o parcial
    const resultadoBusqueda = catalogo.find(auto => {
        const coincideNombre = criterioBusqueda.nombre 
            ? auto.nombre.toLowerCase().includes(criterioBusqueda.nombre.toLowerCase()) 
            : true;
        const cumpleVelocidad = criterioBusqueda.velocidadMinima 
            ? auto.velocidadMaxKmH >= criterioBusqueda.velocidadMinima 
            : true;

        return coincideNombre && cumpleVelocidad;
    });

    // 3. Entregar resultado verificable
    if (resultadoBusqueda) {
        return {
            accion: "Búsqueda exitosa en el catálogo",
            criterioUtilizado: criterioBusqueda,
            autoEncontrado: resultadoBusqueda
        };
    } else {
        return {
            accion: "Búsqueda sin coincidencias",
            criterioUtilizado: criterioBusqueda,
            mensaje: "No se encontró ningún hiperdeportivo con los criterios especificados."
        };
    }
}

// --- Casos de prueba ---
const catalogoAutos = [
    { id: 1, nombre: "Bugatti Chiron", velocidadMaxKmH: 420, potenciaHp: 1500 },
    { id: 2, nombre: "Koenigsegg Jesko", velocidadMaxKmH: 480, potenciaHp: 1600 },
    { id: 3, nombre: "Rimac Nevera", velocidadMaxKmH: 412, potenciaHp: 1914 }
];

// Prueba normal (Buscar un auto que cumpla las condiciones)
const pruebaNormal = buscarHiperdeportivo(catalogoAutos, { nombre: "Koenigsegg", velocidadMinima: 450 });

// Caso borde (Catálogo vacío)
const pruebaBorde = buscarHiperdeportivo([], { nombre: "Bugatti" });

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(pruebaNormal, null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(pruebaBorde, null, 2));