const analizarRendimientoMoto = (pruebas, min, max) => {
    if (!pruebas.length) return { error: "Sin pruebas registradas." };

    const maximo = Math.max(...pruebas);
    const promedio = pruebas.reduce((a, b) => a + b, 0) / pruebas.length;

    let clasificacion = "Certificada";
    if (maximo > max) clasificacion = "Desgaste Excesivo";
    else if (maximo < min) clasificacion = "Bajo Rendimiento";

    return {
        maximo,
        promedio: promedio.toFixed(2),
        clasificacion,
        explicacion: `Moto con prueba máxima de ${maximo}km frente a límites ${min}-${max}.`
    };
};

console.log(analizarRendimientoMoto([100, 150, 200], 100, 250)); 
console.log(analizarRendimientoMoto([50, 60], 100, 250));