function calcularPuntajePelicula(calificaciones, factor) {
    if (calificaciones.length === 0) return { puntuacion_final: 0, clasificacion_calidad: "Regular" };
    
    const suma = calificaciones.reduce((acc, val) => acc + val, 0);
    let promedio = suma / calificaciones.length;
    
    const excelentes = calificaciones.filter(c => c >= 8).length;
    if (excelentes >= (calificaciones.length / 2)) {
        promedio += factor;
    }
    
    let categoria = "";
    if (promedio >= 9.0) categoria = "Obra Maestra";
    else if (promedio >= 7.0) categoria = "Recomendada";
    else if (promedio >= 5.0) categoria = "Culto";
    else categoria = "Regular";
    
    return { 
        puntuacion_final: parseFloat(promedio.toFixed(2)), 
        clasificacion_calidad: categoria 
    };
}