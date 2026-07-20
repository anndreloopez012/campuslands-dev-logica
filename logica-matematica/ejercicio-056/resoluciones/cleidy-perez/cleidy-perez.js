const proyectos3D = [
    {nombre: "Casa", precio: 500},
    {nombre: "Carro", precio: 800},
    {nombre: "Personaje", precio: 1200}
];

function calcularPresupuesto(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].precio >= 1000) {
            console.log(lista[i].nombre + " tiene 15% de descuento");
            total += lista[i].precio * 0.85;
        } else {
            console.log(lista[i].nombre + " no tiene descuento");
            total += lista[i].precio;
        }

    }

    console.log("Total a pagar: Q" + total);
}

calcularPresupuesto(proyectos3D);