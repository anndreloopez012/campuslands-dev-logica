function calcularDistanciaAterrizajes(puntos) {
    const resultados = [];

    for (let i = 0; i < puntos.length; i++) {
        const punto = puntos[i];

        const distancia = Math.sqrt(
            Math.pow(punto.x, 2) + Math.pow(punto.y, 2)
        );

        resultados.push({
            participante: punto.nombre,
            distancia: distancia.toFixed(2)
        });
    }

    return resultados;
}

// Ejemplo
const aterrizajes = [
    { nombre: "Carlos", x: 3, y: 4 },
    { nombre: "Ana", x: 5, y: 12 },
    { nombre: "Luis", x: 8, y: 15 }
];

console.log(calcularDistanciaAterrizajes(aterrizajes));