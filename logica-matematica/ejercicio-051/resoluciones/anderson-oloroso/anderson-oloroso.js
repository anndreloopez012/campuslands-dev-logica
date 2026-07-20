function calcularCombates(posiblesLuchadores) {
    let combinaciones = 0;

    for (let i = 0; i < posiblesLuchadores.length; i++) {
        for (let j = i + 1; j < posiblesLuchadores.length; j++) {
            combinaciones++;
        }
    }

    return combinaciones;
}

// Ejemplo
const luchadores = [
    "Carlos",
    "Ana",
    "Luis",
    "Sofía"
];

console.log("Combates posibles:", calcularCombates(luchadores));