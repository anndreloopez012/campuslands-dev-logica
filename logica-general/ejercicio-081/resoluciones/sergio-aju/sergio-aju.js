const participantes_torneo = [
    { gamertag: "BlazeRunner", proporcion_kp: 3.8, encuentros: 110, reputacion: 5 },
    { gamertag: "FrostByte", proporcion_kp: 2.1, encuentros: 60, reputacion: 2 },
    { gamertag: "ShadowStrike", proporcion_kp: 4.5, encuentros: 150, reputacion: 4 },
    { gamertag: "PixelQueen", proporcion_kp: 1.2, encuentros: 40, reputacion: 1 },
    { gamertag: "Vortex_99", proporcion_kp: 3.1, encuentros: 95, reputacion: 3 }
];

let seleccionados_diamante = [];

let verificar_criterio_diamante = (participante) => 
    (participante.proporcion_kp >= 3.0) && 
    (participante.encuentros >= 90) && 
    (participante.reputacion >= 3);

if (participantes_torneo.length === 0) {
    console.log("No hay registros disponibles para evaluar.");
} else {
    participantes_torneo.forEach((participante) => {
        if (verificar_criterio_diamante(participante)) {
            seleccionados_diamante.push(participante);
        }
    });
    console.log(`Se promocionaron ${seleccionados_diamante.length} competidores a la división diamante.`);
}