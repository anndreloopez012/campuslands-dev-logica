function calcularRendimientoEquipos(partidosJugados, partidosGanados) {
    let efectividad = (partidosGanados / partidosJugados) * 100;
    
    if (efectividad >= 75) {
        return "Nivel: Elite - Candidato al titulo";
    } else if (efectividad >= 50) {
        return "Nivel: Competitivo - Zona de clasificacion";
    } else {
        return "Nivel: Formacion - Requiere mejora";
    }
}

const equipos = [
    ["Leon FC", 20, 16],
    ["Rayos", 20, 10],
    ["Gatos", 20, 5]
];

for (let i = 0; i < equipos.length; i++) {
    let nombre = equipos[i][0];
    let resultado = calcularRendimientoEquipos(equipos[i][1], equipos[i][2]);
    console.log(`Equipo: ${nombre} | ${resultado}`);
}