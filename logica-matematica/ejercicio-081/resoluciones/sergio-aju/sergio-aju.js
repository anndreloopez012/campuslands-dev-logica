const puntajes_base = [12, 18, 25, 30];
const bono_otorgado = 8;
const penalizacion_aplicada = 3;

let calcular_puntaje_final = (lista_puntajes, bono, penalizacion) => {
    let acumulado = 0;
    for (let i = 0; i < lista_puntajes.length; i++) {
        acumulado += lista_puntajes[i];
    }
    let resultado_final = acumulado + bono - penalizacion;
    return resultado_final;
};

if (puntajes_base.length === 0) {
    console.log("No hay puntajes registrados para calcular.");
} else {
    let puntaje_final = calcular_puntaje_final(puntajes_base, bono_otorgado, penalizacion_aplicada);
    let clasificacion = puntaje_final >= 50 ? "competitivo" : "estandar";
    
    console.log(`puntaje_final: ${puntaje_final}`);
    console.log(`clasificacion: ${clasificacion}`);
    console.log("explicacion: se sumo el bono y se resto la penalizacion segun las reglas.");
}