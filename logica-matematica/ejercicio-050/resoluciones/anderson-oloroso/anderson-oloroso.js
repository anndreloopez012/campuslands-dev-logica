function calcularCostoViaje(destinos) {
    let costoTotal = 0;
    const detalleViaje = [];

    for (let i = 0; i < destinos.length; i++) {
        const costoRedondeado = Math.round(destinos[i].costo * 100) / 100;

        detalleViaje.push({
            destino: destinos[i].nombre,
            costo: costoRedondeado
        });

        costoTotal += costoRedondeado;
    }

    costoTotal = Math.round(costoTotal * 100) / 100;

    return {
        detalleViaje,
        costoTotal
    };
}

// Ejemplo
const viaje = [
    { nombre: "París", costo: 850.456 },
    { nombre: "Roma", costo: 720.789 },
    { nombre: "Tokio", costo: 1250.555 }
];

const resultado = calcularCostoViaje(viaje);

console.log("Detalle del viaje:", resultado.detalleViaje);
console.log("Costo total:", resultado.costoTotal);