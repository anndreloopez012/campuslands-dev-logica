const asignarTurno = (operarios, urgencia) => {
    const disponibles = operarios.filter(o => o.estaDisponible);

    if (disponibles.length === 0) {
        return { operario: "Ninguno", motivo: "No hay personal disponible para el turno." };
    }

    // Ordenar según la urgencia: Alta busca experto (desc), Baja busca aprendiz (asc)
    disponibles.sort((a, b) => urgencia === "Alta" ? b.experiencia - a.experiencia : a.experiencia - b.experiencia);

    return {
        operario: disponibles[0].nombre,
        motivo: `Asignado por criterio de urgencia ${urgencia} (Experiencia: ${disponibles[0].experiencia}).`
    };
};

// Pruebas
const personal = [
    { nombre: "Ana", experiencia: 9, estaDisponible: true },
    { nombre: "Luis", experiencia: 3, estaDisponible: true }
];

console.log(asignarTurno(personal, "Alta")); // Asigna a Ana
console.log(asignarTurno(personal, "Baja")); // Asigna a Luis