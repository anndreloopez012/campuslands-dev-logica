function ordenarPorPrioridad(vehiculos) {
    const niveles = {
        "Emergencia": 1,
        "Mantenimiento": 2,
        "Revision": 3
    };
    
    return vehiculos.sort((a, b) => niveles[a.tipo] - niveles[b.tipo]);
}

const colaTaller = [
    { cliente: "Juan", tipo: "Mantenimiento" },
    { cliente: "Maria", tipo: "Emergencia" },
    { cliente: "Pedro", tipo: "Revision" },
    { cliente: "Ana", tipo: "Emergencia" }
];

const listaOrdenada = ordenarPorPrioridad(colaTaller);

console.log("Orden de atención en el taller:");
listaOrdenada.forEach((v, i) => {
    console.log(`${i + 1}. Cliente: ${v.cliente} | Prioridad: ${v.tipo}`);
});