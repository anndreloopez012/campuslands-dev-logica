// Función 1: Validar si la lista de combatientes es válida
function validarListaCombatientes(combatientes) {
    if (!combatientes || !Array.isArray(combatientes) || combatientes.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Filtrar combatientes aptos por categoría de peso
function filtrarPorCategoria(combatientes, categoriaObjetivo) {
    return combatientes.filter(c => c.categoria.toLowerCase() === categoriaObjetivo.toLowerCase());
}

// Función 3: Ordenar la lista filtrada por mayor cantidad de victorias (Ranking)
function ordenarPorRendimiento(combatientes) {
    return [...combatientes].sort((a, b) => b.victorias - a.victorias);
}

// Función principal que coordina el flujo aplicando las funciones pequeñas
function organizarRankingKickboxing(combatientes, categoriaObjetivo) {
    if (!validarListaCombatientes(combatientes)) {
        return {
            estado: "Error",
            mensaje: "La lista de combatientes está vacía o no tiene un formato válido."
        };
    }

    const filtrados = filtrarPorCategoria(combatientes, categoriaObjetivo);
    
    if (filtrados.length === 0) {
        return {
            estado: "Sin resultados",
            mensaje: `No se encontraron combatientes en la categoría ${categoriaObjetivo}.`
        };
    }

    const rankingOrdenado = ordenarPorRendimiento(filtrados);

    return {
        accion: "Organización de listas y ranking en kickboxing",
        categoria: categoriaObjetivo,
        totalClasificados: rankingOrdenado.length,
        ranking: rankingOrdenado
    };
}

// --- Casos de prueba ---
const listaCombatientesNormal = [
    { nombre: "Carlos Silva", categoria: "Wélter", victorias: 12, derrotas: 2 },
    { nombre: "Alex Turner", categoria: "Peso Ligero", victorias: 8, derrotas: 1 },
    { nombre: "Miguel Ángel", categoria: "Wélter", victorias: 15, derrotas: 3 },
    { nombre: "David Ruiz", categoria: "Wélter", victorias: 12, derrotas: 5 } // Empate en victorias con Carlos
];

const listaCombatientesBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(organizarRankingKickboxing(listaCombatientesNormal, "Wélter"), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(organizarRankingKickboxing(listaCombatientesBorde, "Wélter"), null, 2));