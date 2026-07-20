function encontrarMejorMoto(motos, limite) {
    const aptas = motos.filter(m => m.precio <= limite);
    
    if (aptas.length === 0) return { moto_maxima: null, clasificacion_segmento: "sin opciones" };
    
    const maxMoto = aptas.reduce((prev, curr) => (curr.precio > prev.precio ? curr : prev));
    
    let segmento = "";
    if (maxMoto.precio > 5000) segmento = "gama alta";
    else if (maxMoto.precio >= 2000) segmento = "gama media";
    else segmento = "gama económica";
    
    return { moto_maxima: maxMoto, clasificacion_segmento: segmento };
}