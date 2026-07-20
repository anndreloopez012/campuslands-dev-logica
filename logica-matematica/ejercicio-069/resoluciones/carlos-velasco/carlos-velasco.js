const clasificarSucesos = (segundos) => {
    let tipo = "";
    
    if (segundos % 10 === 0) {
        tipo = "Susto Critico";
    } else if (segundos % 2 === 0) {
        tipo = "Susto Leve";
    } else {
        tipo = "Tension Acumulada";
    }

    return {
        segundos: segundos,
        tipo_susto: tipo,
        explicacion: `El evento ocurrio en el segundo ${segundos}, clasificado segun divisibilidad.`
    };
};

console.log(clasificarSucesos(20));
console.log(clasificarSucesos(7)); 