function calcularPromedioVelocidad(velocidadesMph, factor) {
    if (velocidadesMph.length === 0) return { promedio_velocidad_kmh: 0, clasificacion_rendimiento: "estándar" };
    
    const velocidadesKmh = velocidadesMph.map(v => v * factor);
    let promedio = velocidadesKmh.reduce((acc, val) => acc + val, 0) / velocidadesMph.length;
    
    // Bono aerodinámico si supera 400 km/h
    if (promedio > 400) {
        promedio += 20; 
    }
    
    let categoria = "";
    if (promedio >= 450) categoria = "hiper-rápido";
    else if (promedio >= 350) categoria = "competitivo";
    else categoria = "estándar";
    
    return { 
        promedio_velocidad_kmh: parseFloat(promedio.toFixed(2)), 
        clasificacion_rendimiento: categoria 
    };
}