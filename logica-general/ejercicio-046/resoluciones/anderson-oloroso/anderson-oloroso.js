function buscarAuto(autos, marcaBuscada) {
    const resultados = [];

    for (let i = 0; i < autos.length; i++) {
        if (autos[i].marca.toLowerCase() === marcaBuscada.toLowerCase()) {
            resultados.push(autos[i]);
        }
    }

    return resultados;
}

// Ejemplo
const autos = [
    { marca: "Ferrari", modelo: "SF90", velocidad: 340 },
    { marca: "Bugatti", modelo: "Chiron", velocidad: 420 },
    { marca: "Ferrari", modelo: "Purosangue", velocidad: 310 },
    { marca: "Lamborghini", modelo: "Revuelto", velocidad: 350 }
];

const encontrados = buscarAuto(autos, "Ferrari");

console.log("Autos encontrados:");
console.log(encontrados);