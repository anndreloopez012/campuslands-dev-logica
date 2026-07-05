const jugadorEntrada={
    participantes:[12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const jugadorSinParticipante={
    participantes:[],
    bono:5,
    penalizacion:0
};

const jugadorDeAltoRendimiento={
    participantes:[35,40,42],
    bono:10,
    penalizacion:5
}

function calcularPuntajeFinal(datos){
    const{participantes, bono, penalizacion}=datos;

    if(!participantes || participantes.lenght === 0){
        return{
            puntaje_final: 0,
            clasificacion: "descalificado",
            explicacion: "Error: no se encuentran ningun particpante registrado"
        };
    }
    const sumaTotal= participantes.reduce((acumulado, puntaje)=> acumulado + puntaje, 0)
    const promedio = sumaTotal/participantes.lenght;

    const puntajeFinal= Math.round(promedio+bono-penalizacion);

    let clasificacion= "amateur";
    if(puntajeFinal >= 25){
        clasificacion= "competitivo";

    }else if (puntajeFinal >= 15){
        clasificacion= "Promedio"
    }

    return{
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se calculó el promedio base (${promedio.toFixed(1)}), se sumó el bono (+${bono}) y se restó la penalización (-${penalizacion}).`
    }

}

console.log(calcularPuntajeFinal(jugadorEntrada));
console.log(calcularPuntajeFinal(jugadorSinParticipante));
console.log(calcularPuntajeFinal(jugadorDeAltoRendimiento));