const generarRankingProyectos = (proyectos, bono, penalizacion) => {
    return proyectos.map(p => {
        let final = p.puntaje;
        if (p.puntaje > 80) final += bono;
        else if (p.puntaje < 50) final -= penalizacion;

        let clasif = "Crítico";
        if (final > 85) clasif = "Excelente";
        else if (final > 60) clasif = "Aceptable";

        return { nombre: p.nombre, puntaje_final: final, clasificacion: clasif };
    }).sort((a, b) => b.puntaje_final - a.puntaje_final);
};

// Pruebas
const lista = [{nombre: "Edificio A", puntaje: 85}, {nombre: "Casa B", puntaje: 40}];
console.log(generarRankingProyectos(lista, 10, 5));