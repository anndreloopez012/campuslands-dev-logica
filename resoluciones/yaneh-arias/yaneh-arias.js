
/**
 * Ejercicio 014: Gestión de Puntajes con Validación de Empates
 * Autor: Yaneht Arias
 */

function procesarResultados(jugadores) {
    if (!jugadores || jugadores.length === 0) return "Entrada vacía";

    // Regla 1: Ordenar de mayor a menor
    const ordenados = [...jugadores].sort((a, b) => b.puntaje - a.puntaje);

    // Regla 2: Determinar ranking y manejar empate
    const ranking = ordenados.map((j, index) => {
        let puesto = index + 1;
        
        // Si el puntaje es igual al anterior, es un empate técnico
        if (index > 0 && j.puntaje === ordenados[index - 1].puntaje) {
            puesto = "Empate técnico";
        }
        
        return { nombre: j.nombre, puntaje: j.puntaje, puesto };
    });

    return ranking;
}

// --- PRUEBAS ---
// Caso Normal
const lista = [
    { nombre: "Jugador A", puntaje: 90 },
    { nombre: "Jugador B", puntaje: 85 },
    { nombre: "Jugador C", puntaje: 90 }
];

console.log("Caso Normal (con empate):", procesarResultados(lista));

// Caso Borde: Un solo jugador
console.log("Caso Borde:", procesarResultados([{ nombre: "Solitario", puntaje: 100 }]));