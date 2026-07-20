// Ejercicio 044 - Rangos y máximos

// Entradas: inventario de motos
const motos = [
    { modelo: "Moto A", precio: 5000 },
    { modelo: "Moto B", precio: 8500 },
    { modelo: "Moto C", precio: 12000 },
    { modelo: "Moto D", precio: 3000 }
];

const limiteInferior = 4000;
const limiteSuperior = 10000;

function analizarInventario(motos, limiteInferior, limiteSuperior) {

    if (!Array.isArray(motos) || motos.length === 0) {
        return {
            error: "El inventario está vacío."
        };
    }

    let motoMasCara = motos[0];
    let dentroDelRango = [];

    for (let i = 0; i < motos.length; i++) {

        if (motos[i].precio > motoMasCara.precio) {
            motoMasCara = motos[i];
        }

        if (
            motos[i].precio >= limiteInferior &&
            motos[i].precio <= limiteSuperior
        ) {
            dentroDelRango.push(motos[i]);
        }
    }

    return {
        moto_maxima: motoMasCara.modelo,
        precio_maximo: motoMasCara.precio,
        motos_en_rango: dentroDelRango,
        cantidad_en_rango: dentroDelRango.length,
        explicacion: "Se recorrió el inventario para encontrar el precio máximo y las motos dentro del rango establecido."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(analizarInventario(motos, limiteInferior, limiteSuperior));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(analizarInventario([], limiteInferior, limiteSuperior));