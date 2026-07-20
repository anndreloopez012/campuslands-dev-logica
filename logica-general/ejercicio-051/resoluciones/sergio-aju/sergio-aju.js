function obtenerSiguientePeleador(peleadores) {
    const aptos = peleadores.filter(p => p.estado === "apto");
    if (aptos.length === 0) {
        return "No hay peleadores aptos disponibles.";
    }
    aptos.sort((a, b) => b.nivel - a.nivel);
    return `El siguiente peleador es: ${aptos[0].nombre}`;
}
const lista1 = [
    {nombre: "Ana", estado: "apto", nivel: 3},
    {nombre: "Luis", estado: "apto", nivel: 5},
    {nombre: "Juan", estado: "lesionado", nivel: 4},
    {nombre: "Pedro", estado: "apto", nivel: 5}
];
console.log("Prueba normal:", obtenerSiguientePeleador(lista1));
const lista2 = [
    {nombre: "Carla", estado: "suspendido", nivel: 5},
    {nombre: "Diego", estado: "lesionado", nivel: 2}
];
console.log("Prueba borde:", obtenerSiguientePeleador(lista2));