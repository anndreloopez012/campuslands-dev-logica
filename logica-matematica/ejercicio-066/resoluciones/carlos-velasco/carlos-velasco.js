const convertirUnidades = (hp, mph) => {
    const kw = (hp * 0.7457).toFixed(2);
    const kph = (mph * 1.60934).toFixed(2);

    let clasificacion = "Deportivo";
    if (kph > 400) clasificacion = "Hiperdeportivo";
    else if (kph > 250) clasificacion = "Superdeportivo";

    return {
        potencia_kw: parseFloat(kw),
        velocidad_kph: parseFloat(kph),
        clasificacion: clasificacion,
        explicacion: `Conversión realizada: ${hp}HP a ${kw}KW y ${mph}MPH a ${kph}KPH.`
    };
};

console.log(convertirUnidades(1000, 250)); 
console.log(convertirUnidades(200, 100));  