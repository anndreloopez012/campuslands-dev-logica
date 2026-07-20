function filtrarMotosParaVenta(inventario, presupuestoMax, requiereRevision) {
    let opcionesDisponibles = [];

    for (let i = 0; i < inventario.length; i++) {
        let modelo = inventario[i].nombre;
        let precio = inventario[i].precio;
        let necesitaRevision = inventario[i].revision;

        if (precio <= presupuestoMax && necesitaRevision === requiereRevision) {
            opcionesDisponibles.push(modelo);
        }
    }

    return opcionesDisponibles;
}
const stock = [
    { nombre: "Yamaha MT-07", precio: 7000, revision: false },
    { nombre: "Honda CB500", precio: 5500, revision: true },
    { nombre: "Kawasaki Z900", precio: 9000, revision: false },
    { nombre: "Suzuki GSX-S750", precio: 6000, revision: false }
];

const busqueda = filtrarMotosParaVenta(stock, 7500, false);

console.log("Opciones encontradas dentro de tu presupuesto y listas para venta:");
console.log(busqueda);