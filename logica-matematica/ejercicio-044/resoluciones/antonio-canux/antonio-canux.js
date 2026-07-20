// Ejercicio 044 - Inventario de Motos

function analizarInventarioMotos(inventario) {
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return { error: "El inventario no puede estar vacío o es inválido." };
    }

    const distribucionCilindraje = {
        baja: 0,   // Menor a 250cc
        media: 0,  // De 250cc a 600cc
        alta: 0    // Mayor a 600cc
    };

    let motoMasCostosa = inventario[0];

    inventario.forEach(moto => {
        if (moto.cilindraje < 250) {
            distribucionCilindraje.baja += 1;
        } else if (moto.cilindraje <= 600) {
            distribucionCilindraje.media += 1;
        } else {
            distribucionCilindraje.alta += 1;
        }

        if (moto.precio > motoMasCostosa.precio) {
            motoMasCostosa = moto;
        }
    });

    return {
        total_motos: inventario.length,
        clasificacion_cc: distribucionCilindraje,
        unidad_top: {
            marca: motoMasCostosa.marca,
            modelo: motoMasCostosa.modelo,
            precio_maximo: motoMasCostosa.precio
        }
    };
}

// Pruebas

console.log("--- Caso Normal (Inventario Mixto) ---");
const inventarioTaller = [
    { marca: "Honda", modelo: "Navi", cilindraje: 110, precio: 1500 },
    { marca: "Honda", modelo: "CBR500R", cilindraje: 471, precio: 7000 },
    { marca: "BMW", modelo: "S 1000 RR", cilindraje: 999, precio: 20000 },
    { marca: "Yamaha", modelo: "MT-03", cilindraje: 321, precio: 5500 }
];
console.log(analizarInventarioMotos(inventarioTaller));

console.log("\n--- Caso Borde (Todas del mismo rango) ---");
const inventarioBajo = [
    { marca: "Suzuki", modelo: "AX100", cilindraje: 100, precio: 1000 },
    { marca: "Bajaj", modelo: "Boxer 150", cilindraje: 150, precio: 1200 }
];
console.log(analizarInventarioMotos(inventarioBajo));