function analizarInventario(motos) {
    if (motos.length === 0) return "Inventario vacio";

    const motoMasPotente = motos.reduce((max, actual) => 
        actual.cc > max.cc ? actual : max
    );

    const motosEnRango = motos.filter(moto => moto.cc >= 250 && moto.cc <= 600);

    return {
        modeloMasPotente: motoMasPotente.modelo,
        cantidadEnRango: motosEnRango.length
    };
}

const inventario = [
    { modelo: "Yamaha MT-03", cc: 321 },
    { modelo: "Kawasaki Ninja 650", cc: 649 },
    { modelo: "Honda CB500F", cc: 471 }
];

console.log(analizarInventario(inventario));