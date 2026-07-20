function buscarAuto(lista, autoBuscado) {
    if (lista.length === 0) {
        return "La lista está vacía.";
    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === autoBuscado) {
            return `Auto encontrado en la posición ${i}.`;
        }
    }

    return "El auto no fue encontrado.";
}

const autos = [
    "Bugatti Chiron",
    "Koenigsegg Jesko",
    "Rimac Nevera",
    "Pagani Huayra",
    "McLaren Speedtail"
];

console.log("Caso normal:");
console.log(buscarAuto(autos, "Koenigsegg Jesko"));

console.log("");

console.log("Caso borde:");
console.log(buscarAuto([], "Bugatti Chiron"));

console.log("");

console.log("Caso adicional:");
console.log(buscarAuto(autos, "Ferrari F80"));