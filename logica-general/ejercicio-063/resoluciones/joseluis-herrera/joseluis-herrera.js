function decidirAvanceTorneo(puntosLiga, victoriasConsecutivas, pingPromedio) {
    if (pingPromedio > 100) {
        return "Descalificado: Latencia inestable no permitida";
    }
    
    if (puntosLiga >= 2500 && victoriasConsecutivas >= 3) {
        return "Acceso directo: Fase de eliminatorias";
    } else if (puntosLiga >= 1500) {
        return "Acceso: Ronda de repechaje";
    } else {
        return "Estado: Eliminado del torneo";
    }
}

const participantes = [
    [2800, 4, 30],
    [1600, 1, 45],
    [1200, 0, 20],
    [3000, 2, 120]
];

for (let i = 0; i < participantes.length; i++) {
    let p = participantes[i];
    let resultado = decidirAvanceTorneo(p[0], p[1], p[2]);
    console.log(`Jugador ${i + 1}: ${resultado}`);
}