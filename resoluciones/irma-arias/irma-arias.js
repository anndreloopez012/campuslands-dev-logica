/**
 * Ejercicio 006: Búsqueda de elementos - Autos hiperdeportivos
 * Autor: Irma Yaneht Arias García
 */

const autosHiperdeportivos = [
    {
        modelo: "Bugatti Chiron", velocidadMax: 490
    },
    { modelo: "Koenigsegg Jesko", velocidadMax: 480 },
    { modelo: "Rimac Nevera", velocidadMax: 412 }
];

function buscarAutoPorVelocidad(lista, velocidadObjetivo) {
    const encontrado = lista.find(auto => auto.velocidadMax >= velocidadObjetivo);
    return encontrado ? `Auto encontrado: ${encontrado.modelo}` : "No se encontró ningún auto con esa velocidad.";
}

// Prueba
console.log(buscarAutoPorVelocidad(autosHiperdeportivos, 450));