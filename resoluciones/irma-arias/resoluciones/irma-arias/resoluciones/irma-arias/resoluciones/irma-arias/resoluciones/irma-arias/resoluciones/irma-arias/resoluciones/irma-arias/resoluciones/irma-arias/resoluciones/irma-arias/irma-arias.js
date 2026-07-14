
/**
 * Organiza a los peleadores bajo las reglas de Kickboxing
 * Regla: Mayor número de victorias primero.
 * Empate: Menor peso primero.
 */
function organizarRanking(peleadores) {
    // Caso borde: Validación de lista vacía o nula
    if (!Array.isArray(peleadores) || peleadores.length === 0) {
        return "Error: La lista de peleadores está vacía o no es válida.";
    }

    // Usamos .sort para crear el ranking
    return [...peleadores].sort((a, b) => {
        // Criterio 1: Victorias (Descendente)
        if (b.victorias !== a.victorias) {
            return b.victorias - a.victorias;
        }
        // Criterio 2: Peso (Ascendente - Desempate)
        return a.peso - b.peso;
    });
}

// --- Pruebas ---
const peleadores = [
    { nombre: "Alex", peso: 75, victorias: 8 },
    { nombre: "Bruno", peso: 70, victorias: 8 }, // Empate en victorias con Alex, debe ir primero por peso
    { nombre: "Carlos", peso: 80, victorias: 3 }
];

console.log("Ranking Final:", organizarRanking(peleadores));