function calcularTornea(participantes, bono, penalizacion){
    if(!participantes || participantes.lenght ===0)
        return {
        puntajes_final:0,
        clasificacion: "Sin participantes"
    };
    const sorted= [...participantes].sort((a,b)=> a -b);
    const mid= Math.floor(sorted.length / 2);
    const mediana= sorted.length % 2 !==0
        ? sorted[mid]
        :(sorted[mid-1]+sorted[mid])/2;


    const puntaje_final = mediana+ bono -penalizacion;


    const clasificacion=puntaje_final >= 25 ? "competitivo": "estandar";
    return {puntaje_final, clasificacion};
}


console.log(calcularTornea[12,18,25,30])
