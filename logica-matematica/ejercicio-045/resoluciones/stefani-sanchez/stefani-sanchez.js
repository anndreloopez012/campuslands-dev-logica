// Ejercicio 045 - Mínimos y límites

const reparaciones = [
    { servicio: "Cambio de aceite", costo: 80 },
    { servicio: "Cambio de frenos", costo: 250 },
    { servicio: "Revisión general", costo: 120 },
    { servicio: "Cambio de batería", costo: 300 }
];

const limiteMinimo = 100;
const limiteMaximo = 250;

function analizarServicios(reparaciones, minimo, maximo) {

    if (reparaciones.length === 0) {
        return {
            error: "No existen servicios registrados."
        };
    }

    let servicioMenor = reparaciones[0];
    let serviciosDentroLimite = [];

    for (let i = 0; i < reparaciones.length; i++) {

        if (reparaciones[i].costo < servicioMenor.costo) {
            servicioMenor = reparaciones[i];
        }

        if (
            reparaciones[i].costo >= minimo &&
            reparaciones[i].costo <= maximo
        ) {
            serviciosDentroLimite.push(reparaciones[i]);
        }
    }

    return {
        servicio_minimo: servicioMenor.servicio,
        costo_minimo: servicioMenor.costo,
        servicios_en_limite: serviciosDentroLimite,
        cantidad: serviciosDentroLimite.length,
        explicacion: "Se encontró el menor costo y los servicios dentro de los límites establecidos."
    };
}


// Prueba normal
console.log(analizarServicios(reparaciones, limiteMinimo, limiteMaximo));


// Caso borde
console.log(analizarServicios([], limiteMinimo, limiteMaximo));